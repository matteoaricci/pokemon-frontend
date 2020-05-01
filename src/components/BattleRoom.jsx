import React, { Component } from 'react';

class BattleRoom extends Component {
    sendMessage = () => {
        const {websocket} = this.props

        try {
            websocket.send('Hello Server!')
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default BattleRoom;
