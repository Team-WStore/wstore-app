import { memo } from "react";

const TopItem = memo(({name, img}) => {
    return (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
            <div className="ps-block--category">
                <a className="ps-block__overlay" href="#/"> </a>
                <img src={img} alt="" style={{minHeight:'147px'}} />
                <p>{name}</p>
            </div>
        </div>
    );
});

export default TopItem;