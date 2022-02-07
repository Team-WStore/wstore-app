import React, { memo, useContext } from 'react';
import { ProductContext } from '../../../context/product/ProductContext';

import { useCounter } from '../../../hooks/useCounter';

const ItemProductCart = memo(({ item }) => {
    const { deleteFromCart, updateCart } = useContext(ProductContext);

    const [counter, increment, decrement] = useCounter(item.quantity, item.product.available, updateCart, item.id);

    return (
        <tr className='animate__animated animate__fadeInLeft'>
            <td>
                <div className="ps-product--cart">

                    <div className="ps-product__thumbnail">

                        <a href="#/">
                            <img src={item.product.images[0].image} alt="Producto" />
                        </a>

                    </div>

                    <div className="ps-product__content">

                        <a href="#/">{item.product.name}</a>

                    </div>

                </div>

            </td>

            <td className="price">$ {item.product.price}</td>

            <td className="text-center">$ {item.shipping}</td>

            <td>

                <div className="form-group--number">
                    <button onClick={increment} className="up">+</button>
                    <button onClick={decrement} className="down">-</button>
                    <input className="form-control" type="text" placeholder="1" value={counter} readOnly />
                </div>

            </td>

            <td className='subtotal'>$ {(item.product.price * counter + item.shipping).toFixed(2)}</td>

            <td>
                <a href="#/" onClick={async () => await deleteFromCart(item.id)}>
                    <i className="icon-cross"></i>
                </a>
            </td>

        </tr>
    );
});

export default ItemProductCart;