import { combineReducers } from "redux";




    const initialState = {
        pokemons: []
    }

    export default function pokemonsReducer(state = initialState, action) {
        switch(action.type) {
            case 'FETCHED_POKEMONS':
                return {
                    ...state,
                    pokemons: action.payload
                }

                default:
                    return state
        }
    }

