import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pokemonCollectionReducer } from "./reducers/pokemonReducer";

const reducers = combineReducers({ pokemonData: pokemonCollectionReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
