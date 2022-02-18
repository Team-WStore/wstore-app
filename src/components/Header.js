import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/auth/AuthContext';
import { ProductContext } from '../context/product/ProductContext';
import MiniCart from './MiniCart';
import MiniCartMobile from './MiniCartMobile';
import SearchBar from './SearchBar';
import SearchBarMobile from './SearchBarMobile';

const Header = () => {
    const { logged, logout } = useContext(AuthContext);
    const { shoppingCart, wishlist } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <>
            <header className="header header--standard header--market-place-4" data-sticky="true">

                <div className="header__content">

                    <div className="container">

                        <div className="header__content-left">

                            <Link className="ps-logo" to="/" style={{ color: '#fff', fontSize: '30px' }}>
                                WStore
                            </Link>

                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    {/* <i className="icon-menu"></i> */}
                                    <span onClick={() => navigate('/')}>
                                        <img src="/img/logo5x5.png" height="70px" alt="Logo WStore" />
                                    </span>
                                </div>

                                {/* <div className="menu__content">
                                    <ul className="menu--dropdown">
                                        <li>
                                            <a href="#/"><i className="icon-star"></i> Hot Promotions</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-shirt"></i> Clothing &amp; Apparel</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-lampshade"></i> Home, Garden &amp; Kitchen</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-heart-pulse"></i> Health &amp; Beauty</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-diamond2"></i> Yewelry &amp; Watches</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-baby-bottle"></i> Babies &amp; Moms</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-baseball"></i> Sport &amp; Outdoor</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-smartphone"></i> Phones &amp; Accessories</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-book2"></i> Books &amp; Office</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-car-siren"></i> Cars &amp; Motocycles</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-wrench"></i> Home Improments</a>
                                        </li>
                                        <li>
                                            <a href="#/"><i className="icon-tag"></i> Vouchers &amp; Services</a>
                                        </li>
                                    </ul>

                                </div>
 */}
                            </div>

                        </div>

                        <SearchBar/>

                        <div className="header__content-right">

                            <div className="header__actions">

                                <Link to="/user/profile" className="header__extra">
                                    <i className="icon-heart"></i><span><i>{wishlist.length}</i></span>
                                </Link>

                                <div className="ps-cart--mini">

                                    <a href="#/" className="header__extra">
                                        <i className="icon-bag2"></i><span><i>{shoppingCart.length}</i></span>
                                    </a>
                                    {
                                        shoppingCart.length > 0
                                        &&
                                        <MiniCart />
                                    }
                                </div>

                                <div className="ps-block--user-header">

                                    <Link to="/user/profile">
                                        <div className="ps-block__left">
                                            <i className="icon-user"></i>
                                        </div>
                                    </Link>


                                    {
                                        !logged
                                            ?
                                            <div className="ps-block__right">
                                                <Link to="/login">Ingresar</Link>
                                            </div>
                                            :
                                            <div className="ps-block__right">
                                                <i className="fas fa-sign-out-alt" onClick={logout} style={{ fontSize: '27px' }}></i>
                                            </div>
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>

            <header className="header header--mobile" data-sticky="true">

                <div className="navigation--mobile">

                    <div className="navigation__left">

                        {/* <div className="menu--product-categories">

                            <div className="ps-shop__filter-mb mt-4" id="filter-sidebar">
                                <i className="icon-menu "></i>
                            </div>

                            <div className="ps-filter--sidebar">

                                <div className="ps-filter__header">
                                    <h3>Categorias</h3>
                                    <a className="ps-btn--close ps-btn--no-boder" href="#/"></a>
                                </div>

                                <div className="ps-filter__content">

                                    <aside className="widget widget_shop">

                                        <ul className="ps-list--categories">
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Clothing &amp; Apparel</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{ display: "none" }}>
                                                    <li className="current-menu-item "><a href="#/">Womens</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Mens</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Bags</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Sunglasses</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Accessories</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Kid's Fashion</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Garden &amp; Kitchen</a><span className="sub-toggle active"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{ display: "block" }}>
                                                    <li className="current-menu-item "><a href="#/">Cookware</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Decoration</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Furniture</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Garden Tools</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Home Improvement</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Powers And Hand Tools</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Utensil &amp; Gadget</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Consumer Electrics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">Air Conditioners</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">Accessories</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Type Hanging Cell</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Type Hanging Wall</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">Audios &amp; Theaters</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">Headphone</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Home Theater System</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Speakers</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">Car Electronics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">Audio &amp; Video</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Car Security</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Radar Detector</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Vehicle GPS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">Office Electronics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">Printers</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Projectors</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Scanners</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Store &amp; Business</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">TV Televisions</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">4K Ultra HD TVs</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">LED TVs</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">OLED TVs</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="#/">Washing Machines</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="#/">Type Drying Clothes</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Type Horizontal</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="#/">Type Vertical</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Refrigerators</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Health &amp; Beauty</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="#/">Equipments</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Hair Care</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Perfumer</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Skin Care</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Computers &amp; Technologies</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="#/">Desktop PC</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Laptop</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Smartphones</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Jewelry &amp; Watches</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="#/">Gemstone Jewelry</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Men's Watches</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Women's Watches</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Phones &amp; Accessories</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="#/">Iphone 8</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Iphone X</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Sam Sung Note 8</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Sam Sung S8</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="#/">Sport &amp; Outdoor</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="#/">Freezer Burn</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Fridge Cooler</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="#/">Wine Cabinets</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item "><a href="#/">Babies &amp; Moms</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#/">Books &amp; Office</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#/">Cars &amp; Motocycles</a>
                                            </li>
                                        </ul>

                                    </aside>

                                </div>

                            </div>

                        </div> */}

                    </div>

                    <div className="navigation__center">

                        <Link className="ps-logo" to="/" style={{ color: '#fff', fontSize: '30px' }}>
                            WStore
                        </Link>
                    </div>

                    <div className="navigation__right">

                        <div className="header__actions">


                            <div className="ps-cart--mini">

                                <a className="header__extra" href="#/">
                                    <i className="icon-bag2"></i><span><i>{shoppingCart.length}</i></span>
                                </a>

                                <MiniCart />
                            </div>


                            <div className="ps-block--user-header">

                                <div className="ps-block__left">
                                    <i className="icon-user"></i>
                                </div>
                                {
                                    !logged
                                        ?
                                        <div className="ps-block__right">
                                            <Link to="/login">Ingresar</Link>
                                        </div>
                                        :
                                        <div className="ps-block__right">
                                            <i className="fas fa-sign-out-alt" onClick={logout} style={{ fontSize: '27px' }}></i>
                                        </div>
                                }

                            </div>

                        </div>

                    </div>

                </div>

                <div className="ps-search--mobile">

                    <SearchBarMobile/>

                </div>

            </header>

            <div className="navigation--list">
                <div className="navigation__content"><a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i className="icon-menu"></i><span> Menu</span></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="icon-list4"></i><span> Categorias</span></a><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i className="icon-magnifier"></i><span> Buscar</span></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="icon-bag2"></i><span> Carrito</span></a></div>
            </div>

            <div className="ps-panel--sidebar" id="navigation-mobile">
                <div className="ps-panel__header">
                    <span><img src="/img/logo5x5.png" height="70px" alt="Logo WStore" /></span>
                </div>
                {/* <div className="ps-panel__content">
                    <ul className="menu--mobile">
                        <li className="current-menu-item "><a href="#/">Hot Promotions</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Clothing &amp; Apparel</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Home, Garden &amp; Kitchen</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Health &amp; Beauty</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Yewelry &amp; Watches</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Babies &amp; Moms</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Sport &amp; Outdoor</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Phones &amp; Accessories</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Books &amp; Office</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Cars &amp; Motocycles</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Home Improments</a>
                        </li>
                        <li className="current-menu-item "><a href="#/">Vouchers &amp; Services</a>
                        </li>
                    </ul>
                </div> */}
            </div>

            <div className="ps-panel--sidebar" id="search-sidebar">
                <div className="ps-panel__header">
                    <SearchBarMobile/>
                </div>
                <div className="navigation__content"></div>
            </div>

            <div className="ps-panel--sidebar" id="cart-mobile">
                <div className="ps-panel__header">
                    <h3>Carrito Compras</h3>
                </div>
                {
                    shoppingCart.length > 0
                    &&
                    <MiniCartMobile />
                }

            </div>
        </>
    );
}

export default Header;