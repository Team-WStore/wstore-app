const CheckoutForm = () => {
    return (
        <div class="ps-checkout ps-section--shopping">

            <div class="container">

                <div class="ps-section__header">

                    <h1>Checkout</h1>

                </div>

                <div class="ps-section__content">

                    <form class="ps-form--checkout" action="do_action" method="post">

                        <div class="row">

                            <div class="col-xl-7 col-lg-8 col-sm-12">

                                <div class="ps-form__billing-info">

                                    <h3 class="ps-form__heading">Detalles de Facturación</h3>

                                    <div class="form-group">

                                        <label>First Name<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <label>Last Name<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <label>Email Address<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="email"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <label>Country<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <label>Phone<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <label>Address<sup>*</sup></label>

                                        <div class="form-group__content">

                                            <input class="form-control" type="text"/>

                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <div class="ps-checkbox">

                                            <input class="form-control" type="checkbox" id="create-account"/>

                                            <label for="create-account">Guardar dirección?</label>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="col-xl-5 col-lg-4 col-sm-12">

                                <div class="ps-form__total">

                                    <h3 class="ps-form__heading">Su Orden</h3>

                                    <div class="content">

                                        <div class="ps-block--checkout-total">

                                            <div class="ps-block__header d-flex justify-content-between">

                                                <p>Producto</p>

                                                <p>Total</p>

                                            </div>

                                            <div class="ps-block__content">

                                                <table class="table ps-block__products">

                                                    <tbody>

                                                        <tr>

                                                            <td>
                                                                <a href="#"> MVMTH Classical Leather Watch In Black ×1</a>
                                                                <p>Sold By:<strong>YOUNG SHOP</strong></p>
                                                            </td>

                                                            <td class="text-right">$57.99</td>

                                                        </tr>

                                                        <tr>

                                                            <td>
                                                                <a href="#"> Apple Macbook Retina Display 12” × 1</a>
                                                                <p>Sold By:<strong>ROBERT’S STORE</strong></p>
                                                            </td>

                                                            <td class="text-right">$625.50</td>

                                                        </tr>

                                                    </tbody>

                                                </table>
                                                
                                                <h3 class="text-right">Total <span>$683.49</span></h3>

                                            </div>

                                        </div>

                                        <hr class="py-3"/>

                                        <div class="form-group">

                                            <div class="ps-radio">

                                                <input class="form-control" type="radio" id="pay-paypal" name="payment-method" value="paypal" checked/>

                                                <label for="pay-paypal">Pay with paypal?  <span><img src="img/payment-method/paypal.jpg" class="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <div class="form-group">

                                            <div class="ps-radio">

                                                <input class="form-control" type="radio" id="pay-payu" name="payment-method" value="payu"/>

                                                <label for="pay-payu">Pay with payu? <span><img src="img/payment-method/payu.jpg" class="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <div class="form-group">

                                            <div class="ps-radio">

                                                <input class="form-control" type="radio" id="pay-mercadopago" name="payment-method" value="mercado-pago"/>

                                                <label for="pay-mercadopago">Pay with Mercado Pago? <span><img src="img/payment-method/mercado_pago.jpg" class="w-50"/></span></label>

                                            </div>

                                        </div>

                                        <a class="ps-btn ps-btn--fullwidth" href="checkout.html">Proceed to checkout</a>

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