import classes from "./pokemonList.module.scss";
import React from "react";
import Pagination from "../Pagination/Pagination";
import PokemonItem from "./PokemonItem";
import WithPokemonList from "../../HOCs/withPokemonList";

const PokemonList = ({ pokemonData }) => {
    return (
        <>
            <div className={classes.pokemonList}>
                {pokemonData?.map((it) => {
                    return <PokemonItem data={it} key={it.name} />;
                })}
            </div>
            <Pagination />
        </>
    );
};

export default PokemonList;
