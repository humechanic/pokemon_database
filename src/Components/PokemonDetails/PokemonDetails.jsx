import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { ROOT_SPRITE } from "../../constants/globalConstants";
import { pokemonPageDataById } from "../../redux/selectors";
import { processPokemonId } from "../../utils/pokemonIdProcessor";
import Notification from "../Notification/Notification";
import classes from "./pokemonDetails.module.scss";
/*
abilities: Array(2)
0: {ability: {…}, is_hidden: false, slot: 1}
1: {ability: {…}, is_hidden: true, slot: 3}
length: 2
__proto__: Array(0)
base_experience: 64
forms: Array(1)
0: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-form/1/"}
length: 1
__proto__: Array(0)

height: 7
id: 1
is_default: true
location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters"
moves: Array(78)
0: {move: {…}, version_group_details: Array(2)}
1: {move: {…}, version_group_details: Array(13)}
2: {move: {…}, version_group_details: Array(16)}
3: {move: {…}, version_group_details: Array(2)}
4: {move: {…}, version_group_details: Array(19)}
5: {move: {…}, version_group_details: Array(3)}
6: {move: {…}, version_group_details: Array(18)}
7: {move: {…}, version_group_details: Array(5)}
8: {move: {…}, version_group_details: Array(11)}
9: {move: {…}, version_group_details: Array(14)}
10: {move: {…}, version_group_details: Array(18)}
11: {move: {…}, version_group_details: Array(12)}
12: {move: {…}, version_group_details: Array(2)}
13: {move: {…}, version_group_details: Array(17)}
14: {move: {…}, version_group_details: Array(18)}
15: {move: {…}, version_group_details: Array(18)}
16: {move: {…}, version_group_details: Array(27)}
17: {move: {…}, version_group_details: Array(18)}
18: {move: {…}, version_group_details: Array(18)}
19: {move: {…}, version_group_details: Array(14)}
20: {move: {…}, version_group_details: Array(1)}
21: {move: {…}, version_group_details: Array(18)}
22: {move: {…}, version_group_details: Array(2)}
23: {move: {…}, version_group_details: Array(5)}
24: {move: {…}, version_group_details: Array(18)}
25: {move: {…}, version_group_details: Array(3)}
26: {move: {…}, version_group_details: Array(14)}
27: {move: {…}, version_group_details: Array(2)}
28: {move: {…}, version_group_details: Array(2)}
29: {move: {…}, version_group_details: Array(7)}
30: {move: {…}, version_group_details: Array(14)}
31: {move: {…}, version_group_details: Array(9)}
32: {move: {…}, version_group_details: Array(14)}
33: {move: {…}, version_group_details: Array(18)}
34: {move: {…}, version_group_details: Array(14)}
35: {move: {…}, version_group_details: Array(7)}
36: {move: {…}, version_group_details: Array(14)}
37: {move: {…}, version_group_details: Array(16)}
38: {move: {…}, version_group_details: Array(14)}
39: {move: {…}, version_group_details: Array(5)}
40: {move: {…}, version_group_details: Array(18)}
41: {move: {…}, version_group_details: Array(12)}
42: {move: {…}, version_group_details: Array(13)}
43: {move: {…}, version_group_details: Array(13)}
44: {move: {…}, version_group_details: Array(5)}
45: {move: {…}, version_group_details: Array(16)}
46: {move: {…}, version_group_details: Array(11)}
47: {move: {…}, version_group_details: Array(16)}
48: {move: {…}, version_group_details: Array(16)}
49: {move: {…}, version_group_details: Array(14)}
50: {move: {…}, version_group_details: Array(18)}
51: {move: {…}, version_group_details: Array(20)}
52: {move: {…}, version_group_details: Array(16)}
53: {move: {…}, version_group_details: Array(16)}
54: {move: {…}, version_group_details: Array(12)}
55: {move: {…}, version_group_details: Array(14)}
56: {move: {…}, version_group_details: Array(13)}
57: {move: {…}, version_group_details: Array(9)}
58: {move: {…}, version_group_details: Array(4)}
59: {move: {…}, version_group_details: Array(9)}
60: {move: {…}, version_group_details: Array(12)}
61: {move: {…}, version_group_details: Array(8)}
62: {move: {…}, version_group_details: Array(12)}
63: {move: {…}, version_group_details: Array(3)}
64: {move: {…}, version_group_details: Array(12)}
65: {move: {…}, version_group_details: Array(13)}
66: {move: {…}, version_group_details: Array(9)}
67: {move: {…}, version_group_details: Array(9)}
68: {move: {…}, version_group_details: Array(7)}
69: {move: {…}, version_group_details: Array(3)}
70: {move: {…}, version_group_details: Array(9)}
71: {move: {…}, version_group_details: Array(6)}
72: {move: {…}, version_group_details: Array(6)}
73: {move: {…}, version_group_details: Array(6)}
74: {move: {…}, version_group_details: Array(6)}
75: {move: {…}, version_group_details: Array(2)}
76: {move: {…}, version_group_details: Array(4)}
77: {move: {…}, version_group_details: Array(4)}
length: 78
__proto__: Array(0)
name: "bulbasaur"
order: 1
species:
name: "bulbasaur"
url: "https://pokeapi.co/api/v2/pokemon-species/1/"
__proto__: Object

stats:
base_stat: 45
effort: 0
stat: {
name: "hp"}
1: {base_stat: 49, effort: 0, stat: {…}}
2: {base_stat: 49, effort: 0, stat: {…}}
3: {base_stat: 65, effort: 1, stat: {…}}
4: {base_stat: 65, effort: 0, stat: {…}}
5: {base_stat: 45, effort: 0, stat: {…}}
length: 6
__proto__: Array(0)
types > type[] > name 
weight: 69
*/

const PokemonDetails = ({ id = null }) => {
    const { abilities = [], height = "", weight = "", types = [], stats = [], base_experience = "", name = "", sprites = null } =
        useSelector((state) => pokemonPageDataById(state, id)) || {};

    if (!id) return <Notification text={"No data passed, try to refresh app"} />;

    const sprite = ROOT_SPRITE + `${id}.png` || sprites?.front_default || "/no-avatar.jpg";
    return (
        <div className={classes.pokemonDetailsContainer}>
            <header className={classes.pokemonDetailsHeader}>
                <span className={classes.pokemonName}>{name}</span>
                <span className={classes.pokemonNum}>{processPokemonId(id)}</span>
            </header>
            <main className={classes.pokemonGeneralInfo}>
                <img src={sprite} onError={(e) => (e.target.src = "/no-avatar.jpg")} alt={"no avatar"} />
                <div className={classes.pokemonStats}>
                    <span className={classes.pokemonStatsText}>Height: {height}</span>
                    <span className={classes.pokemonStatsText}>Weight: {weight}</span>
                    <span className={classes.pokemonStatsText}>Exp: {base_experience}</span>
                    <span className={classes.pokemonStatsText}>
                        Abilities:{" "}
                        {abilities.map((it) => {
                            return (
                                <span key={it.ability.name} className={classes.pokemonStatsAbilities}>
                                    {it.ability.name}
                                </span>
                            );
                        })}{" "}
                    </span>
                    <span className={classes.pokemonSpecifiedStats}>
                        Stats:
                        {stats.map((it) => {
                            return (
                                <span key={it.stat.name}>
                                    {it.stat.name}: {it.base_stat}
                                </span>
                            );
                        })}{" "}
                    </span>
                </div>
                <div className={classes.pokemonEvolution}></div>
                <div className={classes.pokemonMoves}></div>
            </main>
        </div>
    );
};
export default PokemonDetails;
