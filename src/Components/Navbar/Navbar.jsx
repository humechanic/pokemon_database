import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.scss";

const NAVIGATION_ELEMENTS = [
    { path: "/", name: "Главная" },
    { path: "/collection", name: "Коллекция" },
    { path: "/about", name: "О нас" },
];

const Navbar = () => {
    const navBarElement = useRef(null);
    // useEffect(() => {
    //     const shouldBeSticky = navBarElement.current.offsetTop;
    //     if (!navBarElement.current) return;
    //     const scrollCallBack = window.addEventListener("scroll", () => {
    //         if (window.pageYOffset > shouldBeSticky) {
    //             navBarElement.current.classList.add(classes.fixed);
    //         } else {
    //             navBarElement.current.classList.remove(classes.fixed);
    //         }
    //     });
    //     return () => {
    //         window.removeEventListener("scroll", scrollCallBack);
    //     };
    // }, []);
    return (
        <div ref={navBarElement} className={classes.navbarContainer}>
            <ul className={classes.navbar}>
                {NAVIGATION_ELEMENTS.map((item) => {
                    return (
                        <li key={item.name} className={classes.navbarLink}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
