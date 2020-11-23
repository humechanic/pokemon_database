import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";

const NAVIGATION_ELEMENTS = [
    { path: "/", name: "Главная" },
    { path: "/collection", name: "Коллекция" },
    { path: "/about", name: "О нас" },
];

const Navbar = () => {
    return (
        <div className={classes.navbarContainer}>
            <ul className={classes.navbar}>
                {NAVIGATION_ELEMENTS.map((item) => {
                    return (
                        <li className={classes.navbarLink}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
