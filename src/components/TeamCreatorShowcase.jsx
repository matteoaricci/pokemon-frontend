import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider'
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

    handleEvChange = event => {
        let keyForState = event.target.name
        this.setState({['poke' + this.props.index]: {...this.state['poke' + this.props.index], [keyForState]: event.target.value}
            })
    }
    
    render() {
        const {pokemon} = this.props
        const {slider} = this.state
        const RangeValue = this.state['poke' + this.props.index]
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
                        <label htmlFor="evslider-hp">HP EV: {RangeValue.evsliderHp}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderHp'} value={RangeValue.evsliderHp} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-atk">ATTACK EV: {RangeValue.evsliderAtk}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderAtk'} value={RangeValue.evsliderAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-def">DEFENSE EV: {RangeValue.evsliderDef}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderDef'} value={RangeValue.evsliderDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-sp-atk">SPECIAL ATTACK EV: {RangeValue.evsliderSpAtk}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderSpAtk'} value={RangeValue.evsliderSpAtk} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-sp-def">SPECIAL DEFENSE EV: {RangeValue.evsliderSpDef}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderSpDef'} value={RangeValue.evsliderSpDef} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>

                        <label htmlFor="evslider-spd">SPEED EV: {RangeValue.evsliderSpd}</label><br></br>
                        <input onChange={(event) => this.handleEvChange(event)} type="range" name={'evsliderSpd'} value={RangeValue.evsliderSpd} min={this.state.min} max={this.state.max} step={this.state.step}/><br></br>


                    </div>
            </div>
        );
    }
}

export default TeamCreatorShowcase;
