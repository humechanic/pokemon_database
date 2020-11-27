import classes from "./spinner.module.scss";
import React from "react";
import clsx from "clsx";

const Spinner = () => {
    return (
        <>
            <div className={classes.spinner}>
                <div className={clsx(classes.innerSpinner, classes.spinnerOne)}></div>
                <div className={clsx(classes.innerSpinner, classes.spinnerTwo)}></div>
                <div className={clsx(classes.innerSpinner, classes.spinnerThree)}></div>
            </div>
        </>
    );
};
export default Spinner;
