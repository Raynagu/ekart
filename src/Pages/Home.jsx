import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../Components/CategoryContainer/CategoryContainer";
import Spinner from "../Components/Spinner/Spinner";
import {
    categoryFetch,
    setCategorySelected,
} from "../Store/features/categorySlice";
import Products from "./Products";

const Home = () => {
    const { categories, isLoading } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const catUrl = "https://fakestoreapi.com/products/categories";

    const selectCategoryHandler = (cat) => {
        dispatch(setCategorySelected(cat));
    };

    const loadCategories = () => {
        dispatch(categoryFetch(catUrl));
    };
    useEffect(() => {
        loadCategories();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            selectCategoryHandler(categories[0]);
            // eslint-disable-next-line
        }
        // eslint-disable-next-line
    }, [categories]);

    return (
        <div className="container">
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="row my-4">
                    <h2 className="text-capitalize text-center my-5">
                        Categories
                    </h2>
                    <CategoryContainer categories={categories} />
                    <Products />
                </div>
            )}
        </div>
    );
};

export default Home;
