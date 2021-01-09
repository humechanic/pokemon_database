import React from "react";
import PokemonList from "../Components/PokemonList/PokemonList";
import classes from "./../sass/main.module.scss";

let PokemonCollectionPage = () => {
    return (
        <div className={classes.content}>
            <PokemonList />
        </div>
    );
};

export default PokemonCollectionPage;
