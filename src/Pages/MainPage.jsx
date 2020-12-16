import React from "react";
import classes from "./../sass/main.module.scss";
import PageCaption from "../Components/PageCaption/PageCaption";
import Navbar from "../Components/Navbar/Navbar";

const MainPage = ({ availablePokemons, count }) => {
    return (
        <>
            <div className={classes.content}>
                <Navbar />
                <PageCaption caption={"Welcome to the largest pokemons' database"} />
            </div>
        </>
    );
};

export default MainPage;
