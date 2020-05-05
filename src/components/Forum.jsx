import React, { Component } from 'react';
import ActionCable from 'actioncable'
import {Button} from 'react-bootstrap'

class Forum extends Component {
    constructor() {
        super();
        this.state = {
            currentMessage: '',
            chatHistory: []
        }
    }

    componentDidMount() {
        
        const consumer = ActionCable.createConsumer(`ws://localhost:3000/cable`)
        this.subscription = consumer.subscriptions.create({channel: "RoomChannel", room: 1}, 
        { received: (data) => this.setState({chatHistory: [...this.state.chatHistory, {text: data.text, trainer: data.t_name}]})})
        }
    
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.subscription.send({
            text: this.state.currentMessage,
            id: this.props.userId
        })
        this.setState({currentMessage: ''})
    }
    
    handleOnChange = event => {
        this.setState({currentMessage: event.target.value})
    }

    render() {
        return (
            <div className='forum'>
                <h2 className='forum-header'>Forum</h2>
                <div className="message-container" style={{whiteSpace: 'pre-line'}}>
                {this.state.chatHistory.map(chat => `${chat.trainer}:   ${chat.text}`).join('\n')}
                </div>
                <form className="message-creator" onSubmit={event => this.handleOnSubmit(event)}>
                    <textarea onChange={event => this.handleOnChange(event)} value={this.state.currentMessage} type="textarea"/><br></br>
                    <Button type='submit'>Send</Button>
                </form>
            </div>
        );
    }
}

export default Forum;
