import React from "react";
import classes from "./../sass/main.module.scss";
import { connect, useDispatch } from "react-redux";
import { requestAllPokemonsThunk } from "../redux/thunks";
import PageCaption from "../Components/PageCaption/PageCaption";
import Navbar from "../Components/Navbar/Navbar";

const MainPage = ({ availablePokemons, count }) => {
    return (
        <>
            <div className={classes.content}>
                <PageCaption caption={"Welcome to the largest pokemons' database"} />
                <Navbar />
            </div>
        </>
    );
};

export default MainPage;
