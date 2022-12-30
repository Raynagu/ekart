import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </div>
    );
};

export default App;
