import React from "react";
import classes from "./pageCaption.module.scss";

const PageCaption = ({ caption }) => {
    return (
        <>
            <div className={classes.pageCaption}>
                {/* {caption} */}
                <img src="/logo.png" alt="POKEMON" />
            </div>
        </>
    );
};

export default PageCaption;
