import {
    GET_ALL_POKEMONS,
    GET_POKEMON_ABILITIES,
    GET_POKEMON_CHARACTERISTICS,
    GET_POKEMON_GENDERS,
    GET_POKEMON_STATS,
    GET_POKEMON_TYPES,
} from "../actionTypes";

const initialState = {
    totalData: { count: null, results: [] },
    abilities: {},
    characteristics: {},
    genders: {},
    stats: {},
    types: {},
};

export const pokemonCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            const { count, results } = action.payload;
            return { ...state, totalData: { count, results } };
        case GET_POKEMON_ABILITIES:
            return action.payload;
        case GET_POKEMON_CHARACTERISTICS:
            return action.payload;
        case GET_POKEMON_GENDERS:
            return action.payload;
        case GET_POKEMON_STATS:
            return action.payload;
        case GET_POKEMON_TYPES:
            return action.payload;
        default:
            return state;
    }
};
