import { useEffect, useState, useContext } from 'react';

import MenuShopping from './components/MenuShopping';
import MenuWishlist from './components/MenuWishlist';
import Menu from './components/Menu';
import { ProductContext } from '../../context/product/ProductContext';
import { AuthContext } from '../../context/auth/AuthContext';

const Profile = () => {
    const { loadWishlist } = useContext(ProductContext);
    const { token, user, logged, authenticatedUser } = useContext(AuthContext);

    useEffect(() => {
        loadWishlist();
    }, []);

    useEffect(() => {
        if (logged){authenticatedUser();}
    }, [token]);


    const [menu, setMenu] = useState(0);

    return (
        <div className="ps-vendor-dashboard pro">

            <div className="container">

                <div className="ps-section__header">

                    <aside className="ps-block--store-banner">

                        <div className="ps-block__user">

                            <div className="ps-block__user-avatar">

                                <img src={user?.avatar === null ? '../img/vendor/store/user/no-avatar.png': "http://127.0.0.1:8000" + user?.avatar} alt="Usuario" />

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

                                <h2 className="text-white">{user?.name === ''? 'NN': user?.name}</h2>

                                {user?.lastname && <p><i className="fas fa-user"></i> {user?.lastname} </p>}

                                <p><i className="fas fa-envelope"></i> {user?.email} </p>

                                <button className="btn btn-warning btn-lg">Cambiar contraseña</button>
                                
                                {!user?.name && <p className='mt-4'>Te aconsejamos completar los datos de tu perfil</p>}
                            </div>

                            <div className="row ml-lg-auto pt-5">

                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <a href="#/">
                                            <h1><i className="fas fa-shopping-cart text-white"></i></h1>
                                            <h5 className="text-white">Pedidos <span className="badge badge-secondary rounded-circle">0</span></h5>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <a href="#/">
                                            <h1><i className="fas fa-shopping-bag text-white"></i></h1>
                                            <h5 className="text-white">Productos <span className="badge badge-secondary rounded-circle">0</span></h5>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </aside>


                    <div className="ps-section__content">
                        <Menu menu={menu} setMenu={setMenu} />
                        {menu === 0 && <MenuWishlist />}
                        {menu === 1 && <MenuShopping />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;