import React from "react";
import { connect } from "react-redux";
import Notification from "../Components/Notification/Notification";
import { isEverythingLoaded } from "../redux/actions";
import { requestPokemonDataThunk } from "../redux/thunks";

let debounce;

const WithInfiniteScroll = (Component) => {
    // const Component = React.lazy(() => import(`./${wrappedComponent}`));
    class WithInfiniteScrollHOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isFetching: false,
            };
        }

        handleScroll = () => {
            clearTimeout(debounce);
            const { count, pokemons, nextPageUrl, dispatch, isLoaded } = this.props;
            const { isFetching } = this.state;
            if (isFetching) return;

            debounce = setTimeout(() => {
                const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;
                const scrollHeight = document.documentElement?.scrollHeight || document.body.scrollHeight;

                const closeToTheBottom = scrollTop + window.innerHeight >= scrollHeight - 50;

                if (pokemons.length >= count) {
                    this.setState({
                        isFetching: false,
                    });
                    if (closeToTheBottom && !isLoaded) {
                        dispatch(isEverythingLoaded(true));
                    }
                    return;
                }

                if (closeToTheBottom && nextPageUrl) {
                    this.setState({
                        isFetching: true,
                    });
                }
            }, 50);
        };

        componentDidUpdate() {
            const { isFetching } = this.state;
            const { dispatch, nextPageUrl } = this.props;
            if (isFetching && nextPageUrl) {
                this.setState({
                    isFetching: false,
                });
                dispatch(requestPokemonDataThunk(nextPageUrl));
            }
        }

        componentDidMount() {
            window.addEventListener("scroll", this.handleScroll);
        }

        componentWillUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        }

        render() {
            return (
                <>
                    <Component />
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
