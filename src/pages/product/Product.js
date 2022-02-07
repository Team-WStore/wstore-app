import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../../context/product/ProductContext";
import { useCounterInDetail } from "../../hooks/useCounterInDetail";
import './product.css';

const Product = () => {

    const { loadProduct, product, addToCart, addWishlist } = useContext(ProductContext);
    const [counter, increment, decrement] = useCounterInDetail(1, product?.available);

    const [favorite, setFavorite] = useState(false);
    const changeFavorite = async (id) => {
        await addWishlist(id);
        setFavorite(f => !f);
    }

    const [numItem, setNumItem] = useState(0);
    
    const { slug } = useParams();
    useEffect(() => {
        loadProduct(slug);
    }, [slug]);
    

    return (
        <div className="ps-page--product">

            <div className="ps-container">


                <div className="ps-page__container">

                    <div className="ps-page__left">

                        <div className="ps-product--detail ps-product--fullwidth">

                            <div className="ps-product__header">


                                <div className="ps-product__thumbnail" data-vertical="true">

                                    <figure>

                                        <div className="ps-wrapper">

                                            <div className="ps-product__gallery" data-arrow="true">

                                                {
                                                    product?.images?.map((item, i) =>
                                                        <div className="item" key={i} className={`item ${numItem === i? 'activeI':'inactiveI'}`}>
                                                            <a href="#/">
                                                                <img src={item.image} alt="" />
                                                            </a>
                                                        </div>
                                                    )
                                                }

                                            </div>

                                        </div>

                                    </figure>

                                    <div className="ps-product__variants" data-item="4" data-md="4" data-sm="4" data-arrow="false">

                                        {
                                            product?.images?.map((item, i) =>
                                                <div className="item" key={i}  onClick={()=>setNumItem(i)}>
                                                    <img src={item.image} alt="" />
                                                </div>
                                            )
                                        }

                                    </div>

                                </div>


                                <div className="ps-product__info">

                                    <h1>{product?.name}</h1>

                                    <div className="ps-product__meta">

                                        <p>Marca:<a href="#/"> {product?.brand?.name}</a></p>

                                    </div>

                                    <h4 className="ps-product__price sale">
                                        $ {product?.discount_price}
                                        <del className="ml-2 mb-3"> $ {product?.price}</del><small className="ml-2"> (-{product?.discount}%)</small>
                                    </h4>

                                    <div className="ps-product__desc">

                                        <p>

                                            Vendido por:<a className="mr-20" href="#/"><strong> {product?.brand?.name}</strong></a>

                                            Status: {
                                                product.available > 0
                                                    ?
                                                    <strong className="ps-tag--in-stock">En-stock</strong>
                                                    :
                                                    <strong className="ps-tag--out-stock">Sin-stock</strong>
                                            }

                                        </p>

                                        <ul className="ps-list--dot">
                                            {
                                                product?.description?.split('/').map((item, i) => <li key={i}> {item}</li>)
                                            }
                                        </ul>

                                    </div>

                                    <div className="ps-product__shopping">

                                        <figure>

                                            <figcaption>Cantidad</figcaption>

                                            <div className="form-group--number">

                                                <button className="up" onClick={increment}>
                                                    <i className="fa fa-plus"></i>
                                                </button>

                                                <button className="down" onClick={decrement}>
                                                    <i className="fa fa-minus"></i>
                                                </button>

                                                <input className="form-control" type="text" value={counter} readOnly/>

                                            </div>

                                        </figure>

                                        <a className="ps-btn ps-btn--black" href="#/" onClick={async () => await addToCart(product?.id, counter)}>Añadir al carrito</a>

                                        <a className="ps-btn" href="#/">Comprar ahora</a>

                                        <div className="ps-product__actions">

                                            <a href="#">
                                                {
                                                    favorite
                                                        ?
                                                        <i onClick={async () => await changeFavorite(product?.id)} className="animate__animated animate__rubberBand fas fa-heart icon mt-2 ml-2"></i>
                                                        :
                                                        <i onClick={async () => await changeFavorite(product?.id)} className="animate__animated animate__rubberBand far fa-heart icon mt-2 ml-2"></i>
                                                }
                                            </a>

                                        </div>

                                    </div>

                                    <div className="ps-product__specification">

                                        <a className="report" href="#">Reportar abuso</a>

                                        <p className="categories">

                                            <strong> Categoría:</strong>

                                            <a href="#/">{product?.category?.name}</a>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Product;