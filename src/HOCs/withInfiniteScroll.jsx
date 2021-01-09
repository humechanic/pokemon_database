import React from "react";
import { connect } from "react-redux";
import Notification from "../Components/Notification/Notification";
import { isEverythingLoaded } from "../redux/actions";
import { requestPokemonDataThunk } from "../redux/thunks";

let debounce;
let started = false;

const WithInfiniteScroll = (Component) => {
    class WithInfiniteScrollHOC extends React.Component {
        //TO DO:
        //optimize scroll to avoid scroll lagging
        //while scrolling too fast

        handleScroll = (event) => {
            const { target } = event;
            if (!started) {
                started = true;
                return;
            }
            started = false;

            clearTimeout(debounce);
            const { count, pokemons, nextPageUrl, dispatch, isLoaded } = this.props;

            debounce = setTimeout(() => {
                const scrollTop = target.scrollTop || document.body.scrollTop;
                const scrollHeight = target.scrollHeight || document.body.scrollHeight;

                const closeToTheBottom = scrollTop + window.innerHeight >= scrollHeight - 50;

                if (pokemons.length >= count) {
                    if (closeToTheBottom && !isLoaded) {
                        dispatch(isEverythingLoaded(true));
                    }
                    return;
                }

                if (closeToTheBottom && nextPageUrl) {
                    dispatch(requestPokemonDataThunk(nextPageUrl));
                }
            }, 50);
        };

        render() {
            return (
                <>
                    <Component key={1} onScrollHandler={this.handleScroll} />
                    <Notification />
                </>
            );
        }
    }
    const mapStateToProps = (state) => ({
        nextPageUrl: state.appReducer.next,
        isLoaded: state.appReducer.isEverythingLoaded,
        count: state.pokemonData.totalData.count,
        pokemons: state.pokemonData.pokemons,
    });

    const mapDispatchToProps = (dispatch) => ({
        dispatch,
    });
    return connect(mapStateToProps, mapDispatchToProps)(WithInfiniteScrollHOC);
};

export default WithInfiniteScroll;
