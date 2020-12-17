import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/appReducer";
import { pokemonCollectionReducer } from "./reducers/pokemonReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ pokemonData: pokemonCollectionReducer, appReducer: appReducer });

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
