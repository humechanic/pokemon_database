import {
    SET_ALL_POKEMONS,
    GET_POKEMON_ABILITIES,
    GET_POKEMON_CHARACTERISTICS,
    GET_POKEMON_STATS,
    GET_POKEMON_TYPES,
    IS_DATA_LOADING,
    SET_CURRENT_PAGE,
    SET_POKEMON_DATA,
    SET_DATA_FOR_PAGINATION,
    IS_EVERYTHING_LOADED,
} from "./actionTypes";

export const setPokemonBunch = (data) => {
    return {
        type: SET_ALL_POKEMONS,
        payload: data,
    };
};

export const getPokemonAbilities = (abilities) => {
    return {
        type: GET_POKEMON_ABILITIES,
        payload: abilities,
    };
};
export const getPokemonCharachteristic = (charachteristic) => {
    return {
        type: GET_POKEMON_CHARACTERISTICS,
        payload: charachteristic,
    };
};
export const getPokemonGender = (gender) => {
    return {
        type: GET_POKEMON_CHARACTERISTICS,
        payload: gender,
    };
};
export const getPokemonStats = (stats) => {
    return {
        type: GET_POKEMON_STATS,
        payload: stats,
    };
};
export const getPokemonTypes = (types) => {
    return {
        type: GET_POKEMON_TYPES,
        payload: types,
    };
};
export const isDataLoading = (bool) => {
    return {
        type: IS_DATA_LOADING,
        payload: bool,
    };
};
export const isEverythingLoaded = (bool) => {
    return {
        type: IS_EVERYTHING_LOADED,
        payload: bool,
    };
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: currentPage,
    };
};
export const setPokemonData = (data) => {
    return {
        type: SET_POKEMON_DATA,
        payload: data,
    };
};
export const dataForPagination = (prev, next) => {
    return {
        type: SET_DATA_FOR_PAGINATION,
        payload: { prev, next },
    };
};
