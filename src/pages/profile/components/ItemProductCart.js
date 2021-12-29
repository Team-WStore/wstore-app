import React from 'react';
import Swal from 'sweetalert2';

import { useCounter } from '../../../hooks/useCounter';

const ItemProductCart = ({product}) => {
    const [counter, increment, decrement] = useCounter(product.quantity, product.available);

    const deleteProduct = async ()=>{
        const result = await Swal.fire({
            title: "¿Deseas eliminarlo del carrito de compras?",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Sí",
        });

        if (result.isConfirmed) {
            /* const data = await eliminar(id);
            if (data._id) {
                set(c => [...c].filter(c => c._id != id));
                Swal.fire(
                    'Eliminado Correctamente',
                    '¡Todo salió bien!',
                    'success'
                );
            } */

            Swal.fire(
                'Eliminado Correctamente',
                '¡Todo salió bien!',
                'success'
            );
        }
    }

    return (
        <tr>
            <td>
                <div className="ps-product--cart">

                    <div className="ps-product__thumbnail">

                        <a href="#/">
                            <img src="img/products/clothing/2.jpg" alt="Producto" />
                        </a>

                    </div>

                    <div className="ps-product__content">

                        <a href="#/">{product.name}</a>

                    </div>

                </div>

            </td>

            <td className="price">$ {product.price}</td>

            <td className="text-center">$ {product.shipping}</td>

            <td>

                <div className="form-group--number">
                    <button onClick={increment} className="up">+</button>
                    <button onClick={decrement} className="down">-</button>
                    <input className="form-control" type="text" placeholder="1" value={counter} readOnly />
                </div>

            </td>

            <td>$ {product.price * counter + product.shipping}</td>

            <td>
                <a href="#/" onClick={deleteProduct}>
                    <i className="icon-cross"></i>
                </a>
            </td>

        </tr>
    );
}

export default ItemProductCart;