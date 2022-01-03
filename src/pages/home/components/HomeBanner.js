import React from 'react';
import BannerItem from './BannerItem';

const HomeBanner = () => {
    return (  
        <>
            <div className="ps-home-banner">
                <div className="ps-carousel--nav-inside owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="1000" data-owl-mousedrag="on" data-owl-animate-in="fadeIn" data-owl-animate-out="fadeOut">
                    <BannerItem titulo="Home Element" descripcion="PRUEBA TESTING 2"/>
                    <BannerItem titulo="Testing XD"/>
                    <BannerItem titulo="Prueba"/>
                </div>
            </div>
        </>
    );
}

export default HomeBanner;