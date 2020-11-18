import { getAllPokemons, isDataLoading } from "./actions";
import axios from "axios";

export const requestAllPokemonsThunk = (url = null) => async (dispatch, getState) => {
    console.log("well");
    dispatch(isDataLoading(true));
    try {
        const { count, results } = await axios
            .get(url)
            .then((response) => {
                const {
                    data: { count, results },
                } = response;
                return { count, results };
            })
            .catch((err) => {
                dispatch(isDataLoading(false));
                alert(err);
            });
        dispatch(getAllPokemons(count, results));
    } catch (err) {
        console.log(err);
        dispatch(isDataLoading(false));
    }
};
