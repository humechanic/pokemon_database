import * as axios from "axios";

export const requestMethod = async (url, ...params) => {
    return await axios.get(url, ...params);
};

export const requestPokemonsAbilities = () => {};

export const requestPokemonsCharacteristics = () => {};

export const requestPokemonsGenders = () => {};

export const requestPokemonsStats = () => {};

export const requestPokemonsTypes = () => {};
