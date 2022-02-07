import { useContext } from "react";

import { AuthContext } from "../../../context/auth/AuthContext";
import { useForm } from "../../../hooks/useForm";

const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [{ email, password }, handleInputChange] = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login({email, password});
    }

    return (
        <form className='animate__animated animate__pulse' onSubmit={handleSubmit}>
            <div className="ps-tab active">

                <div className="ps-form__content pb-3">

                    <h4 className="mb-5">Ingrese en su cuenta</h4>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            autoComplete="off"
                            required
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
                            required
                        />

                    </div>

                    <div className="form-group submtit">

                        <button className="ps-btn ps-btn--fullwidth">Ingresar</button>

                    </div>

                </div>

            </div>
        </form>
    );
};

export default LoginForm;