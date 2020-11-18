export const allPokemonDataSelector = ({ pokemonData }) => {
    return pokemonData.totalData.results;
};
export const allPokemonAmountSelector = ({ pokemonData }) => {
    return pokemonData.totalData.count;
};
