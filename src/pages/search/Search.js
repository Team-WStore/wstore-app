import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { ProductContext } from "../../context/product/ProductContext";
import { useContext, useEffect } from "react";
import { Products } from "../home/components/Products";
import ItemProduct from "../home/components/ItemProduct";

const Search = () => {
    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);
    const { searchFor, searchResults } = useContext(ProductContext);

    useEffect(() => {
        searchFor(q);
    }, [q]);

    return (
        <div className='container-fluid my-4 mx-4'>

            <h3 className='my-5'>Resultados de la búsqueda</h3>
            <div className="row">
                {
                    searchResults?.length > 0
                    ?
                    searchResults.map(item => <ItemProduct
                        key={item.id}
                        item={item}
                    />)
                    :
                    <p className="mx-auto py-3 px-4 rounded-pill" style={{backgroundColor:'#F06292', color:'#fff'}}>
                        No hay resultados para tu búsqueda <b>{q}</b>
                    </p>
                }
            </div>
        </div>
    );
}

export default Search;