import { appAction, ActionTypes, AppReducer } from "../actions/app/actionTypes";

const initialState: AppReducer = {
    isLoading: false,
    isEverythingLoaded: false,
    pageSize: 20,
    currentPage: 1,
    next: null,
    prev: null,
};

export const appReducer = (
    state = initialState,
    action: appAction
): AppReducer => {
    switch (action.type) {
        case ActionTypes.IS_DATA_LOADING:
            return { ...state, isLoading: action.payload };
        case ActionTypes.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        case ActionTypes.SET_DATA_FOR_PAGINATION:
            const { prev, next } = action.payload;
            return { ...state, next, prev };
        case ActionTypes.IS_EVERYTHING_LOADED:
            return { ...state, isEverythingLoaded: action.payload };
        case ActionTypes.NULL_NEXT_URL:
            return { ...state, next: action.payload };
        default:
            return state;
    }
};
