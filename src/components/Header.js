import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import {Link} from 'react-router';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login-btn" onClick={() => {
                        if (btnName === "Login") {
                            setBtnName("Logout");
                        } else {
                            setBtnName("Login");
                        }
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
