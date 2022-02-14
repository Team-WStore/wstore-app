import { Link } from "react-router-dom";

const ItemProductCheckout = ({ item }) => {
    return (
        <tr>

            <td>
                <Link to={'/product/' + item.product.slug}>{item.product.name}</Link>
                <p>Vendido por:<strong> {item.product.brand.name} </strong></p>
            </td>

            <td className="text-right">$ {(item.quantity * item.product.discount_price + 1).toFixed(2)} con envío</td>

        </tr>
    );
};

export default ItemProductCheckout;