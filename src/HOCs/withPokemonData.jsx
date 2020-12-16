import React from "react";
import { connect } from "react-redux";
import { ROOT_API } from "../constants/globalConstants";
import { requestPokemonDataThunk } from "../redux/thunks";

const WithPokemonData = (WrappedComponent) => {
    class WithPokemonDataHOC extends React.Component {
        componentDidMount() {
            const { dispatch, pokemons } = this.props;
            if (pokemons.length) {
                return;
            }
            dispatch(requestPokemonDataThunk(ROOT_API));
        }
        render() {
            return <WrappedComponent />;
        }
    }

    const mapStateToProps = (state) => ({
        pokemons: state.pokemonData.pokemons,
    });
    const mapDispatchToProps = (dispatch) => ({
        dispatch,
    });
    return connect(mapStateToProps, mapDispatchToProps)(WithPokemonDataHOC);
};

export default WithPokemonData;
