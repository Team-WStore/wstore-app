const Footer = () => {
    return (
        <footer className="ps-footer">

            <div className="container">

                <div className="ps-footer__widgets">  

                    <aside className="widget widget_footer widget_contact-us">

                        <h4 className="widget-title">Contactanos</h4>

                        <div className="widget_content">

                            <p>Llámanos 24/7</p>
                            <h3>+57 320 123 4567</h3>
                            <p>Cll 1 #4-30, Bogotá, Colombia<br/>
                                <a href="#/">contact@wstore.com</a>
                            </p>

                            <ul className="ps-list--social">
                                <li><a className="facebook" href="#/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="#/"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="google-plus" href="#/"><i className="fab fa-youtube"></i></a></li>
                                <li><a className="instagram" href="#/"><i className="fab fa-instagram"></i></a></li>
                            </ul>

                        </div>

                    </aside>


                    <aside className="widget widget_footer">

                        <h4 className="widget-title">Legal</h4>

                        <ul className="ps-list--link">

                            <li><a href="#/">Politicas de privacidad</a></li>

                            <li><a href="#/">Terminos y condiciones</a></li>

                        </ul>

                    </aside>


                    <aside className="widget widget_footer">

                        <h4 className="widget-title">Empresa</h4>

                        <ul className="ps-list--link">

                            <li><a href="#/">Acerca de</a></li>

                            <li><a href="#/">Contacto</a></li>

                        </ul>

                    </aside>

                </div>

            </div>

        </footer>
    );
}

export default Footer;