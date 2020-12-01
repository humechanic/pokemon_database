import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPokemons } from "../redux/actions";
import { allPokemonDataSelector, pokemonPageData } from "../redux/selectors";
import { fetchPokemons, requestPokemonDataThunk } from "../redux/thunks";


const WithPokemonData = (Component) => {
    const dispatch = useDispatch();
    const availablePokemons = useSelector((state) => allPokemonDataSelector(state));
    const pokemonData = useSelector((state) => pokemonPageData(state));

    useEffect(() => {
        dispatch(requestPokemonDataThunk("https://pokeapi.co/api/v2/pokemon", setAllPokemons));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchPokemons(availablePokemons));
        }, [dispatch, availablePokemons]);

    return <Component pokemonData={pokemonData} />;
};

export default WithPokemonData;
