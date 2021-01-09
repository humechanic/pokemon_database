import classes from "./spinner.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { isDataLoadingSelector } from "../../redux/selectors";

const Spinner = () => {
    const isDataLoading = useSelector((state) => isDataLoadingSelector(state));
    return isDataLoading && <div className={classes.spinner} />;
};
export default Spinner;
