import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const SearchBar = ({ placeholder }) => {
    const [searchKey, setSearchKey] = useState("");
    const [searchSuggest, setSearchSuggest] = useState([]);
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        if (searchKey) {
            const filteredProducts = products.filter(
                (item) =>
                    item.title.toLowerCase().includes(searchKey) ||
                    item.category.toLowerCase().includes(searchKey)
            );
            setSearchSuggest(filteredProducts);
        } else {
            setSearchSuggest([]);
        }
    }, [searchKey, products]);

    const searchDelay = (cb, delay = 1000) => {
        let timeout;

        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    };

    const searchKeyHandle = searchDelay(
        (e) => setSearchKey(e.target.value),
        600
    );

    return (
        <>
            <div
                className="flex-grow-1 mx-2 position-relative"
                style={{ maxWidth: "450px" }}
            >
                <input
                    className="form-control me-2"
                    type="input"
                    name="searchbar"
                    id="searchbar"
                    placeholder={placeholder}
                    aria-label="search"
                    onKeyUp={searchKeyHandle}
                />
                {searchSuggest.length > 0 ? (
                    <div className="d-flex flex-column position-absolute start-0 p-2 bg-white border rounded w-100">
                        {searchSuggest.map((item) => (
                            <p
                                key={item.id}
                                className="d-inline-block my-1 text-truncate"
                                role="button"
                            >
                                {item.title}
                            </p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SearchBar;
