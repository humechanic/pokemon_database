import * as axios from "axios";

export const requestAllPokemons = async () => {
    const {
        data: { results, count },
    } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    return { count, results };
};

export const requestPokemonsAbilities = () => {};

export const requestPokemonsCharacteristics = () => {};

export const requestPokemonsGenders = () => {};

export const requestPokemonsStats = () => {};

export const requestPokemonsTypes = () => {};
