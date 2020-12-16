import {
    SET_ALL_POKEMONS,
    GET_POKEMON_ABILITIES,
    GET_POKEMON_CHARACTERISTICS,
    GET_POKEMON_GENDERS,
    GET_POKEMON_STATS,
    GET_POKEMON_TYPES,
    SET_POKEMON_DATA,
} from "../actionTypes";

const initialState = {
    totalData: { count: null, results: [] },
    pokemons: [],
    abilities: {},
    characteristics: {},
    genders: {},
    stats: {},
    types: {},
};

export const pokemonCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_POKEMONS:
            const { count, results: responseResults } = action.payload;
            return { ...state, totalData: { count, results: [...state.totalData.results, ...responseResults] } };
        case GET_POKEMON_ABILITIES:
            return action.payload;
        case SET_POKEMON_DATA:
            return { ...state, pokemons: [...state.pokemons, ...action.payload] };
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
