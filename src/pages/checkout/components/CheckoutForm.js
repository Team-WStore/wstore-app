const CheckoutForm = () => {
    
    return (
        <div className="ps-checkout ps-section--shopping">

            <div className="container">

                <div className="ps-section__header">

                    <h1>Checkout</h1>

                </div>

                <div className="ps-section__content">

                    <form className="ps-form--checkout" action="do_action" method="post">

                        <div className="row">

                            <div className="col-xl-7 col-lg-8 col-sm-12">

                                <div className="ps-form__billing-info">

                                    <h3 className="ps-form__heading">Detalles de Facturación</h3>

                                    <div className="form-group">

                                        <label>First Name<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Last Name<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Email Address<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="email"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Country<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Phone<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Address<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input className="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <div className="ps-checkbox">

                                            <input className="form-control" type="checkbox" id="create-account"/>

                                            <label for="create-account">Guardar dirección?</label>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-xl-5 col-lg-4 col-sm-12">

                                <div className="ps-form__total">

                                    <h3 className="ps-form__heading">Su Orden</h3>

                                    <div className="content">

                                        <div className="ps-block--checkout-total">

                                            <div className="ps-block__header d-flex justify-content-between">

                                                <p>Producto</p>

                                                <p>Total</p>

                                            </div>

                                            <div className="ps-block__content">

                                                <table className="table ps-block__products">

                                                    <tbody>

                                                        <tr>

                                                            <td>
                                                                <a href="#"> MVMTH Classical Leather Watch In Black ×1</a>
                                                                <p>Sold By:<strong>YOUNG SHOP</strong></p>
                                                            </td>

                                                            <td className="text-right">$57.99</td>

                                                        </tr>

                                                        <tr>

                                                            <td>
                                                                <a href="#"> Apple Macbook Retina Display 12” × 1</a>
                                                                <p>Sold By:<strong>ROBERT’S STORE</strong></p>
                                                            </td>

                                                            <td className="text-right">$625.50</td>

                                                        </tr>

                                                    </tbody>

                                                </table>
                                                
                                                <h3 className="text-right">Total <span>$683.49</span></h3>

                                            </div>

                                        </div>

                                        <hr className="py-3"/>

                                        <div className="form-group">

                                            <div className="ps-radio">

                                                <input className="form-control" type="radio" id="pay-paypal" name="payment-method" value="paypal" checked/>

                                                <label for="pay-paypal">Pay with paypal?  <span><img src="img/payment-method/paypal.jpg" className="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <div className="form-group">

                                            <div className="ps-radio">

                                                <input className="form-control" type="radio" id="pay-payu" name="payment-method" value="payu"/>

                                                <label for="pay-payu">Pay with payu? <span><img src="img/payment-method/payu.jpg" className="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <div className="form-group">

                                            <div className="ps-radio">

                                                <input className="form-control" type="radio" id="pay-mercadopago" name="payment-method" value="mercado-pago"/>

                                                <label for="pay-mercadopago">Pay with Mercado Pago? <span><img src="img/payment-method/mercado_pago.jpg" className="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <a className="ps-btn ps-btn--fullwidth" href="checkout.html">Proceed to checkout</a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default CheckoutForm;