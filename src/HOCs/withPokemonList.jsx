import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestPokemonDataThunk } from "../redux/thunks";

const WithPokemonList = (Component, url = null) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestPokemonDataThunk(url));
    }, [url, dispatch]);
    return <Component />;
};

export default WithPokemonList;
