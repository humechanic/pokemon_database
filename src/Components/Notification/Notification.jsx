import classes from "./notification.module.scss";
import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEverythingLoadedSelector } from "../../redux/selectors";
import { isEverythingLoaded } from "../../redux/actions";

let debounce;

const Notification = ({ text = "Something went wrong" }) => {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => isEverythingLoadedSelector(state));

    useEffect(() => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
            dispatch(isEverythingLoaded(false));
        }, 2000);
        return debounce;
    });

    return isLoaded && <div className={clsx(classes.notification)}>{text}</div>;
};

export default Notification;
