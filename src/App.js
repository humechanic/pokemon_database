import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Pages/MainPage";
import { connect, useDispatch, useSelector } from "react-redux";
import { requestAllPokemonsThunk } from "./redux/thunks";
import { useEffect, useState } from "react";
import { allPokemonAmountSelector, allPokemonDataSelector } from "./redux/selectors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUs";
import PokemonCollectionPage from "./Pages/PokemonCollectionPage";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestAllPokemonsThunk("https://pokeapi.co/api/v2/pokemon"));
    }, []);

    return (
        <Router>
            <div className="root">
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/collection">
                        <PokemonCollectionPage />
                    </Route>
                    <Route exact path="/about">
                        <AboutUsPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

const mapDispatchToProps = (dispatch) => ({
    initialRequest() {
        dispatch(requestAllPokemonsThunk("https://pokeapi.co/api/v2/pokemon"));
    },
});

export default connect(null, mapDispatchToProps)(App);
