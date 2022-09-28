export const allPokemonDataSelector = ({ pokemonData }) => {
    return pokemonData.totalData.results;
};

export const getTotalAmountSelector = ({ pokemonData }) => {
    return pokemonData.totalData.count;
};

export const isDataLoadingSelector = ({ appReducer }) => {
    return appReducer.isLoading;
};

export const getPageSizeSelector = ({ appReducer }) => {
    return appReducer.pageSize;
};

export const getCurrentPageSelector = ({ appReducer }) => {
    return appReducer.currentPage;
};

export const pokemonPageData = ({ pokemonData }) => {
    return pokemonData.pokemons;
};

export const searchResultData = ({ pokemonData }) => {
    return pokemonData.searchResult;
};

export const pokemonPageDataById = ({ pokemonData }, id) => {
    return pokemonData.pokemons.find((it) => it.id === id);
};

export const nextPageUrlSelector = ({ appReducer }) => {
    return appReducer.next;
};

export const isEverythingLoadedSelector = ({ appReducer }) => {
    return appReducer.isEverythingLoaded;
};

export const getPokemonTypesSelector = ({ pokemonData }) => {
    return pokemonData.types;
};