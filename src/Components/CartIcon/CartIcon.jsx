import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ cartCount }) => {
    return (
        <div className="my-3 mx-2 position-relative">
            <FaShoppingCart size="30px" className="text-white" />
            <span className="position-absolute top-0 start-100  translate-middle bg-warning badge rounded-pill">
                {cartCount}
            </span>
        </div>
    );
};

export default CartIcon;
