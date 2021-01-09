import classes from "./pokemonItem.module.scss";
import React from "react";
import { ROOT_SPRITE } from "../../constants/globalConstants";

const PokemonItem = ({ data }) => {
    const { name, base_experience, height, abilities } = data;
    const sprite = ROOT_SPRITE + `${data.id}.png` || data?.sprites?.front_default || "/no-avatar.jpg";
    const pokemonNameWithCapitalLetter = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className={classes.pokemonItemWrapper}>
            <div className={classes.pokemonAvatarContainer}>
                <img src={sprite} onError={(e) => (e.target.src = "/no-avatar.jpg")} alt={"no avatar"} />
            </div>
            <div className={classes.pokemonDescription}>
                <div className={classes.pokemonItemName}>{pokemonNameWithCapitalLetter}</div>
                <div className={classes.pokemonItemElement}>Exp: {base_experience}</div>
                <div className={classes.pokemonItemElement}>Height:{height}</div>
                <div className={classes.pokemonItemElement}>
                    Abilities:{" "}
                    {abilities.map((it) => {
                        return (
                            <span key={it.ability.name} className={classes.pokemonAbilities}>
                                {it.ability.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonItem;
