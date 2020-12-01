import classes from "./pagination.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageSizeSelector, getTotalAmountSelector, getCurrentPageSelector } from "../../redux/selectors";
import clsx from "clsx";
import { setCurrentPage } from "../../redux/actions";

const Pagination = () => {
    const dispatch = useDispatch();
    const pokemonAmount = useSelector((state) => getTotalAmountSelector(state));
    const pageSize = useSelector((state) => getPageSizeSelector(state));
    const currentPage = useSelector((state) => getCurrentPageSelector(state));
    const pagesAmount = Math.ceil(pokemonAmount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    const onPageNumberClick = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    return (
        <>
            <div className={classes.pagination}>
                {pages.map((it) => {
                    return (
                        <div
                            onClick={() => {
                                onPageNumberClick(it);
                            }}
                            className={clsx(currentPage === it && classes.selectedPage, classes.paginationInteger)}
                        >
                            {it}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Pagination;
