import {LOGO_URL} from "../utils/constant";
import React, {useState} from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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
