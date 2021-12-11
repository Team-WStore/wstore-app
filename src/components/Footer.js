const Footer = () => {
    return (
        <footer className="ps-footer">

            <div className="container">

                <div className="ps-footer__widgets">  

                    <aside className="widget widget_footer widget_contact-us">

                        <h4 className="widget-title">Contact us</h4>

                        <div className="widget_content">

                            <p>Call us 24/7</p>
                            <h3>1800 97 97 69</h3>
                            <p>502 New Design Str, Melbourne, Australia <br/>
                                <a href="mailto:contact@marketplace.co">contact@marketplace.co</a>
                            </p>

                            <ul className="ps-list--social">
                                <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a className="google-plus" href="#"><i className="fab fa-youtube"></i></a></li>
                                <li><a className="instagram" href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>

                        </div>

                    </aside>


                    <aside className="widget widget_footer">

                        <h4 className="widget-title">Quick links</h4>

                        <ul className="ps-list--link">

                            <li><a href="#">Policy</a></li>

                            <li><a href="#">Term &amp; Condition</a></li>

                            <li><a href="#">Shipping</a></li>

                            <li><a href="#">Return</a></li>

                            <li><a href="faqs.html">FAQs</a></li>

                        </ul>

                    </aside>


                    <aside className="widget widget_footer">

                        <h4 className="widget-title">Company</h4>

                        <ul className="ps-list--link">

                            <li><a href="about-us.html">About Us</a></li>

                            <li><a href="#">Affilate</a></li>

                            <li><a href="#">Career</a></li>

                            <li><a href="contact-us.html">Contact</a></li>

                        </ul>

                    </aside>


                    <aside className="widget widget_footer">

                        <h4 className="widget-title">Bussiness</h4>

                        <ul className="ps-list--link">

                            <li><a href="#">Our Press</a></li>

                            <li><a href="checkout.html">Checkout</a></li>

                            <li><a href="my-account.html">My account</a></li>

                            <li><a href="shop-default.html">Shop</a></li>

                        </ul>

                    </aside>

                </div>

            </div>

        </footer>
    );
}

export default Footer;