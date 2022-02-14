import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context/product/ProductContext";
import ItemMiniCart from "./ItemMiniCart";

const MiniCart = () => {
  const { shoppingCart, total } = useContext(ProductContext);

  return (
    <div className="ps-cart__content">

      <div className="ps-cart__items">
        {
          shoppingCart.length > 0
            ?
            shoppingCart.map(item => <ItemMiniCart key={item.id} item={item} />)
            :
            <div className="spinner-border text-danger mx-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        }


      </div>

      <div className="ps-cart__footer">

        <h3>Total con envío:<strong>$ {total.toFixed(2)}</strong></h3>

        <figure>
          <Link className="ps-btn" to="/user/cart">Ver carrito</Link>
          {
            shoppingCart.length > 0
            &&
            <Link className="ps-btn" to="/user/checkout">
              Comprar
            </Link>
          }
        </figure>

      </div>

    </div>
  );
};

export default MiniCart;