import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const Access = () => {

    const [tab, setTab] = useState(0);

    return (
        <div className="ps-my-account">

            <div className="container">

                <div className="ps-form--account ps-tab-root">

                    <ul className="ps-tab-list">

                        <li className={tab === 0 ? 'active' : ''}>
                            <a href="#/" onClick={() => setTab(0)}>Ingresar</a>
                        </li>

                        <li className={tab === 1 ? 'active' : ''}>
                            <a href="#/" onClick={() => setTab(1)}>Registrarse</a>
                        </li>

                    </ul>

                    <div className="ps-tabs">
                        {
                            tab === 0
                                ?
                                <LoginForm />
                                :
                                <RegisterForm />
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Access;