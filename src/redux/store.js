import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducers/appReducer";
import { pokemonCollectionReducer } from "./reducers/pokemonReducer";

const reducers = combineReducers({ pokemonData: pokemonCollectionReducer, appReducer: appReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
