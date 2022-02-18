import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";

const SearchBarMobile = () => {
    
    const [{search}, handleInputChange]=useForm({search:''});
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search?q=${search}`);
    }

    return (
        <form className="ps-form--search-mobile" onSubmit={handleSubmit}>
            <div className="form-group--nest">
                <input
                    className="form-control"
                    type="text"
                    name="search"
                    value={search}
                    placeholder="Quiero buscar..."
                    onChange={handleInputChange}
                    required
                />
                <button><i className="icon-magnifier"></i></button>
            </div>
        </form>
    );
}

export default SearchBarMobile;