import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./NavBar.css";
const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <header>
            <div className="col-lg-6">
                <img
                    className="imgl"
                    src="https://www.thepopularapps.com/application/upload/Apps/2016/04/lost-found-look-around-32.png"
                    width={260}
                />
            </div>
            <div className="col-lg-6">
                <nav>
                    <ul>
                        <Link to="">
                            <li className="static" id="HO">
                                HOMME
                            </li>
                        </Link>{" "}
                    </ul>
                    <ul>
                        <ul className="ul_auth">
                            {isAuth ? (
                                <ul>
                                    <Link to="/addpostlost">
                                        {" "}
                                        <li className="lost">ADD LOST ITEM</li>
                                    </Link>
                                    <Link to="/addpostfound">
                                        {" "}
                                        <li className="lost">ADD FOUND ITEM</li>
                                    </Link>
                                    <Link to="/">
                                        {" "}
                                        <li
                                            className="auth"
                                            onClick={() => dispatch(logout())}
                                        >
                                            LOGOUT{" "}
                                        </li>
                                    </Link>
                                </ul>
                            ) : (
                                <ul>
                                    {" "}
                                    <Link to="/" className="navlink">
                                        {" "}
                                        <li className="auth">ADD LOST ITEM </li>
                                    </Link>{" "}
                                    <Link to="/" className="navlink">
                                        {" "}
                                        <li className="auth">
                                            ADD FOUND ITEM{" "}
                                        </li>
                                    </Link>{" "}
                                    <Link to="/register" className="navlink">
                                        {" "}
                                        <li className="auth">REGISTER </li>
                                    </Link>
                                    <Link to="/login" className="navlink-log">
                                        {" "}
                                        <li className="auth login">LOGIN </li>
                                    </Link>
                                </ul>
                            )}
                        </ul>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
