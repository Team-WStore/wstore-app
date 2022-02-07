import React from 'react';

const ItemMenuShopping = () => {
    return (
        <div className="table-responsive">

            <table className="table ps-table--whishlist dt-responsive" width="100%">

                <thead>

                    <tr>

                        <th>Product name</th>

                        <th>Proccess</th>

                        <th>Price</th>

                        <th>Quantity</th>

                        <th>Review</th>

                    </tr>

                </thead>

                <tbody>

                    {/* Product */}

                    <tr>

                        <td>

                            <div className="ps-product--cart">

                                <div className="ps-product__thumbnail">

                                    <a href="#/">
                                        <img src="../img/products/electronic/1.jpg" alt="" />
                                    </a>

                                </div>

                                <div className="ps-product__content">

                                    <a href="#/">Marshall Kilburn Wireless Bluetooth Speaker, Black (A4819189)</a>

                                </div>

                            </div>

                        </td>

                        <td>

                            <ul className="timeline">
                                <li className="success">
                                    <h5>15 March, 2020</h5>
                                    <p className="text-success">Reviewed <i className="fas fa-check"></i></p>

                                    <div className="media border p-3">
                                        <div className="media-body">
                                            <h4><small><i>Dispute on march 17, 2020</i></small></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates hic maxime modi commodi.</p>
                                        </div>
                                        <img src="img/vendor/store/user/5.jpg" alt="John Doe" className="ml-3 mt-3 rounded-circle" style={{ width: '60px' }} />
                                    </div>

                                    <div className="media border p-3">

                                        <img src="img/vendor/vendor-store.jpg" alt="John Doe" className="ml-3 mt-3 rounded-circle" style={{ width: '60px' }} />
                                        <div className="media-body text-right">
                                            <h4><small><i>Answer on march 17, 2020</i></small></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates hic maxime modi commodi.</p>
                                        </div>

                                    </div>

                                </li>
                                <li className="success">
                                    <h5>18 March, 2020</h5>
                                    <p className="text-success">Sent <i className="fas fa-check"></i></p>
                                    <p>Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quaerat recusandae <br /><a href="#/" target="_blank">ID TRACK A24S36343DWS4</a></p>
                                </li>
                                <li className="success">
                                    <h5>23 March, 2020</h5>
                                    <p className="text-success">Delivered <i className="fas fa-check"></i></p>
                                    <p>Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quaerat recusandae necessitatibus nesciunt</p>
                                </li>
                            </ul>

                            <a className="btn btn-warning btn-lg" href="#/">Repurchase</a>

                        </td>

                        <td className="price text-center">$108.00</td>

                        <td className="text-center">2</td>

                        <td>

                            <div className="text-center  mt-2">

                                <div className="br-theme-fontawesome-stars">

                                    <select className="ps-rating" data-read-only="true" style={{ display: 'none' }}>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="2">5</option>
                                    </select>

                                </div>

                                <a className="btn btn-warning btn-lg" href="#/">Add comment</a>

                            </div>

                        </td>

                    </tr>

                    {/* Product */}

                    <tr>

                        <td>

                            <div className="ps-product--cart">

                                <div className="ps-product__thumbnail">

                                    <a href="#/">

                                        <img src="../img/products/clothing/2.jpg" alt="Ropa" />

                                    </a>
                                </div>

                                <div className="ps-product__content">

                                    <a href="#/">Unero Military classNameical Backpack</a>

                                </div>

                            </div>

                        </td>

                        <td>

                            <ul className="timeline">
                                <li className="success">
                                    <h5>15 March, 2020</h5>
                                    <p className="text-success">Reviewed <i className="fas fa-check"></i></p>
                                    <p>Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quaerat recusandae necessitatibus nesciunt</p>
                                </li>
                                <li className="success">
                                    <h5>18 March, 2020</h5>
                                    <p className="text-success">Sent <i className="fas fa-check"></i></p>
                                    <p>Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quaerat recusandae <br /><a href="#/" target="_blank">ID TRACK A24S36343DWS4</a></p>
                                </li>
                                <li className="process">
                                    <h5>23 March, 2020</h5>
                                    <p>Delivered</p>
                                    <button className="btn btn-primary" disabled>
                                        <span className="spinner-border spinner-border-sm"></span>
                                        In process
                                    </button>
                                </li>
                            </ul>

                            <a className="btn btn-danger btn-lg" href="#/">Open Dispute</a>

                        </td>


                        <td className="price text-center">$205.00</td>

                        <td className="text-center">1</td>

                        <td>

                            <div className=" text-center mt-2">

                                <div className="br-theme-fontawesome-stars">

                                    <select className="ps-rating" data-read-only="true" style={{ display: 'none' }}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                </div>

                                <a className="btn btn-warning btn-lg disabled" href="#/">Add comment</a>

                            </div>

                        </td>

                    </tr>

                    {/* Product */}

                    <tr>

                        <td>

                            <div className="ps-product--cart">

                                <div className="ps-product__thumbnail">

                                    <a href="#/">

                                        <img src="../img/products/electronic/15.jpg" alt="Electronico" />

                                    </a>
                                </div>

                                <div className="ps-product__content">

                                    <a href="#/">XtremepowerUS Stainless Steel Tumble Cloths Dryer</a>

                                </div>

                            </div>

                        </td>

                        <td>

                            <ul className="timeline">
                                <li className="process">
                                    <h5>15 March, 2020</h5>
                                    <p className="text-danger">Reviewed <i className="fas fa-times"></i></p>

                                    <div className="media border p-3">
                                        <div className="media-body">
                                            <h4><small><i>Dispute on march 17, 2020</i></small></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates hic maxime modi commodi.</p>
                                        </div>
                                        <img src="img/vendor/store/user/5.jpg" alt="John Doe" className="ml-3 mt-3 rounded-circle" style={{ width: '60px' }} />
                                    </div>

                                    <div className="media border p-3">

                                        <img src="img/vendor/vendor-store.jpg" alt="John Doe" className="ml-3 mt-3 rounded-circle" style={{ width: '60px' }} />
                                        <div className="media-body text-right">
                                            <h4><small><i>Answer on march 17, 2020</i></small></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates hic maxime modi commodi.</p>
                                        </div>

                                    </div>

                                </li>
                                <li className="process">
                                    <h5>18 March, 2020</h5>
                                    <p className="text-danger">Sent <i className="fas fa-times"></i></p>
                                    <p>Comment: Order canceled</p>

                                </li>
                                <li className="process">
                                    <h5>23 March, 2020</h5>
                                    <p className="text-danger">Delivered <i className="fas fa-times"></i></p>
                                    <p>Comment: Order canceled</p>

                                </li>
                            </ul>

                            <a className="btn btn-danger btn-lg" href="#/">Open Dispute</a>

                        </td>


                        <td className="price text-center">$205.00</td>

                        <td className="text-center">1</td>

                        <td>

                            <div className=" text-center mt-2">

                                <div className="br-theme-fontawesome-stars">

                                    <select className="ps-rating" data-read-only="true" style={{ display: 'none' }}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                </div>

                                <a className="btn btn-warning btn-lg disabled" href="#/">Add comment</a>

                            </div>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>
    )
}

export default ItemMenuShopping;