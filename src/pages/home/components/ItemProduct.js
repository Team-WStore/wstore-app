import { memo, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductContext } from '../../../context/product/ProductContext';

const ItemProduct = memo(({ item }) => {

    const { addToCart, addWishlist } = useContext(ProductContext);
    const [favorite, setFavorite] = useState(false);
    const navigate = useNavigate();

    const changeFavorite = async () => {
        await addWishlist(item.id);
        setFavorite(f => !f);
    }

    return (
        <div className="animate__animated animate__fadeIn col-sm-2">
            <div className="card">
                <div className='img'>
                    <img src={item.images[0].image} className="card-img-top" alt={item.name} />
                </div>

                <div className="card-body">
                    <div className='row'>
                        <div className='col-3'>
                            <div className='rounded-pill p-1 h-gray'>
                                {
                                    favorite
                                        ?
                                        <i onClick={changeFavorite} className="animate__animated animate__rubberBand fas fa-heart icon mt-2 ml-2"></i>
                                        :
                                        <i onClick={changeFavorite} className="animate__animated animate__rubberBand far fa-heart icon mt-2 ml-2"></i>
                                }
                            </div>
                        </div>

                        <div className='col-9'>
                            <div className='row'>
                                <div className='col'>
                                    <hr />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col name' onClick={() =>navigate('/product/'+item.slug)}>{item.name}</div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-8'>
                            <div className='row'>
                                <div className='col original-price'>
                                    $ {item.discount_price}
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col discount-price'>$ {item.price}</div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='rounded-pill p-1 h-gray' onClick={() => addToCart(item.id)}>
                                <i className="fas fa-shopping-bag icon mt-2 ml-2"></i>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
});

export default ItemProduct;