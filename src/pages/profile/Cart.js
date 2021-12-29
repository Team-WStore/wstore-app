import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ItemProductCart from './components/ItemProductCart';

const ItemMenuCart = () => {
    return (
        <>
            <Header />
            <div className="ps-section--shopping ps-shopping-cart">

                <div className="container">

                    <div className="ps-section__header">

                        <h1>Carrito de compras</h1>

                    </div>

                    <div className="ps-section__content">

                        <div className="table-responsive">

                            <table className="table ps-table--shopping-cart">

                                <thead>

                                    <tr>

                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Envío</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                        <th></th>

                                    </tr>

                                </thead>

                                <tbody>
                                    <ItemProductCart
                                        product={{
                                            name: 'Unero Military classNameical Backpack',
                                            price: 207.7,
                                            shipping: 2,
                                            quantity: 2,
                                            available: 9,
                                        }}
                                    />

                                    <ItemProductCart
                                        product={{
                                            name: 'Bolso militar',
                                            price: 55.2,
                                            shipping: 2,
                                            quantity: 1,
                                            available: 3,
                                        }}
                                    />
                                </tbody>

                            </table>

                        </div>

                        <hr />

                        <div className="d-flex flex-row-reverse">
                            <div className="p-2"><h3>Total <span>$414.00</span></h3></div>
                        </div>

                        <div className="ps-section__cart-actions">

                            <a className="ps-btn" href="categories.html.html">
                                <i className="icon-arrow-left"></i> Atrás
                            </a>

                            <a className="ps-btn" href="checkout.html">
                                Comprar <i className="icon-arrow-right"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ItemMenuCart;