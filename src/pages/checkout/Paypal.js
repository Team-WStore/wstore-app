// Predefined packages
import { useEffect, useContext } from 'react';

import { AlertContext } from '../../context/alerts/AlertContext';

export const Paypal = ({ total, setSuccessPay, setOrderId }) => {

    const { showAlert } = useContext(AlertContext);

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Pago de tu factura por los productos",
                            amount: {
                                currency_code: "USD",
                                value: total.toFixed(2),
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setSuccessPay(c => !c);
                setOrderId(data.orderID);
            },
            onError: (err) => {
                showAlert('Error al realizar el pago', 'alert-danger');
            },
        }).render('#paypal-buttons');
    }, []);

    return (
        <div className="row m-3 animate__animated animate__bounceInLeft">
            <div className="col-12 mx-auto">
                <h4 className="perform-pay">Solo te queda realizar el pago...</h4>
            </div>
            <div id='paypal-buttons' className="m-1 col-5 mx-auto"></div>
        </div>
    );
}
