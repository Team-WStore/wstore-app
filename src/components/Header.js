const Header = () => {
    return (
        <>
            <header className="header header--standard header--market-place-4" data-sticky="true">

                <div className="header__content">

                    <div className="container">

                        <div className="header__content-left">

                            <a className="ps-logo" href="index.html">
                                <img src="img/template/logo_light.png" alt=""/>
                            </a>

                            <div className="menu--product-categories">
                                
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>Categorias</span>
                                </div>

                                <div className="menu__content">
                                    <ul className="menu--dropdown">
                                        <li>
                                            <a href="#"><i className="icon-star"></i> Hot Promotions</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-shirt"></i> Clothing &amp; Apparel</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-lampshade"></i> Home, Garden &amp; Kitchen</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-heart-pulse"></i> Health &amp; Beauty</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-diamond2"></i> Yewelry &amp; Watches</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-baby-bottle"></i> Babies &amp; Moms</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-baseball"></i> Sport &amp; Outdoor</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-smartphone"></i> Phones &amp; Accessories</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-book2"></i> Books &amp; Office</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-car-siren"></i> Cars &amp; Motocycles</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-wrench"></i> Home Improments</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-tag"></i> Vouchers &amp; Services</a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="header__content-center">
                            <form className="ps-form--quick-search" action="index.html" method="get">
                                <input className="form-control" type="text" placeholder="Estoy comprando ..."/>
                                <button>Buscar</button>
                            </form>
                        </div>

                        <div className="header__content-right">

                            <div className="header__actions">

                                <a className="header__extra" href="#">
                                    <i className="icon-heart"></i><span><i>0</i></span>
                                </a>

                                <div className="ps-cart--mini">

                                    <a className="header__extra" href="#">
                                        <i className="icon-bag2"></i><span><i>0</i></span>
                                    </a>

                                    <div className="ps-cart__content">

                                        <div className="ps-cart__items">

                                            <div className="ps-product--cart-mobile">

                                                <div className="ps-product__thumbnail">
                                                    <a href="#">
                                                        <img src="img/products/clothing/7.jpg" alt=""/>
                                                    </a>
                                                </div>

                                                <div className="ps-product__content">
                                                    <a className="ps-product__remove" href="#">
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                    <a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                                    <p><strong>Sold by:</strong> YOUNG SHOP</p>
                                                    <small>1 x $59.99</small>
                                                </div>

                                            </div>

                                            <div className="ps-product--cart-mobile">

                                                <div className="ps-product__thumbnail">
                                                    <a href="#">
                                                        <img src="img/products/clothing/5.jpg" alt=""/>
                                                    </a>
                                                </div>

                                                <div className="ps-product__content">
                                                    <a className="ps-product__remove" href="#">
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                    <a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                                    <p><strong>Sold by:</strong> YOUNG SHOP</p>
                                                    <small>1 x $59.99</small>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="ps-cart__footer">

                                            <h3>Sub Total:<strong>$59.99</strong></h3>
                                            <figure>
                                                <a className="ps-btn" href="shopping-cart.html">Ver Carrito</a>
                                                <a className="ps-btn" href="checkout.html">Checkout</a>
                                            </figure>

                                        </div>

                                    </div>

                                </div>

                                <div className="ps-block--user-header">
                                    <div className="ps-block__left">
                                        <i className="icon-user"></i>
                                    </div>
                                    <div className="ps-block__right">
                                        <a href="my-account.html">Ingresar</a>
                                        <a href="my-account.html">Registrarse</a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </header>

            <header className="header header--mobile" data-sticky="true">

                <div className="navigation--mobile">

                    <div className="navigation__left">

                        <div className="menu--product-categories">
                            
                            <div className="ps-shop__filter-mb mt-4" id="filter-sidebar">
                                <i className="icon-menu "></i>
                            </div>

                            <div className="ps-filter--sidebar">

                                <div className="ps-filter__header">
                                    <h3>Categorias</h3><a className="ps-btn--close ps-btn--no-boder" href="#"></a>
                                </div>

                                <div className="ps-filter__content">

                                    <aside className="widget widget_shop">

                                        <ul className="ps-list--categories">
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Clothing &amp; Apparel</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{display: "none"}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Womens</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Mens</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Bags</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Sunglasses</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Accessories</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Kid's Fashion</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Garden &amp; Kitchen</a><span className="sub-toggle active"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{display: "block"}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Cookware</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Decoration</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Furniture</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Garden Tools</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Home Improvement</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Powers And Hand Tools</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Utensil &amp; Gadget</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Consumer Electrics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Air Conditioners</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">Accessories</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Type Hanging Cell</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Type Hanging Wall</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Audios &amp; Theaters</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">Headphone</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Home Theater System</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Speakers</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Car Electronics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">Audio &amp; Video</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Car Security</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Radar Detector</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Vehicle GPS</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Office Electronics</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">Printers</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Projectors</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Scanners</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Store &amp; Business</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">TV Televisions</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">4K Ultra HD TVs</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">LED TVs</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">OLED TVs</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Washing Machines</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                        <ul className="sub-menu" style={{}}>
                                                            <li className="current-menu-item "><a href="shop-default.html">Type Drying Clothes</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Type Horizontal</a>
                                                            </li>
                                                            <li className="current-menu-item "><a href="shop-default.html">Type Vertical</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Refrigerators</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Health &amp; Beauty</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Equipments</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Hair Care</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Perfumer</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Skin Care</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Computers &amp; Technologies</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Desktop PC</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Laptop</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Smartphones</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Jewelry &amp; Watches</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Gemstone Jewelry</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Men's Watches</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Women's Watches</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Phones &amp; Accessories</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Iphone 8</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Iphone X</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Sam Sung Note 8</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Sam Sung S8</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children"><a href="shop-default.html">Sport &amp; Outdoor</a><span className="sub-toggle"><i className="fa fa-angle-down"></i></span>
                                                <ul className="sub-menu" style={{}}>
                                                    <li className="current-menu-item "><a href="shop-default.html">Freezer Burn</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Fridge Cooler</a>
                                                    </li>
                                                    <li className="current-menu-item "><a href="shop-default.html">Wine Cabinets</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="current-menu-item "><a href="shop-default.html">Babies &amp; Moms</a>
                                            </li>
                                            <li className="current-menu-item "><a href="shop-default.html">Books &amp; Office</a>
                                            </li>
                                            <li className="current-menu-item "><a href="shop-default.html">Cars &amp; Motocycles</a>
                                            </li>
                                        </ul>

                                    </aside>   

                                </div>

                            </div>        

                        </div>

                    </div>

                    <div className="navigation__center">

                        <a className="ps-logo" href="index.html">
                            <img src="img/template/logo_light.png" className="pt-3" alt=""/>
                        </a>
                    </div>

                    <div className="navigation__right">

                        <div className="header__actions">


                            <div className="ps-cart--mini">

                                <a className="header__extra" href="#">
                                    <i className="icon-bag2"></i><span><i>0</i></span>
                                </a>

                                <div className="ps-cart__content">

                                    <div className="ps-cart__items">

                                        <div className="ps-product--cart-mobile">

                                            <div className="ps-product__thumbnail">
                                                <a href="#">
                                                    <img src="img/products/clothing/7.jpg" alt=""/>
                                                </a>
                                            </div>

                                            <div className="ps-product__content">
                                                
                                                <a className="ps-product__remove" href="#">
                                                    <i className="icon-cross"></i>
                                                </a>

                                                <a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                                <p><strong>Sold by:</strong> YOUNG SHOP</p>
                                                <small>1 x $59.99</small>

                                            </div>

                                        </div>

                                        <div className="ps-product--cart-mobile">

                                            <div className="ps-product__thumbnail">

                                                <a href="#"><img src="img/products/clothing/5.jpg" alt=""/></a>

                                            </div>

                                            <div className="ps-product__content">
                                                <a className="ps-product__remove" href="#">
                                                    <i className="icon-cross"></i>
                                                </a>
                                                <a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                                <p><strong>Sold by:</strong> YOUNG SHOP</p>
                                                <small>1 x $59.99</small>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="ps-cart__footer">

                                        <h3>Sub Total:<strong>$59.99</strong></h3>

                                        <figure>
                                            <a className="ps-btn" href="shopping-cart.html">View Cart</a>
                                            <a className="ps-btn" href="checkout.html">Checkout</a>
                                        </figure>

                                    </div>

                                </div>

                            </div>


                            <div className="ps-block--user-header">

                                <div className="ps-block__left">
                                    <i className="icon-user"></i>
                                </div>
                                <div className="ps-block__right">
                                    <a href="my-account.html">Ingresar</a>
                                    <a href="my-account.html">Registrarse</a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="ps-search--mobile">

                    <form className="ps-form--search-mobile" action="index.html" method="get">
                        <div className="form-group--nest">
                            <input className="form-control" type="text" placeholder="Search something..."/>
                            <button><i className="icon-magnifier"></i></button>
                        </div>
                    </form>

                </div>

            </header>



            <div className="navigation--list">
                <div className="navigation__content"><a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i className="icon-menu"></i><span> Menu</span></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="icon-list4"></i><span> Categorias</span></a><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i className="icon-magnifier"></i><span> Buscar</span></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="icon-bag2"></i><span> Carrito</span></a></div>
            </div>


            <div className="ps-panel--sidebar" id="menu-mobile">
                <div className="ps-panel__header">
                    <h3>Menu</h3>
                </div>
                <div className="ps-panel__content">
                    <ul className="menu--mobile">
                        <li className="menu-item-has-children"><a href="index.html">Home</a><span className="sub-toggle"></span>
                            <ul className="sub-menu">
                                <li className="current-menu-item "><a href="index.html">Marketplace Full Width</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-2.html">Home Auto Parts</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-10.html">Home Technology</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-9.html">Home Organic</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-3.html">Home Marketplace V1</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-4.html">Home Marketplace V2</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-5.html">Home Marketplace V3</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-6.html">Home Marketplace V4</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-7.html">Home Electronic</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-8.html">Home Furniture</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-kids.html">Home Kids</a>
                                </li>
                                <li className="current-menu-item "><a href="homepage-photo-and-video.html">Home photo and picture</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><a href="shop-default.html">Shop</a><span className="sub-toggle"></span>
                            <div className="mega-menu">
                                <div className="mega-menu__column">
                                    <h4>Catalog Pages<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="shop-default.html">Shop Default</a>
                                        </li>
                                        <li className="current-menu-item "><a href="shop-default.html">Shop Fullwidth</a>
                                        </li>
                                        <li className="current-menu-item "><a href="shop-categories.html">Shop Categories</a>
                                        </li>
                                        <li className="current-menu-item "><a href="shop-sidebar.html">Shop Sidebar</a>
                                        </li>
                                        <li className="current-menu-item "><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                                        </li>
                                        <li className="current-menu-item "><a href="shop-carousel.html">Shop Carousel</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Product Layout<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="product-default.html">Default</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-extend.html">Extended</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-full-content.html">Full Content</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-box.html">Boxed</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-sidebar.html">Sidebar</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-default.html">Fullwidth</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Product Types<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="product-default.html">Simple</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-default.html">Color Swatches</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-image-swatches.html">Images Swatches</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-countdown.html">Countdown</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-multi-vendor.html">Multi-Vendor</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-instagram.html">Instagram</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-affiliate.html">Affiliate</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-on-sale.html">On sale</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-video.html">Video Featured</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-groupped.html">Grouped</a>
                                        </li>
                                        <li className="current-menu-item "><a href="product-out-stock.html">Out Of Stock</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Woo Pages<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="shopping-cart.html">Shopping Cart</a>
                                        </li>
                                        <li className="current-menu-item "><a href="checkout.html">Checkout</a>
                                        </li>
                                        <li className="current-menu-item "><a href="whishlist.html">Whishlist</a>
                                        </li>
                                        <li className="current-menu-item "><a href="compare.html">Compare</a>
                                        </li>
                                        <li className="current-menu-item "><a href="order-tracking.html">Order Tracking</a>
                                        </li>
                                        <li className="current-menu-item "><a href="my-account.html">My Account</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><a href="">Pages</a><span className="sub-toggle"></span>
                            <div className="mega-menu">
                                <div className="mega-menu__column">
                                    <h4>Basic Page<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="about-us.html">About Us</a>
                                        </li>
                                        <li className="current-menu-item "><a href="contact-us.html">Contact</a>
                                        </li>
                                        <li className="current-menu-item "><a href="faqs.html">Faqs</a>
                                        </li>
                                        <li className="current-menu-item "><a href="comming-soon.html">Comming Soon</a>
                                        </li>
                                        <li className="current-menu-item "><a href="404-page.html">404 Page</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Vendor Pages<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="become-a-vendor.html">Become a Vendor</a>
                                        </li>
                                        <li className="current-menu-item "><a href="vendor-store.html">Vendor Store</a>
                                        </li>
                                        <li className="current-menu-item "><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                                        </li>
                                        <li className="current-menu-item "><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item-has-children has-mega-menu"><a href="">Blogs</a><span className="sub-toggle"></span>
                            <div className="mega-menu">
                                <div className="mega-menu__column">
                                    <h4>Blog Layout<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="blog-grid.html">Grid</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-list.html">Listing</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-small-thumb.html">Small Thumb</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-left-sidebar.html">Left Sidebar</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-right-sidebar.html">Right Sidebar</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mega-menu__column">
                                    <h4>Single Blog<span className="sub-toggle"></span></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="blog-detail.html">Single 1</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-detail-2.html">Single 2</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-detail-3.html">Single 3</a>
                                        </li>
                                        <li className="current-menu-item "><a href="blog-detail-4.html">Single 4</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="ps-panel--sidebar" id="navigation-mobile">
                <div className="ps-panel__header">
                    <h3>Categorias</h3>
                </div>
                <div className="ps-panel__content">
                    <ul className="menu--mobile">
                        <li className="current-menu-item "><a href="#">Hot Promotions</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Clothing &amp; Apparel</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Home, Garden &amp; Kitchen</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Health &amp; Beauty</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Yewelry &amp; Watches</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Babies &amp; Moms</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Sport &amp; Outdoor</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Phones &amp; Accessories</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Books &amp; Office</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Cars &amp; Motocycles</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Home Improments</a>
                        </li>
                        <li className="current-menu-item "><a href="#">Vouchers &amp; Services</a>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="ps-panel--sidebar" id="search-sidebar">
                <div className="ps-panel__header">
                    <form className="ps-form--search-mobile" action="index.html" method="get">
                        <div className="form-group--nest">
                            <input className="form-control" type="text" placeholder="Search something..."/>
                            <button><i className="icon-magnifier"></i></button>
                        </div>
                    </form>
                </div>
                <div className="navigation__content"></div>
            </div>

            <div className="ps-panel--sidebar" id="cart-mobile">
                <div className="ps-panel__header">
                    <h3>Carrito Compras</h3>
                </div>
                <div className="navigation__content">
                    <div className="ps-cart--mobile">
                        <div className="ps-cart__content">
                            <div className="ps-product--cart-mobile">
                                <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt=""/></a></div>
                                <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                    <p><strong>Sold by:</strong> YOUNG SHOP</p><small>1 x $59.99</small>
                                </div>
                            </div>
                        </div>
                        <div className="ps-cart__footer">
                            <h3>Sub Total:<strong>$59.99</strong></h3>
                            <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;