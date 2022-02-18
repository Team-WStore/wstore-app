import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";

const SearchBar = () => {
    const [{search}, handleInputChange]=useForm({search:''});
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search?q=${search}`);
    }

    return (
        <div className="header__content-center">
            <form className="ps-form--quick-search" onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="search"
                    value={search}
                    placeholder="Quiero buscar..."
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default SearchBar;