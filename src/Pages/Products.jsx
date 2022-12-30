import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "./../Store/features/productSlice";
import Spinner from "../Components/Spinner/Spinner";
import ProductContainer from "./../Components/ProductContainer/ProductContainer";

const Products = () => {
    const { products, isLoading } = useSelector((state) => state.products);
    const { categorySelected } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const productUrl = `https://fakestoreapi.com/products/category/${categorySelected}`;

    const fetchProducts = () => {
        dispatch(productsFetch(productUrl));
    };
    useEffect(() => {
        if (categorySelected) {
            fetchProducts();
        }
        // eslint-disable-next-line
    }, [categorySelected]);

    return (
        <div className="container">
            {isLoading ? (
                <Spinner />
            ) : (
                <div className="row my-4">
                    <ProductContainer products={products} />
                </div>
            )}
        </div>
    );
};

export default Products;
