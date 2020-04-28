import { combineReducers } from "redux";

    const initialState = {
        pokemons: [],
        teamCount: '',
        team: [
        ]
    }

    export default function pokemonsReducer(state = initialState, action) {
        switch(action.type) {
            case 'FETCHED_POKEMONS':
                return {
                    ...state,
                    pokemons: action.payload
                }

                case 'TEAM_POKE_CLICK' :
                    return {
                        ...state,
                        teamCount: state.team.count,
                        team: [
                            ...state.team, action.payload
                        ]
                    }

                default:
                    return state
        }
    }

