const initialState = [
    {
        totalData: { name: "pikachu", url: null },
        abilities: {},
        characteristics: {},
        genders: {},
        stats: {},
        types: {},
    },
];

export const pokemonCollection = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_POKEMONS":
            return action.count, action.results;
    }
};
