
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

export {fetchingPokemons}