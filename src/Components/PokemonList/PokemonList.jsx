import classes from "./pokemonList.module.scss";
import React from "react";
import PokemonItem from "./PokemonItem";
import WithPokemonData from "../../HOCs/withPokemonData";
import { compose } from "redux";
import WithInfiniteScroll from "../../HOCs/withInfiniteScroll";
import { useSelector } from "react-redux";
import { isDataLoadingSelector, pokemonPageData } from "../../redux/selectors";
import Spinner from "../Spinner/Spinner";

let PokemonList = () => {
    const pokemonData = useSelector((state) => pokemonPageData(state));
    const isDataLoading = useSelector((state) => isDataLoadingSelector(state));
    return (
        <>
            {isDataLoading ? (
                <Spinner />
            ) : (
                <div className={classes.pokemonList}>
                    <div className={classes.wrapperPokemonList}>
                        {pokemonData.map((it) => {
                            return <PokemonItem data={it} key={it.id} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

PokemonList = compose(WithPokemonData, WithInfiniteScroll)(PokemonList);

export default PokemonList;
