import classes from "./notification.module.scss";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEverythingLoadedSelector } from "../../redux/selectors";
import { isEverythingLoaded } from "../../redux/actions";

let debounce;

const Notification = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => isEverythingLoadedSelector(state));

    useEffect(() => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            dispatch(isEverythingLoaded(false));
        }, 2000);
        return debounce;
    });

    return isLoaded && <div className={clsx(classes.notification)}>No more pokemons in database</div>;
};

export default Notification;
