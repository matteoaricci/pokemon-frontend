import React, { Component } from 'react'

export default class Moveset extends Component {


    componentDidMount() {
        fetch('http://localhost/pokemon/:id/moves')
        .then(resp => resp.json())
        .then(move => console.log(move))
    }
  render() {
    return (
      <div>
        This is the moveset

      </div>
    )
  }
}
