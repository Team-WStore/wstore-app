import React from 'react';

const BannerItem = (props) => {

    const { titulo, descripcion = "LOREM IPSUM" } = props;

    return (
        <>
            <div className="ps-banner--market-4" data-background="img/slider/horizontal/1.jpg">
                <img src="img/slider/horizontal/1.jpg" alt="bg"/>
                <div className="ps-banner__content">
                    <h4>{titulo}</h4>
                    <h3>{descripcion}</h3>
                    <a className="ps-btn" href="#/">Comprar Ahora</a>
                </div>
            </div>
        </>
    );
}

export default BannerItem;