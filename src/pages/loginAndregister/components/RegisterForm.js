import { useContext } from 'react';

import { AuthContext } from '../../../context/auth/AuthContext';
import { useForm } from '../../../hooks/useForm';

const RegisterForm = () => {

    const { signupUser } = useContext(AuthContext);

    const [{
        email,
        password1,
        password2,
    }, handleInputChange] = useForm({
        email: '',
        password1: '',
        password2: '',
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(password1 === password2) await signupUser({email, password1, password2});
    }

    return (
        <form className='animate__animated animate__pulse' onSubmit={handleSubmit}>

            <div className="ps-tab active">

                <div className="ps-form__content pb-3">

                    <h4 className="mb-5">Registrar una cuenta</h4>

                    <div className="form-group">

                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-group form-forgot">

                        <input
                            className="form-control"
                            type="password"
                            placeholder="Contraseña"
                            name="password1"
                            value={password1}
                            onChange={handleInputChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirmar contraseña"
                            name="password2"
                            value={password2}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-group submtit">

                        <button className="ps-btn ps-btn--fullwidth">Registrarse</button>

                    </div>

                </div>


            </div>
        </form>
    );
};

export default RegisterForm;