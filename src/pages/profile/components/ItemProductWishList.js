import React from 'react';
import Swal from 'sweetalert2';

const ItemProductWishList = ({product}) => {
    const deleteProduct = async ()=>{
        const result = await Swal.fire({
            title: "¿Deseas eliminarlo de tu lista de deseos?",
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
                            <img src={product.url} alt="Product" />
                        </a>
                    </div>
                    <div className="ps-product__content">
                        <a href="#/">{product.name}</a>
                    </div>
                </div>
            </td>

            <td className="price">$ {product.price}</td>

            <td>
                {
                    product.stock
                    ?
                    <span className="ps-tag ps-tag--in-stock">En-stock</span>
                    :
                    <span className="ps-tag ps-tag--out-stock">Sin-stock</span>
                }
            </td>

            <td>
                {product.stock && <a className="ps-btn" href="#/">Añadir al carrito</a>}
            </td>

            <td>
                <a href="#/" onClick={deleteProduct}>
                    <i className="icon-cross"></i>
                </a>
            </td>

        </tr>
    );
}

export default ItemProductWishList;