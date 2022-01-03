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
            <br/>
            <Feautures />
            <TopList titulo="Top productos" />
            <TopList titulo="Top categorias" />
            <TopList titulo="Otros productos" />
            <Newsletter/>
            <Footer />
        </div>
    );
}

export default Home;