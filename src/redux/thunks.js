import { isDataLoading, setPokemonData, dataForPagination, setPokemonBunch } from "./actions";
import { requestMethod } from "../model/requestConstructor";
import { batch } from "react-redux";

export const requestPokemonDataThunk = (url = null) => (dispatch, getState) => {
    if (!url) return;
    dispatch(isDataLoading(true));
    try {
        requestMethod(url)
            .then((response) => {
                const { data } = response;
                batch(() => {
                    dispatch(setPokemonBunch(data));
                    dispatch(dataForPagination(data.previous, data.next));
                });
                return data;
            })
            .then((response) => {
                const { results } = response;
                dispatch(fetchPokemons(results));
            });
    } catch (err) {
        console.log(err);
        dispatch(isDataLoading(false));
    } finally {
        dispatch(isDataLoading(false));
    }
};

export const fetchPokemons = (pokemonsOnCurrentPage = []) => (dispatch, getState) => {
    dispatch(isDataLoading(true));
    let pokemonResponse = [];

    pokemonsOnCurrentPage.forEach((it) => {
        pokemonResponse.push(requestMethod(it.url));
    });

    Promise.allSettled(pokemonResponse)
        .then((data) => {
            let detailedPokemonData = [];
            data.forEach((it) => {
                if (it.status === "fulfilled") {
                    detailedPokemonData.push(it.value.data);
                } else {
                    detailedPokemonData.push(it.reason);
                }
            });

            dispatch(setPokemonData(detailedPokemonData));
        })
        .catch((err) => {
            dispatch(isDataLoading(false));
            console.log(err);
        });
    dispatch(isDataLoading(false));
    return;
};
