import React from 'react';

import Feautures from './components/Features';
import HomeBanner from './components/HomeBanner';
import TopList from './components/TopList';
import Newsletter from './components/Newsletter';

const Home = () => {
    return (
        <div className="homepage-6">
            <HomeBanner />
            <br/>
            <Feautures />
            <TopList titulo="Top productos" />
            <TopList titulo="Top categorias" />
            <TopList titulo="Otros productos" />
            <Newsletter/>
        </div>
    );
}

export default Home;