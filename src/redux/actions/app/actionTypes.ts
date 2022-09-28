export enum ActionTypes {
    IS_DATA_LOADING = "IS_DATA_LOADING",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_DATA_FOR_PAGINATION = "SET_DATA_FOR_PAGINATION",
    IS_EVERYTHING_LOADED = "IS_EVERYTHING_LOADED",
    NULL_NEXT_URL = "NULL_NEXT_URL",
}

//#region actions interfaces
interface IsDataLoading {
    type: ActionTypes.IS_DATA_LOADING;
    payload: boolean;
}
interface SetCurrentPage {
    type: ActionTypes.SET_CURRENT_PAGE;
    payload: number;
}
interface SetDataForPagination {
    type: ActionTypes.SET_DATA_FOR_PAGINATION;
    payload: any;
}
interface isEverythingLoaded {
    type: ActionTypes.IS_EVERYTHING_LOADED;
    payload: boolean;
}
interface NullNextUrl {
    type: ActionTypes.NULL_NEXT_URL;
    payload: string;
}
//#endregion actions interfaces

export interface AppReducer {
    isLoading: boolean;
    isEverythingLoaded: boolean;
    pageSize: number;
    currentPage: number;
    next: null | string;
    prev: null | string;
}
export type appAction =
    | IsDataLoading
    | SetCurrentPage
    | SetDataForPagination
    | isEverythingLoaded
    | NullNextUrl;
