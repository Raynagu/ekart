import Button from "./../Button/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/features/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProduct(product));
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div className="card h-100 p-3">
                <img
                    src={product.image}
                    className="card-img-top"
                    height="250px"
                    alt={product.title}
                />

                <div className="card-body text-center">
                    <h5 className="card-title text-secondary text-truncate">
                        {product.title}
                    </h5>
                </div>
                <div className="d-flex flex-row justify-content-between align-item-scenter mt-2">
                    <h4 className="text-dark">${product.price}</h4>
                    <Button onClick={() => addToCart(product)}>
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
