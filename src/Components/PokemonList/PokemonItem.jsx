import classes from "./pokemonItem.module.scss";
import React from "react";
import { ROOT_SPRITE } from "../../constants/globalConstants";

const PokemonItem = ({ data }) => {
    const sprite = ROOT_SPRITE + `${data.id}.png` || data?.sprites?.front_default || "/no-avatar.jpg";
    const abilities = data?.abilities.map((it) => it.ability.name);
    return (
        <>
            <div className={classes.pokemonItemWrapper}>
                <div className={classes.pokemonAvatarContainer}>
                    <img src={sprite} onError={(e) => (e.target.src = "/no-avatar.jpg")} alt={"no avatar"} />
                </div>
                <div className={classes.pokemonDescription}>
                    <div className={classes.pokemonItemName}>Name: {data.name}</div>
                    <div className={classes.pokemonItemElement}>Exp: {data.base_experience}</div>
                    <div className={classes.pokemonItemElement}>Height:{data.height}</div>
                    <div className={classes.pokemonItemElement}>
                        Abilities: <span>{abilities.join(", ")}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PokemonItem;
