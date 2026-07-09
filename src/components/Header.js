import {LOGO_URL} from "../utils/constant";
import {useState, useContext} from "react";
import {Link} from 'react-router';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-100">
            <div className="logo">
                <img className="w-30" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center space-x-3">
                    <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <li><button className="cursor-pointer bg-blue-100  py-2 px-2" onClick={() => {
                        if (btnName === "Login") {
                            setBtnName("Logout");
                        } else {
                            setBtnName("Login");
                        }
                    }}>
                        {btnName}
                    </button></li>
                    <li className="px-4 ">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
