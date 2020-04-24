import { createStore, applyMiddleware, compose } from "redux";
import pokemonReducer from './reducer'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    pokemonReducer,
   composeEnhancers(applyMiddleware(thunk))
);

export default store