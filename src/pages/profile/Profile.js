import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MenuShopping from './components/MenuShopping';
import MenuWishlist from './components/MenuWishlist';
import Menu from './components/Menu';

const Profile = () => {
    const [menu, setMenu] = useState(0);

    return (
        <>
            <Header />
            <div className="ps-vendor-dashboard pro">

                <div className="container">

                    <div className="ps-section__header">

                        <aside className="ps-block--store-banner">

                            <div className="ps-block__user">

                                <div className="ps-block__user-avatar">

                                    <img src="img/vendor/store/user/5.jpg" alt="Usuario" />

                                    <div className="br-wrapper">

                                        <button className="btn btn-primary btn-lg rounded-circle"><i className="fas fa-pencil-alt"></i></button>

                                    </div>

                                    <div className="br-wrapper br-theme-fontawesome-stars mt-3">

                                        <select className="ps-rating" data-read-only="true" style={{ display: 'none' }}>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="2">5</option>
                                        </select>

                                    </div>

                                </div>

                                <div className="ps-block__user-content text-center text-lg-left">

                                    <h2 className="text-white">Gilbert Maxiliun</h2>

                                    <p><i className="fas fa-user"></i> maximiluin</p>

                                    <p><i className="fas fa-envelope"></i> gopro@gmail.com</p>

                                    <button className="btn btn-warning btn-lg">Cambiar contraseña</button>

                                </div>

                                <div className="row ml-lg-auto pt-5">

                                    <div className="col-lg-3 col-6">
                                        <div className="text-center">
                                            <a href="#/">
                                                <h1><i className="fas fa-shopping-cart text-white"></i></h1>
                                                <h5 className="text-white">Pedidos <span className="badge badge-secondary rounded-circle">51</span></h5>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <div className="text-center">
                                            <a href="#/">
                                                <h1><i className="fas fa-shopping-bag text-white"></i></h1>
                                                <h5 className="text-white">Productos <span className="badge badge-secondary rounded-circle">51</span></h5>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <div className="text-center">
                                            <a href="#/">
                                                <h1><i className="fas fa-bell text-white"></i></h1>
                                                <h5 className="text-white">Disputas <span className="badge badge-secondary rounded-circle">51</span></h5>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <div className="text-center">
                                            <a href="#/">
                                                <h1><i className="fas fa-comments text-white"></i></h1>
                                                <h5 className="text-white">Mensajes <span className="badge badge-secondary rounded-circle">51</span></h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </aside>


                        <div className="ps-section__content">
                            <Menu menu={menu} setMenu={setMenu}/>
                            {menu === 0 && <MenuShopping/>}
                            {menu === 1 && <MenuWishlist/>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;