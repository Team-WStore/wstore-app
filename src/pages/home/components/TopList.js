const TopList = () => {
    return (
        <div className="ps-top-categories">
            <br />
            <div className="container">

                <h3>Top categories of the month</h3>

                <div className="row">

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/1.jpg" alt=""/>
                            <p>Electronics</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/2.jpg" alt=""/>
                            <p>Clothings</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/3.jpg" alt=""/>
                            <p>Computers</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/4.jpg" alt=""/>
                            <p>Home &amp; Kitchen</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/5.jpg" alt=""/>
                            <p>Health &amp; Beauty</p>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                        	<a className="ps-block__overlay" href="shop-default.html"></a>
                        	<img src="img/categories/6.jpg" alt=""/>
                            <p>Health &amp; Beauty</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default TopList;