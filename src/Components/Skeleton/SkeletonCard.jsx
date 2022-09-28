import React from "react";
import classes from "./skeletonCard.module.scss";

const SkeletonCard = () => {
    return (
        null && (
            <div className={classes.skeletonStyle}>
                <div className={classes.image}></div>
                <div className={classes[`textLine-10`]}></div>
                <div className={classes[`textLine-10`]}></div>
                <div className={classes[`textLine-30`]}></div>
                <div className={classes[`textLine-20`]}></div>
            </div>
        )
    );
};

export default SkeletonCard;
