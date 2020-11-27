import { isDataLoading, setPokemonData } from "./actions";
import axios from "axios";

export const requestPokemonDataThunk = (url = null, callbackFn = null) => async (dispatch, getState) => {
    dispatch(isDataLoading(true));
    try {
        const responseData = await axios
            .get(url)
            .then((response) => {
                // config // data // headers // request // status // statusText
                const { data } = response;
                return data;
            })
            .catch((err) => {
                dispatch(isDataLoading(false));
                console.log(err);
            });
        dispatch(callbackFn(responseData));
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
        pokemonResponse.push(axios.get(it.url));
    });
    Promise.all(pokemonResponse)
        .then((data) => {
            let dataBatch = []
            data.forEach((it) => {
                dataBatch.push(it.data)
            })
            dispatch(setPokemonData(dataBatch));
        }
        )
        .catch((err) => {
            dispatch(isDataLoading(false));
            console.log(err);
        })
    dispatch(isDataLoading(false));
    return;
}