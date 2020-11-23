import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";
import { allPokemonDataSelector, allPokemonAmountSelector } from "../redux/selectors";
import classes from "./../sass/main.module.scss";

const PokemonCollectionPage = () => {
    const availablePokemons = useSelector((state) => allPokemonDataSelector(state));
    const count = useSelector((state) => allPokemonAmountSelector(state));
    return (
        <>
            <div className={classes.content}>
                <Navbar />
                <div>Itogo: {count}</div>
                {availablePokemons?.map((it) => (
                    <div>{it.name}</div>
                ))}
            </div>
        </>
    );
};

export default PokemonCollectionPage;
