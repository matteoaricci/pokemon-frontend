import { combineReducers } from "redux";

    const initialState = {
        pokemons: [],
        team: [],
        movesets: [],
        moves: [],
        user: {}
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

            case 'FETCHED_MOVESETS' :
                return {
                    ...state,
                    movesets: [
                        ...state.team, action.payload
                    ]
                }

            case 'USER_LOGIN' :
                return {
                    ...state,
                    user: action.payload
                }

                default:
                    return state
        }
    }

