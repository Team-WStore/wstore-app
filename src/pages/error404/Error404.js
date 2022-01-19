import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <div className="ps-breadcrumb">

                <div className="container">

                    <ul className="breadcrumb">

                        <li><a href="#/">Home</a></li>

                        <li>404 Page</li>

                    </ul>

                </div>

            </div>
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <img src="img/404.jpg" alt=""/>
                        <h3>Ohh! Página no encontrada</h3>
                        <p>Parece que no podemos encontrar lo que estás buscando. Tal vez la búsqueda pueda ayudar o volver al<Link to="/"> Inicio</Link></p>
                        <form className="ps-form--widget-search" action="do_action" method="get">
                            <input className="form-control" type="text" placeholder="Search..." />
                            <button><i className="icon-magnifier"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;