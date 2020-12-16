import "./App.css";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUs";
import PokemonCollectionPage from "./Pages/PokemonCollectionPage";

const App = () => {
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

export default App;
