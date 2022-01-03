import React from 'react';
import TopItem from './TopItem';

const TopList = (props) => {

    const { titulo } = props;

    return (
        <div className="ps-top-categories">
            <br />
            <div className="container">

                <h3>{titulo}</h3>

                <div className="row">

                    <TopItem titulo="Electrodomesticos" img="img/categories/1.jpg"/>
                    <TopItem titulo="Ropa" img="img/categories/2.jpg"/>
                    <TopItem titulo="Computadores" img="img/categories/3.jpg"/>
                    <TopItem titulo="Hogar y Cocina" img="img/categories/4.jpg"/>
                    <TopItem titulo="Salud y Belleza" img="img/categories/5.jpg"/>
                    <TopItem titulo="Salud y Belleza" img="img/categories/6.jpg"/>

                </div>
            </div>

        </div>
    );
}

export default TopList;