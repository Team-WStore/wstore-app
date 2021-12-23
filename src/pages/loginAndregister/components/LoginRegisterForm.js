const LoginAndRegisterForm = () => {
    return (
        <div class="ps-my-account">

            <div class="container">

                <form class="ps-form--account ps-tab-root" action="link.html" method="get">

                    <ul class="ps-tab-list">

                        <li class="active"><a href="#sign-in">Ingresar</a></li>

                        <li class=""><a href="#register">Registrarse</a></li>

                    </ul>

                    <div class="ps-tabs">

                        <div class="ps-tab active" id="sign-in">

                            <div class="ps-form__content">

                                <h5>Ingrese en su cuenta</h5>

                                <div class="form-group">

                                    <input class="form-control" type="text" placeholder="Email"/>

                                </div>

                                <div class="form-group form-forgot">

                                    <input class="form-control" type="text" placeholder="Contraseña"/>

                                </div>

                                <div class="form-group submtit">

                                    <button class="ps-btn ps-btn--fullwidth">Ingresar</button>

                                </div>

                            </div>

                        </div>

                        <div class="ps-tab" id="register">

                            <div class="ps-form__content">

                                <h5>Registrar una cuenta</h5>

                                <div class="form-group">

                                    <input class="form-control" type="text" placeholder="Nombre"/>

                                </div>

                                <div class="form-group">

                                    <input class="form-control" type="text" placeholder="Apellido"/>

                                </div>

                                <div class="form-group">

                                    <input class="form-control" type="text" placeholder="Nombre de Usuario"/>

                                </div>

                                <div class="form-group">

                                    <input class="form-control" type="email" placeholder="Email"/>

                                </div>

                                <div class="form-group">

                                    <input class="form-control" type="text" placeholder="Contraseña"/>

                                </div>

                                <div class="form-group submtit">

                                    <button class="ps-btn ps-btn--fullwidth">Registrarse</button>

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