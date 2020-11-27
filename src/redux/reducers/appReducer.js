import { IS_DATA_LOADING, SET_CURRENT_PAGE } from "../actionTypes";

const initialState = {
    isLoading: false,
    pageSize: 20,
    currentPage: 1,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_DATA_LOADING:
            const bool = action.payload;
            return { ...state, isLoading: bool };
        case SET_CURRENT_PAGE:
            const newCurrentPage = action.payload;
            return { ...state, currentPage: newCurrentPage };
        default:
            return state;
    }
};
