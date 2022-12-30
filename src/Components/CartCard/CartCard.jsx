import Button from "./../Button/Button";
import { useDispatch } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    removeProduct,
} from "../../Store/features/cartSlice";
const CartCard = ({ product }) => {
    const { id } = product;
    const dispatch = useDispatch();
    const total = product.quantity * product.price;
    const increaseItem = () => {
        dispatch(incrementQuantity(id));
    };
    const decreaseItem = () => {
        dispatch(decrementQuantity(id));
    };
    const removeItem = () => {
        dispatch(removeProduct(id));
    };

    return (
        <div className="col-12 col-sm-12 col-md-10 offset-md-1 my-1">
            <div
                className="d-flex flex-row justify-content-between align-items-center border rounded shadow-sm p-4"
                style={{ height: "150px" }}
            >
                <div style={{ width: "80px" }} className="mx-1">
                    <img src={product.image} alt="" className="w-100" />
                </div>
                <p className="mx-1 m-0" style={{ width: "350px" }}>
                    {product.title}
                </p>
                <div className="d-flex flex-row mx-1">
                    <Button onClick={increaseItem}>+</Button>
                    <span className="p-2 text-center">{product.quantity}</span>
                    <Button onClick={decreaseItem}>-</Button>
                </div>
                <p className="mx-1 m-0 fw-bold">
                    ${Math.round((total + Number.EPSILON) * 100) / 100}
                </p>
                <Button onClick={removeItem}>remove</Button>
            </div>
        </div>
    );
};

export default CartCard;
