import ItemProduct from './ItemProduct';

import '../itemproduct.css';

export const Products = ({ list }) => {
    return (
        <div className='container-fluid my-4 mx-4'>

            <h3 className='my-4'>Otros productos</h3>
            <div className="row">
                {
                    list.map(item => <ItemProduct
                        key={item.id}
                        item={item}
                    />)
                }
            </div>
    </div>);
};
