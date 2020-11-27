import classes from "./pokemonItem.module.scss";
import React from "react";

// abilities: (2) [{…}, {…}]
// base_experience: 64
// forms: [{…}]
// game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height: 7
// held_items: []
// id: 1
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters"
// moves: (78) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "bulbasaur"
// order: 1
// species: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-species/1/"}
// sprites: {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", back_female: null, back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", back_shiny_female: null, front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", …}
// stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types: (2) [{…}, {…}]

const PokemonItem = ({ data }) => {
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
    const abilities = data?.abilities.map(it => it.ability.name)
    return (
        <>
            <div className={classes.pokemonItemWrapper}>
                <img src={sprite} alt="/" />
                <div className={classes.pokemonDescription}>
                    <div className={classes.pokemonItemName}>Name: {data.name}</div>
                    <div className={classes.pokemonItemElement}>Exp: {data.base_experience}</div>
                    <div className={classes.pokemonItemElement}>Height:{data.height}</div>
                    <div className={classes.pokemonItemElement}>Abilities: <span>{abilities.join(", ")}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonItem;
