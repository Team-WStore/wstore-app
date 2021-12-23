const Newsletter = () => {
    return (
        <div className="ps-newsletter">

            <div className="container">

                <form className="ps-form--newsletter" action="do_action" method="post">

                    <div className="row">

                        <div className="col-xl-5 col-12 ">
                            <div className="ps-form__left">
                                <h3>Boletin informativo</h3>
                                <p>Suscríbase para obtener información sobre productos y cupones</p>
                            </div>
                        </div>

                        <div className="col-xl-7 col-12 ">

                            <div className="ps-form__right">

                                <div className="form-group--nest">

                                    <input className="form-control" type="email" placeholder="Email address"/>
                                    <button className="ps-btn">Suscribir</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Newsletter;