import ItemProduct from './ItemProduct';

import '../itemproduct.css';

export const Products = ({ name, list }) => {
    return (
        <div className='container-fluid my-4 mx-4'>

            <h3 className='my-5'>{name}</h3>
            <div className="row">
                {
                    list?.length >0
                    &&
                    list?.map(item => <ItemProduct
                        key={item?.id}
                        item={item}
                    />)
                }
            </div>
    </div>);
};
