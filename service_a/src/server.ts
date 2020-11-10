import express, { Request, Response } from 'express';
import cors from 'cors';
import amqp from 'amqplib/callback_api';


const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface Order {
  name: string;
  email: string;
  creditCard: {
    name: string;
    number: string;
    expiration: string;
    cvv: string;
  };
  coupon: string;
}

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.post('/process', async (req: Request, res: Response) => {

  const order: Order = {
    name: req.body.name,
    email: req.body.email,
    creditCard: {
      name: req.body.creditCardName,
      number: req.body.creditCardNumber,
      expiration: req.body.creditCardExpiration,
      cvv: req.body.creditCardCvv
    },
    coupon: req.body.coupon
  };
  
  amqp.connect('amqp://rabbitmq:rabbitmq@rabbit', function(connectionError, connection) {
    if (connectionError) {
      throw connectionError;
    }

    connection.createChannel(function(channelError, channel) {
      if (channelError) {
        throw channelError;
      }
      
      const exchange = 'orders_ex';
      
      const rabbitRequestData = {
        coupon: order.coupon,
        creditCardNumber: order.creditCard.number
      };
      
      channel.publish(exchange, '', Buffer.from(JSON.stringify(rabbitRequestData)));
    });
      
    setTimeout(function() {
      connection.close();
    }, 500);
  });

  res.render('process');
});

app.listen(3000);