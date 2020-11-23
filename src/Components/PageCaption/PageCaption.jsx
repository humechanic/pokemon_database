import React from "react";
import classes from "./pageCaption.module.scss";

const PageCaption = ({ caption }) => {
    return (
        <>
            <div className={classes.pageCaption}>{caption}</div>
        </>
    );
};

export default PageCaption;
