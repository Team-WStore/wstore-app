const TopItem = ({titulo, img}) => {

    return (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
            <div className="ps-block--category">
                <a className="ps-block__overlay" href="#/"> </a>
                <img src={img} alt="" />
                <p>{titulo}</p>
            </div>
        </div>
    );
}

export default TopItem;