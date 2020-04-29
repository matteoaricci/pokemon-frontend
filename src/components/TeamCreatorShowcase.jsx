import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class TeamCreatorShowcase extends Component {

    constructor() {
        super();
        this.state = {
            min: 0,
            max: 252,
            step: 4,
                poke0: {},
                poke1: {},
                poke2: {},
                poke3: {},
                poke4: {},
                poke5: {}

        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/pokemon/${this.props.pokemon.id}/moves`)
        .then(resp => resp.json())
        
    }

    handleStatChange = event => {
        let keyForState = event.target.name
        this.setState({['poke' + this.props.index]: {...this.state['poke' + this.props.index], [keyForState]: event.target.value}
            })
    }
    
    render() {
        const {pokemon} = this.props
        const {slider} = this.state
        const teamStateVal = this.state['poke' + this.props.index]
        return (
            <div>
                species: {pokemon.name}  type(s): {pokemon.type1}

                <Form>
                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move One"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Two"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Three"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text'  placeholder="Move Four"/>
                    </Form.Group>


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
                            <label htmlFor="hpDV">HP DV: </label>
                            <input value={teamStateVal.hpDV} onChange={event => this.handleStatChange(event)} type="number" name="hpDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="hpDV">ATK DV: </label>
                            <input value={teamStateVal.AtkDV} onChange={event => this.handleStatChange(event)} type="number" name="AtkDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="hpDV">DEF DV: </label>
                            <input value={teamStateVal.DefDV} onChange={event => this.handleStatChange(event)} type="number" name="DefDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="hpDV">SP ATK DV: </label>
                            <input value={teamStateVal.SpAtkDV} onChange={event => this.handleStatChange(event)} type="number" name="SpAtkDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="hpDV">SP DEF DV: </label>
                            <input value={teamStateVal.SpDefDV} onChange={event => this.handleStatChange(event)} type="number" name="SpDefDV" min='0'  max='15' step='1'/><br></br>

                            <label htmlFor="hpDV">SPD DV: </label>
                            <input value={teamStateVal.SpdDV} onChange={event => this.handleStatChange(event)} type="number" name="SpdDV" min='0'  max='15' step='1'/><br></br>
                        </div>
                    </div>

                    
            </div>
        );
    }
}

export default TeamCreatorShowcase;
