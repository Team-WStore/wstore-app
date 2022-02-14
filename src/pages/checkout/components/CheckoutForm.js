import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "../../../context/alerts/AlertContext";

import { ProductContext } from "../../../context/product/ProductContext";
import { useForm } from "../../../hooks/useForm";
import { Paypal } from "../Paypal";
import ItemProductCheckout from "./ItemProductCheckout";

const CheckoutForm = () => {
    const { total, shoppingCart, makePayment } = useContext(ProductContext);
    const [products, setProducts] = useState([]);
    const { showAlert } = useContext(AlertContext);
    const [successPay, setSuccessPay] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [correct, setCorrect] = useState(false);

    const [{ city, address, zip }, handleInpuntChange] = useForm({
        city: '',
        address: '',
        zip: '',
    });

    useEffect(() => {
      if(shoppingCart.length > 0) setProducts(shoppingCart);
    }, [shoppingCart]);
    

    useEffect(()=>{
        setCorrect(city !== '' && address !== '' && zip !== '');
    }, [city, address, zip]);

    useEffect(() => {
        setCorrect(city !== '' && address !== '' && zip !== '');
        if (successPay) {
            if(correct) makePayment({ city, address, zip, charge_id: orderId, total });
            else {
                showAlert("Aún te falta llenar el formulario", 'alert-danger');
            }
        } 
    }, [orderId]);


    return (
        <div className="ps-checkout ps-section--shopping">

            <div className="container">

                <div className="ps-section__header">

                    <h1>Detalles de pago</h1>

                </div>

                <div className="ps-section__content">

                    <form className="ps-form--checkout">

                        <div className="row">

                            <div className="col-xl-7 col-lg-8 col-sm-12">

                                <div className="ps-form__billing-info">

                                    <h3 className="ps-form__heading">Detalles de facturación para el envío</h3>


                                    <div className="form-group">

                                        <label>Ciudad<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input
                                                className="form-control"
                                                type="text"
                                                name="city"
                                                value={city}
                                                onChange={handleInpuntChange}
                                            />

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Dirección<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input
                                                className="form-control"
                                                type="text"
                                                name="address"
                                                value={address}
                                                onChange={handleInpuntChange}
                                            />

                                        </div>

                                    </div>

                                    <div className="form-group">

                                        <label>Código zip<sup>*</sup></label>

                                        <div className="form-group__content">

                                            <input
                                                className="form-control"
                                                type="text"
                                                name="zip"
                                                value={zip}
                                                onChange={handleInpuntChange}
                                            />

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

                                                        {
                                                            products.length > 0
                                                                ?
                                                                products?.map(i => <ItemProductCheckout
                                                                    key={i.id}
                                                                    item={i}
                                                                />)
                                                                :
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <div className="spinner-border text-danger mx-auto" role="status">
                                                                            <span className="sr-only">Loading...</span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        }

                                                    </tbody>

                                                </table>

                                                <h3 className="text-right">Total <span>$ {total.toFixed(2)}</span></h3>

                                            </div>

                                        </div>

                                        <hr className="py-3" />

                                        {
                                            (total > 0 & correct)
                                            &&
                                            <Paypal
                                                total={total}
                                                setOrderId={setOrderId}
                                                setSuccessPay={setSuccessPay}
                                            />
                                        }

                                        {successPay && <Link className="ps-btn ps-btn--fullwidth" replace={true} to="/">Ir a la tienda</Link>}

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