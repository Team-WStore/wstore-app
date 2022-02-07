import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../../context/product/ProductContext';

const ItemProductWishList = ({item}) => {
    const {deleteWishlist, addToCart} = useContext(ProductContext);

    const product = item.product;

    return (
        <tr className='animate__animated animate__fadeInLeft'>

            <td>
                <div className="ps-product--cart">
                    <div className="ps-product__thumbnail">
                        <Link to={'/product/' + product.slug}>
                            <img src={product.images[0].image} alt="Product" />
                        </Link>
                    </div>
                    <div className="ps-product__content">
                        <Link to={'/product/' + product.slug}>{product.name}</Link>
                    </div>
                </div>
            </td>

            <td className="price">$ {product.price}</td>

            <td>
                {
                    product.available > 0
                    ?
                    <span className="ps-tag ps-tag--in-stock">En-stock</span>
                    :
                    <span className="ps-tag ps-tag--out-stock">Sin-stock</span>
                }
            </td>

            <td>
                {product.available > 0 && <button onClick={async()=>{
                    await addToCart(product.id);
                    await deleteWishlist(item.id);
                }} className="ps-btn">Añadir al carrito</button>}
            </td>

            <td>
                <a href="#/" onClick={async ()=>await deleteWishlist(item.id)}>
                    <i className="icon-cross"></i>
                </a>
            </td>

        </tr>
    );
}

export default ItemProductWishList;