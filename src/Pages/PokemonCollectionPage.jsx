import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PokemonList from "../Components/PokemonList/PokemonList";
import WithPokemonData from "../HOCs/withPokemonData";
import WithPokemonList from "../HOCs/withPokemonList";
import classes from "./../sass/main.module.scss";

const PokemonCollectionPage = () => {
    return (
        <>
            <div className={classes.content}>
                <Navbar />
                {WithPokemonData(PokemonList)}
            </div>
        </>
    );
};

export default PokemonCollectionPage;
