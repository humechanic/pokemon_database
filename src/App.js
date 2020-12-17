import "./App.css";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUs";
import PokemonCollectionPage from "./Pages/PokemonCollectionPage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
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
        </Router>
    );
};

export default App;
