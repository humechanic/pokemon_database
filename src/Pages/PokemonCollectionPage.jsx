import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import PokemonList from "../Components/PokemonList/PokemonList";
import classes from "./../sass/main.module.scss";

const PokemonCollectionPage = () => {
    return (
        <>
            <div className={classes.content}>
                <PokemonList />
            </div>
        </>
    );
};

export default PokemonCollectionPage;
