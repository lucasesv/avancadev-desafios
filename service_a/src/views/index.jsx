var React = require('react');

function Checkout(props) {
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
          
          {(!props.orderResult) ? (
            <form action="/process" method="post">
              <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Carrinho</span>
                    <span className="badge badge-secondary badge-pill">1</span>
                  </h4>
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">Tênis Adidas</h6>
                      </div>
                      <span className="text-muted">R$ 100,00</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total</span>
                      <strong>R$ 100,00</strong>
                    </li>
                  </ul>

                  <div className="input-group">
                    <input type="text" className="form-control" name="coupon" placeholder="Cupom" />
                  </div>
                </div>
                <div className="col-md-8 order-md-1">
                  <h4 className="mb-3">Dados pessoais</h4>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName">Nome</label>
                      <input type="text" className="form-control" id="name" name="name" placeholder="" value="" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Email</label>
                      <input type="text" className="form-control" id="email" name="email" placeholder="" value="" />
                    </div>
                  </div>

                  <hr className="mb-4" />

                  <h4 className="mb-3">Pagamento</h4>


                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-name">Nome no cartão</label>
                      <input type="text" className="form-control" id="cc-name" name="creditCardName" placeholder="" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-number">Número</label>
                      <input type="text" className="form-control" id="cc-number" name="creditCardNumber" placeholder="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-expiration">Expiração</label>
                      <input type="text" className="form-control" id="cc-expiration" name="creditCardExpiration" placeholder="" />

                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-cvv">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" name="creditCardCvv" placeholder="" />
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Comprar</button>
                </div>
              </div>
            </form>
          ) : (
          <h4>Resultado da operação: {props.orderResult.status}</h4>
          )}

          <footer className="my-5 pt-5 text-muted text-center text-small">
              <p className="mb-1">&copy; AvançaDev - 2020</p>
          </footer>

        </div>
      </body>
    </html>

  );
}

module.exports = Checkout;