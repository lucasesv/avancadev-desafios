import got from 'got';
import amqp from 'amqplib/callback_api';


interface OrderResult {
  status: string;
}

interface ServiceCResponse {
  status: string;
}

function runRabbitmq() {
  amqp.connect('amqp://rabbitmq:rabbitmq@rabbit', function(connectionError, connection) {
    if (connectionError) {
      setTimeout(() => {
        runRabbitmq();
      }, 5000);
      return;
    }
    
    connection.createChannel(function(channelError, channel) {
      if (channelError) {
        setTimeout(() => {
          runRabbitmq();
        }, 5000);
        connection.close();
      }
      
      const queue = 'orders';
      console.log("[*] Waiting for messages in %s. To exit press CTRL+C", queue);

      channel.consume(queue, async function(msg) {

        const orderResult: OrderResult = { status: 'declined' };
        
        if (msg) {

          console.log("[x] Message Received");
          
          const {coupon, creditCardNumber} = JSON.parse(msg.content.toString());

          if (creditCardNumber === '1') {
            orderResult.status = 'approved';
          }

          try {
            const {body} = await got.post<ServiceCResponse>('http://srvc:3002', {
              json: { coupon: coupon },
              responseType: 'json',
              retry: {
                limit: 5,
                methods: ['POST']
              }
            });

            const isInvalidCoupon = (body.status !== 'valid' && body.status !== 'valid vip');
            if (isInvalidCoupon) {
              orderResult.status = body.status;
            }

            channel.ack(msg);
            
          } catch (requestSrvCError) {
            channel.reject(msg, false);
          }
        }
      });
    });
  });
}

runRabbitmq();