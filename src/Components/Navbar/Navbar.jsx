import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import UserIcon from "./../UserIcon/UserIcon";

const Navbar = () => {
    const { cart } = useSelector((state) => state.cart);
    const getCartCount = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const cartCount = getCartCount();
    return (
        <div className="navbar bg-primary">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1 text-white fs-2 mr-5">
                        eKart
                    </span>
                </Link>
                <div className="d-flex flex-row justify-content-between align-items-center flex-grow-1">
                    <SearchBar />
                    <div className="d-flex flex-row">
                        <Link to="/cart">
                            <CartIcon cartCount={cartCount} />
                        </Link>
                        <Link to="/profile">
                            <UserIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
