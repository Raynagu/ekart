import { useSelector } from "react-redux";
import CartCard from "../Components/CartCard/CartCard";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);

    const getCartTotal = () => {
        let cartCount = 0;
        let cartTotal = 0;
        cart.forEach((item) => {
            cartCount += item.quantity;
            cartTotal += item.price * item.quantity;
        });
        return { cartCount, cartTotal };
    };

    const { cartCount, cartTotal } = getCartTotal();

    return (
        <div className="container">
            <div className="row my-4">
                <div className="d-flex flex-column justify-content-center align-items-end">
                    <p>
                        Total Price of {cartCount} Items :
                        <span className="fw-bold">
                            $
                            {Math.round((cartTotal + Number.EPSILON) * 100) /
                                100}
                        </span>
                    </p>
                </div>

                {cartCount > 0 ? (
                    cart.map((product) => (
                        <CartCard product={product} key={product.id} />
                    ))
                ) : (
                    <h2 className="text-center">Your cart is empty.</h2>
                )}
            </div>
        </div>
    );
};

export default Cart;
