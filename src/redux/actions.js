import { GET_ALL_POKEMONS, GET_POKEMON_ABILITIES, GET_POKEMON_CHARACTERISTICS, GET_POKEMON_STATS, GET_POKEMON_TYPES } from "./actionTypes";

export const getAllPokemons = (count, results) => {
    return {
        type: GET_ALL_POKEMONS,
        payload: {
            count,
            results,
        },
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
