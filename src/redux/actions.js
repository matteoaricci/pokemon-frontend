
function fetchingPokemons() {
    return (dispatch) => {
        fetch('http://localhost:3000/pokemons')
        .then(resp => resp.json())
        .then(pokemons => dispatch(fetchedPokemons(pokemons)))
    }
}

function fetchedPokemons(pokemons) {
    return {
        type: "FETCHED_POKEMONS",
        payload: pokemons
    }
}

function fetchingPokemonMoves() {
    return (dispatch) => {
        fetch('http://localhost:3000/pokemons')
        .then(resp => resp.json())
        .then(movesets => dispatch(fetchedMovesets(movesets)))
    }
}

function fetchedMovesets(movesets) {
    return {
        type: 'FETCHED_MOVESETS',
        payload: movesets
    }
}


function clickedTeamPoke(pokemon) {
    return {
        type: "TEAM_POKE_CLICK",
        payload: pokemon
    }
}

export {fetchingPokemons, clickedTeamPoke, fetchingPokemonMoves}