import React from 'react';
import ItemProductWishList from './ItemProductWishList';

const ItemMenuWishlist = () => {
    return (
        <div className="table-responsive">

            <table className="table ps-table--whishlist dt-responsive">

                <thead>

                    <tr>

                        <th>Product name</th>

                        <th>Unit Price</th>

                        <th>Stock Status</th>

                        <th></th>

                        <th></th>

                    </tr>

                </thead>

                <tbody>

                    <ItemProductWishList
                        product={{
                            url: 'img/products/electronic/1.jpg',
                            name: 'Marshall Kilburn Wireless Bluetooth Speaker, Black (A4819189)',
                            price: 205.0,
                            stock: true,
                        }}
                    />

                    <ItemProductWishList
                        product={{
                            url: 'img/products/clothing/2.jpg',
                            name: 'Unero Military classNameical Backpack',
                            price: 108.0,
                            stock: true,
                        }}
                    />

                    <ItemProductWishList
                        product={{
                            url: 'img/products/electronic/15.jpg',
                            name: 'XtremepowerUS Stainless Steel Tumble Cloths Dryer',
                            price: 508.0,
                            stock: false,
                        }}
                    />

                </tbody>

            </table>

        </div>
    );
}

export default ItemMenuWishlist;