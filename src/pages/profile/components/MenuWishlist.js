import { useContext } from 'react';

import { ProductContext } from '../../../context/product/ProductContext';
import ItemProductWishList from './ItemProductWishList';

const ItemMenuWishlist = () => {
    const { wishlist } = useContext(ProductContext);

    return (
        <div className="table-responsive">

            <table className="table ps-table--whishlist dt-responsive">

                <thead>

                    <tr>

                        <th>Nombre</th>

                        <th>Precio</th>

                        <th>Status</th>

                        <th></th>

                        <th></th>

                    </tr>

                </thead>

                <tbody>
                    {
                        wishlist.length > 0
                        ?
                        wishlist.map(item => <ItemProductWishList
                            key={item.id}
                            item={item}
                        />)
                        :
                        <tr>
                            <td colSpan={2}>
                                <div className="spinner-border text-danger mx-auto" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    }

                </tbody>

            </table>

        </div>
    );
}

export default ItemMenuWishlist;