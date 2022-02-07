import { memo, useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context/product/ProductContext";

const ItemMiniCart = memo(({ item }) => {
    const product = item.product;
    const { deleteFromCart } = useContext(ProductContext);

    return (
        <div className="animate__animated animate__fadeInLeft ps-product--cart-mobile">

            <div className="ps-product__thumbnail">
                <Link to={'/product/' + product.slug}>
                    <img src={product.images[0].image} alt={product.name} />
                </Link>
            </div>

            <div className="ps-product__content">

                <a className="ps-product__remove" href="#/" onClick={async () => await deleteFromCart(item.id)}>
                    <i className="icon-cross"></i>
                </a>

                <Link to={'/product/' + product.slug}>{product.name}</Link>
                <p><strong>Vendido por:</strong>{product.brand.name}</p>
                <small>{item.quantity} x $ {product.price}</small>

            </div>

        </div>
    );
});

export default ItemMiniCart;