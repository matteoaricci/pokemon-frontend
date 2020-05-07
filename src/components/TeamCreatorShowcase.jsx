import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import '../Css-files/teamCreatorShow.css'
import {Redirect} from 'react-router-dom'

class TeamCreatorShowcase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem('user'),
            min: 0,
            max: 252,
            fetchResp: 0,
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
            // eslint-disable-next-line
        
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
            }).then(resp => resp.json())
            // eslint-disable-next-line
            .then(resp => this.setState({fetchResp: this.state.fetchResp += 1}))

        )
    }

    
    render() {
        const {pokemon} = this.props
        const teamStateVal = this.state['poke' + this.props.index]
        return (
        
            <div className='team-creator-showcase-container'>
                {this.state.fetchResp === 6 ? <Redirect to={'/home'} /> : null}
            <Button className='save-team-btn' onClick={this.handleSaveClick}>Save Team!</Button><br></br>
               <p className='pokemon-type-desc'>
                   TYPE: {pokemon.type2 !== 'null' ? `${pokemon.type2.toUpperCase()} / ${pokemon.type1.toUpperCase()}` : `${pokemon.type1.toUpperCase()}`}<br></br>
                </p>
                <Form className='move-form' onChange={event => this.handleStatChange(event)}>
                    <h5 className="move-header">MOVES</h5>
                    <select className='move' name="moveOne">
                        <option value="none" selected disabled hidden> 
                            Move One
                        </option> 
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name.toUpperCase()} | {move.move_type.toUpperCase()} | {move.damage_class.toUpperCase()}</option>)}
                    </select><br></br>

                    <select className='move'name="moveTwo">
                    <option value="none" selected disabled hidden> 
                            Move Two
                        </option>
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name.toUpperCase()} | {move.move_type.toUpperCase()} | {move.damage_class.toUpperCase()}</option>)}
                    </select><br></br>

                    <select className='move'name="moveThree">
                    <option value="none" selected disabled hidden> 
                            Move Three
                        </option>
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name.toUpperCase()} | {move.move_type.toUpperCase()} | {move.damage_class.toUpperCase()}</option>)}
                    </select><br></br>

                    <select className='move'name="moveFour">
                    <option value="none" selected disabled hidden> 
                            Move Four
                        </option>
                        {this.props.moveset.map(move =>
                            <option placeholder='Choose A Move' value={move.id}>{move.name.toUpperCase()} | {move.move_type.toUpperCase()} | {move.damage_class.toUpperCase()}</option>)}
                    </select>


                </Form>

                
                <div className="EVslider">
                    <div className='ev-form'>
                    <h5 className="ev-header">EV VALUES</h5>
                    <label className='ev-label' htmlFor="evslider-hp">HP : {teamStateVal.evsliderHp}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderHp'} value={teamStateVal.evsliderHp} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                    <label className='ev-label' htmlFor="evslider-atk">ATK: {teamStateVal.evsliderAtk}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderAtk'} value={teamStateVal.evsliderAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                    <label className='ev-label' htmlFor="evslider-def">DEF: {teamStateVal.evsliderDef}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderDef'} value={teamStateVal.evsliderDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                    <label className='ev-label' htmlFor="evslider-sp-atk">SPA: {teamStateVal.evsliderSpAtk}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpAtk'} value={teamStateVal.evsliderSpAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                    <label className='ev-label' htmlFor="evslider-sp-def">SPD: {teamStateVal.evsliderSpDef}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpDef'} value={teamStateVal.evsliderSpDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                    <label className='ev-label' htmlFor="evslider-spd">SPE: {teamStateVal.evsliderSpd}</label>
                    <input className='ev-input' onChange={(event) => this.handleStatChange(event)} type="range" name={'evsliderSpd'} value={teamStateVal.evsliderSpd} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>
                    </div>


                    <div className="IVselector">
                        <h5 className="dv-header">DV VALUES</h5>
                        <label className='dv-label' htmlFor="HpDV">HP : {teamStateVal.HpDV} </label>
                        <input className='dv-input' value={teamStateVal.HpDV} onChange={event => this.handleStatChange(event)} type="number" name="HpDV" min='0'  max='15' step='1'/>
<br></br>
                        <label className='dv-label' htmlFor="AtkDV">ATK: {teamStateVal.AtkDV}</label>
                        <input className='dv-input' value={teamStateVal.AtkDV} onChange={event => this.handleStatChange(event)} type="number" name="AtkDV" min='0'  max='15' step='1'/>
<br></br>
                        <label className='dv-label' htmlFor="DefDV">DEF: {teamStateVal.DefDV}</label>
                        <input className='dv-input' value={teamStateVal.DefDV} onChange={event => this.handleStatChange(event)} type="number" name="DefDV" min='0'  max='15' step='1'/>
<br></br>
                        <label className='dv-label' htmlFor="SpAtkDV">SPA: {teamStateVal.SpAtkDV}</label>
                        <input className='dv-input' value={teamStateVal.SpAtkDV} onChange={event => this.handleStatChange(event)} type="number" name="SpAtkDV" min='0'  max='15' step='1'/>
<br></br>
                        <label className='dv-label' htmlFor="SpDefDV">SPD: {teamStateVal.SpDefDV}</label>
                        <input className='dv-input' value={teamStateVal.SpDefDV} onChange={event => this.handleStatChange(event)} type="number" name="SpDefDV" min='0'  max='15' step='1'/>
<br></br>
                        <label className='dv-label' htmlFor="SpdDV">SPE: {teamStateVal.SpdDV}</label>
                        <input className='dv-input' value={teamStateVal.SpdDV} onChange={event => this.handleStatChange(event)} type="number" name="SpdDV" min='0'  max='15' step='1'/>
                    </div>
                </div>

                    
            </div>
        );
    }
}

export default TeamCreatorShowcase;
