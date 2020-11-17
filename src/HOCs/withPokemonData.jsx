import React from "react";

const withPokemonData = (Component, data) => {
    return <Component {...data} />;
};
