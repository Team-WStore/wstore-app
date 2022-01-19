import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";
import { useForm } from "../../../hooks/useForm";

const LoginAndRegisterForm = () => {
    const { login, signupUser } = useContext(AuthContext);

    const [{ email, password }, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const [{
        name,
        lastname,
        username,
        email2,
        password2
    }, handleInputChange2] = useForm({
        name: '',
        lastname: '',
        username: '',
        email2: '',
        password2: '',
    });

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (email !== '' && password !== '') login({ email, password });
        else signupUser({
            name,
            lastname,
            username,
            email2,
            password2
        });
    }
    return (
        <div className="ps-my-account">

            <div className="container">

                <form className="ps-form--account ps-tab-root" onSubmit={handleSubmitLogin}>

                    <ul className="ps-tab-list">

                        <li className="active">
                            <a href="#sign-in">Ingresar</a>
                        </li>

                        <li className="">
                            <a href="#register">Registrarse</a>
                        </li>

                    </ul>

                    <div className="ps-tabs">

                        <div className="ps-tab active" id="sign-in">

                            <div className="ps-form__content">

                                <h5>Ingrese en su cuenta</h5>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="form-group form-forgot">

                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Contraseña"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                    />

                                </div>

                                <div className="form-group submtit">

                                    <button className="ps-btn ps-btn--fullwidth">Ingresar</button>

                                </div>

                            </div>

                        </div>

                        <div className="ps-tab" id="register">

                            <div className="ps-form__content">

                                <h5>Registrar una cuenta</h5>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre"
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange2}
                                    />
                                </div>

                                <div className="form-group">

                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Apellido"
                                        name="lastname"
                                        value={lastname}
                                        onChange={handleInputChange2}
                                    />

                                </div>

                                <div className="form-group">

                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre de Usuario"
                                        name="username"
                                        value={username}
                                        onChange={handleInputChange2}
                                    />

                                </div>

                                <div className="form-group">

                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        name="email2"
                                        value={email2}
                                        onChange={handleInputChange2}
                                    />

                                </div>

                                <div className="form-group">

                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Contraseña"
                                        name="password2"
                                        value={password2}
                                        onChange={handleInputChange2}
                                    />

                                </div>

                                <div className="form-group submtit">

                                    <button className="ps-btn ps-btn--fullwidth">Registrarse</button>

                                </div>

                            </div>


                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default LoginAndRegisterForm;