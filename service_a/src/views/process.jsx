var React = require('react');

function Process(props) {
  return (
    <html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <title>Checkout example · Bootstrap</title>
        <link href="https://getbootstrap.com/docs/4.5/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        <link href="https://getbootstrap.com/docs/4.5/examples/checkout/form-validation.css" rel="stylesheet" />
    </head>
    <body className="bg-light">
    <div className="container">
        <div className="py-5 text-center">
            <h2>Checkout</h2>
        </div>

        <h4>Seu pedido foi recebido com sucesso! Aguarde um email de confirmação.</h4>

        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; AvançaDev - 2020</p>
        </footer>

    </div>
    </body>
    </html>
  );
}

module.exports = Process;