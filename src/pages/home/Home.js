import Header from '../../components/Header';
import BlockProducts from './components/BlockProducts';
import Feautures from './components/Features';
import HomeBanner from './components/HomeBanner';
import TopList from './components/TopList';
import Newsletter from './components/Newsletter';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div className="homepage-6">
            <Header />
            <HomeBanner />
            <TopList />
            <Feautures />
            <TopList />
            <BlockProducts />
            <TopList />
            <Newsletter/>
            <Footer />
        </div>
    );
}

export default Home;