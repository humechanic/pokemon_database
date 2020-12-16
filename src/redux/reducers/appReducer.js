import { IS_DATA_LOADING, IS_EVERYTHING_LOADED, SET_CURRENT_PAGE, SET_DATA_FOR_PAGINATION } from "../actionTypes";

const initialState = {
    isLoading: false,
    isEverythingLoaded: false,
    pageSize: 20,
    currentPage: 1,
    next: null,
    prev: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_DATA_LOADING:
            const bool = action.payload;
            return { ...state, isLoading: bool };
        case SET_CURRENT_PAGE:
            const newCurrentPage = action.payload;
            return { ...state, currentPage: newCurrentPage };
        case SET_DATA_FOR_PAGINATION:
            const { prev, next } = action.payload;
            return { ...state, next, prev };
        case IS_EVERYTHING_LOADED:
            return { ...state, isEverythingLoaded: action.payload };
        default:
            return state;
    }
};
