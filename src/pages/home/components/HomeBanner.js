import { memo, useContext } from 'react';

import { ProductContext } from '../../../context/product/ProductContext';
import BannerItem from './BannerItem';

const HomeBanner = memo(() => {
    const { slider } = useContext(ProductContext);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {
                    slider.map((item, i) => {
                        return <BannerItem
                            className={i === 0 ? 'active' : ''}
                            key={item.id}
                            {...item}
                        />
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
});

export default HomeBanner;