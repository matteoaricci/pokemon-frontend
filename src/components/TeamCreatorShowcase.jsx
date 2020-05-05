import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class TeamCreatorShowcase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('user'),
            min: 0,
            max: 252,
            currentMoveset: [],
            step: 4,
                poke0: {},
                poke1: {},
                poke2: {},
                poke3: {},
                poke4: {},
                poke5: {}

        }
    }

    handleStatChange = event => {
        console.log(event.target['pokeId'])
        let keyForState = event.target.name
        this.setState({['poke' + this.props.index]: {...this.state['poke' + this.props.index], pokeId: this.props.pokemon.id, [keyForState]: event.target.value}
            })
    }

    
    handleSaveClick = () => {
       
        
        fetch('http://localhost:3000/user_teams', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                "Accept" : 'application/json'
            },
            body: JSON.stringify({user_id: this.state.userId})
        })
        .then(resp => resp.json())
        .then(userTeamId => this.fetchTeamMaker(userTeamId))
    }

    fetchTeamMaker = (userTeamId) => {
        let party = this.state
        let teamArray = [party.poke0, party.poke1, party.poke2, party.poke3, party.poke4, party.poke5]
        teamArray.map( poke => 
            fetch('http://localhost:3000/pokemon_teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify({
                    pokemon_id: parseInt(poke.pokeId),
                    user_team_id: parseInt(userTeamId),
                    hp_ev: parseInt(poke.evsliderHp),
                    attack_ev: parseInt(poke.evsliderAtk) ,
                    defense_ev: parseInt(poke.evsliderDef),
                    spattack_ev: parseInt(poke.evsliderSpAtk),
                    spdefense_ev: parseInt(poke.evsliderSpDef),
                    speed_ev: parseInt(poke.evsliderSpd),
                    hp_iv: parseInt(poke.HpDV),
                    attack_iv: parseInt(poke.AtkDV),
                    defense_iv: parseInt(poke.DefDV),
                    spattack_iv: parseInt(poke.SpAtkDV),
                    spdefense_iv: parseInt(poke.SpDefDV),
                    speed_iv: parseInt(poke.SpdDV),
                    move1_id: parseInt(poke.moveOne),
                    move2_id: parseInt(poke.moveTwo),
                    move3_id: parseInt(poke.moveThree),
                    move4_id: parseInt(poke.moveFour)
                })
            })

        )
    }

    
    render() {
        const {pokemon} = this.props
        const teamStateVal = this.state['poke' + this.props.index]

        return (
           
            <div>
            <Button onClick={this.handleSaveClick}>Save Team!</Button>
                species: {pokemon.name}  type(s): {pokemon.type1}
                <Form onChange={event => this.handleStatChange(event)}>
                    <select name="moveOne">
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name}</option>)}
                    </select>

                    <select name="moveTwo">
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name}</option>)}
                    </select>

                    <select name="moveThree">
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name}</option>)}
                    </select>

                    <select name="moveFour">
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name}</option>)}
                    </select>


                </Form>

                
                    <div className="EVslider">
                        <label htmlFor="evslider-hp">HP EV: {teamStateVal.evsliderHp}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderHp'} value={teamStateVal.evsliderHp} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-atk">ATTACK EV: {teamStateVal.evsliderAtk}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderAtk'} value={teamStateVal.evsliderAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-def">DEFENSE EV: {teamStateVal.evsliderDef}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderDef'} value={teamStateVal.evsliderDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-sp-atk">SPECIAL ATTACK EV: {teamStateVal.evsliderSpAtk}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpAtk'} value={teamStateVal.evsliderSpAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-sp-def">SPECIAL DEFENSE EV: {teamStateVal.evsliderSpDef}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpDef'} value={teamStateVal.evsliderSpDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-spd">SPEED EV: {teamStateVal.evsliderSpd}</label><br></br>
                        <input onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpd'} value={teamStateVal.evsliderSpd} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>


                        <div className="IVselector">
                            <label htmlFor="HpDV">HP DV: </label>
                            <input value={teamStateVal.HpDV} onChange={event => this.handleStatChange(event)} type="number" name="HpDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="AtkDV">ATK DV: </label>
                            <input value={teamStateVal.AtkDV} onChange={event => this.handleStatChange(event)} type="number" name="AtkDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="DefDV">DEF DV: </label>
                            <input value={teamStateVal.DefDV} onChange={event => this.handleStatChange(event)} type="number" name="DefDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="SpAtkDV">SP ATK DV: </label>
                            <input value={teamStateVal.SpAtkDV} onChange={event => this.handleStatChange(event)} type="number" name="SpAtkDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="SpDefDV">SP DEF DV: </label>
                            <input value={teamStateVal.SpDefDV} onChange={event => this.handleStatChange(event)} type="number" name="SpDefDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="SpdDV">SPD DV: </label>
                            <input value={teamStateVal.SpdDV} onChange={event => this.handleStatChange(event)} type="number" name="SpdDV" min='0'  max='15' step='1'/><br></br>
                        </div>
                    </div>

                    
            </div>
        );
    }
}

export default TeamCreatorShowcase;
