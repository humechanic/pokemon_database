import { ActionTypes } from "./actionTypes";

export const setPokemonBunch = (data) => {
    return {
        type: ActionTypes.GET_POKEMONS_COMPLETE,
        payload: data,
    };
};

export const getPokemonAbilities = (abilities) => {
    return {
        type: ActionTypes.GET_POKEMON_ABILITIES,
        payload: abilities,
    };
};
export const getPokemonCharachteristic = (charachteristic) => {
    return {
        type: ActionTypes.GET_POKEMON_CHARACTERISTICS,
        payload: charachteristic,
    };
};
export const getPokemonGender = (gender) => {
    return {
        type: ActionTypes.GET_POKEMON_CHARACTERISTICS,
        payload: gender,
    };
};
export const getPokemonStats = (stats) => {
    return {
        type: ActionTypes.GET_POKEMON_STATS,
        payload: stats,
    };
};
export const getPokemonTypes = (types) => {
    return {
        type: ActionTypes.GET_POKEMON_TYPES_COMPLETE,
        payload: types,
    };
};

export const setPokemonData = (data) => {
    return {
        type: ActionTypes.SET_POKEMON_DATA,
        payload: data,
    };
};

export const searchPokemon = (value: string) => {
    return {
        type: ActionTypes.SEARCH_POKEMON,
        payload: value,
    };
};
export const setPokemonDataByType = (value: string) => {
    return {
        type: ActionTypes.SET_POKEMON_DATA_BY_TYPE,
        payload: value,
    };
};
export const initPokemons = (data) => {
    return {
        type: ActionTypes.INIT_POKEMONS,
        payload: data,
    };
};
