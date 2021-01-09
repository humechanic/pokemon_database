import classes from "./pokemonList.module.scss";
import React, { useEffect, useRef } from "react";
import PokemonItem from "./PokemonItem";
import WithPokemonData from "../../HOCs/withPokemonData";
import { compose } from "redux";
import WithInfiniteScroll from "../../HOCs/withInfiniteScroll";
import { useSelector } from "react-redux";
import { pokemonPageData } from "../../redux/selectors";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

let PokemonList = ({ onScrollHandler }) => {
    const pokemonData = useSelector((state) => pokemonPageData(state));
    const refPokemonList = useRef(null);

    useEffect(() => {
        const refPokemonListElem = refPokemonList.current;
        if (!refPokemonListElem) {
            return;
        }
        refPokemonListElem.addEventListener("scroll", onScrollHandler);
        return () => refPokemonListElem.removeEventListener("scroll", onScrollHandler);
    });
    return (
        <>
            <Spinner />
            <div ref={refPokemonList} className={classes.pokemonList}>
                <div className={classes.wrapperPokemonItems}>
                    {pokemonData.map((it) => {
                        return (
                            <>
                                <Link key={it.id} to={`/collection/${it.id}`}>
                                    <PokemonItem data={it} />
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

PokemonList = compose(WithPokemonData, WithInfiniteScroll)(PokemonList);

export default PokemonList;
