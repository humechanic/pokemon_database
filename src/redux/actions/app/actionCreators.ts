import { ActionTypes } from "./actionTypes";

export const isDataLoading = (bool) => {
    return {
        type: ActionTypes.IS_DATA_LOADING,
        payload: bool,
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: ActionTypes.SET_CURRENT_PAGE,
        payload: currentPage,
    };
};

export const dataForPagination = (prev, next) => {
    return {
        type: ActionTypes.SET_DATA_FOR_PAGINATION,
        payload: { prev, next },
    };
};

export const isEverythingLoaded = (bool) => {
    return {
        type: ActionTypes.IS_EVERYTHING_LOADED,
        payload: bool,
    };
};

export const nullNextUrl = (bool) => {
    return {
        type: ActionTypes.NULL_NEXT_URL,
        payload: bool,
    };
};
