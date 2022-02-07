import { Link } from 'react-router-dom';

const BannerItem = ({ image, name, description, url, className }) => {

    return (
        <div className={`carousel-item ${className}`}>
            <img className="d-block w-100" src={image} alt={name} />
            <div className="carousel-caption d-none d-md-block">
                    <div className='row'>
                        <div className='col-4 mr-auto'>
                            <h3>{name}</h3>
                            <p className="d-bloc my-3">{description}</p>
                            <Link to={url} className="ps-btn">Ver más</Link>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default BannerItem;