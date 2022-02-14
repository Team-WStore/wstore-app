import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/product/ProductContext';

import ItemProductCart from './components/ItemProductCart';

const ItemMenuCart = () => {
    const { loadCart, shoppingCart, total } = useContext(ProductContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        loadCart();
    }, []);

    return (
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
                                {
                                    shoppingCart.length > 0
                                        ?
                                        shoppingCart.map(item => <ItemProductCart
                                            key={item.id}
                                            item={{ shipping: 1, ...item }}
                                        />)
                                        :
                                        <tr>
                                            <td colSpan={3}>
                                                <div className="spinner-border text-danger mx-auto" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </td>
                                        </tr>
                                }
                            </tbody>

                        </table>

                    </div>

                    <hr />

                    <div className="d-flex flex-row-reverse">
                        <div className="p-2"><h3>Total <span>$ {total.toFixed(2)}</span></h3></div>
                    </div>

                    <div className="ps-section__cart-actions">

                        <a onClick={()=>navigate(-1)} className="ps-btn" href="#/">
                            <i className="icon-arrow-left"></i> Atrás
                        </a>

                        {
                            shoppingCart.length > 0
                            &&
                            <Link className="ps-btn" to="/user/checkout">
                            Comprar <i className="icon-arrow-right"></i>
                            </Link>
                        }

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ItemMenuCart;