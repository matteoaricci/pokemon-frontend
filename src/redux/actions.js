
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

function clickedTeamPoke(pokemon) {
    return {
        type: "ADD_POKE_TO_TEAM",
        payload: pokemon
    }
}

export {fetchingPokemons, clickedTeamPoke}