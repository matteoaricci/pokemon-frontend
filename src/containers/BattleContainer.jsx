import React, { Component } from 'react';
import BattleRoom from '../components/BattleRoom'

class BattleContainer extends Component {

    ws = new WebSocket('ws://localhost:3001/ws')

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }
    }

    render() {
        return (
            <div>
                <BattleRoom websocket={this.ws}/>
            </div>
        );
    }
}

export default BattleContainer;
