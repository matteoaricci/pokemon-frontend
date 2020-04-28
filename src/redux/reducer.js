import { combineReducers } from "redux";




    const initialState = {
        pokemons: [],
        team: [],
        pokemonShowCase: {}
    }

    export default function pokemonsReducer(state = initialState, action) {
        switch(action.type) {
            case 'FETCHED_POKEMONS':
                return {
                    ...state,
                    pokemons: action.payload
                }

                case 'ADD_POKE_TO_TEAM' :
                    return {
                        ...state,
                        team: [...state.team, action.payload]
                    }

                    case 'SELECT_POKE_SHOWCASE' :
                        return {
                            ...state,
                            pokemonShowCase: action.payload
                        }

                default:
                    return state
        }
    }

