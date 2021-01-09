import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../Components/PokemonDetails";
import classes from "./../sass/main.module.scss";

let PokemonPage = () => {
    const { id } = useParams();
    return (
        <div className={classes.content}>
            <PokemonDetails id={id} />
        </div>
    );
};

export default PokemonPage;
