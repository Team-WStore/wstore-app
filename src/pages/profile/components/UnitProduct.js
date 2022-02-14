import { Link } from "react-router-dom";

const UnitProduct = ({ item }) => {

    return (

        <div className="ps-product--cart">

            <div className="ps-product__thumbnail">

                <a href="#/">
                    <img src={item?.product?.images[0].image} alt={item?.product?.name} />
                </a>

            </div>

            <div className="ps-product__content">

                <Link to={`/product/`+item?.product?.slug}>{item?.product?.name}</Link>

            </div>

        </div>
    )
}

export default UnitProduct;