import React, { Component } from 'react';
import BattleRoom from '../components/BattleRoom'
import {Button} from 'react-bootstrap'
import ActionCable from 'actioncable'


class BattleContainer extends Component {

constructor() {
    super();
    this.state = {
        roomNumber: '',
        roomId: null
    }

}

componentDidMount() {
    const consumer = ActionCable.createConsumer(`ws://localhost:3000/cable`)
    this.subscription = consumer.subscriptions.create({channel: "RoomChannel", room: 1}, 
    { received: (data) => console.log(data)})
    }

    handleOnSubmit = () => {
       this.subscription.send({
           text: 'hello',
           id: 1
        })
    }

    handleOnChange = event => {
        this.setState({roomNumber: event.target.value})
    }

    render() {
        return (
            <div className="cont">
                {/* <input onChange={event => this.handleOnChange(event)} value={this.state.roomNumber} type='text'/> */}
                <Button onClick={this.handleOnSubmit} >send</Button>
            </div>
        );
    }
}

export default BattleContainer;
