import { useContext } from 'react';

import Feautures from './components/Features';
import HomeBanner from './components/HomeBanner';
import Newsletter from './components/Newsletter';
import { ProductContext } from '../../context/product/ProductContext';
import { Products } from './components/Products';
import TopList from './components/TopList';

const Home = () => {
    const { otherProducts, topCategories } = useContext(ProductContext);

    return (
        <div className="homepage-6">
            <HomeBanner />
            <br />
            <Feautures />
            <TopList title="Top categorias" list={topCategories} />
            <Products name="Otros productos" list={otherProducts} />
            <Newsletter />
        </div>
    );
}

export default Home;