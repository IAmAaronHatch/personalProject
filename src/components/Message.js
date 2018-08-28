import React, { Component } from 'react'
import io from 'socket.io-client'
import { socketConnect } from 'socket.io-react'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
import ChatContainer from './chats/ChatContainer'

import './CSS/Message.css'

const socketUrl = 'http://localhost:4200/'
class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: null,
            user: null
        }
    }

    componentWillMount () {
        this.initSocket ()
    }

    // connect to and initialize the socket

    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected')
        })
        this.setState({socket})
    }

    // sets the user property in state
    // @ param user {id: number, name: string}

    setUser = (user) => {
        const { socket } = this.state 
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }

    // Sets the user property in state to null

    logout = () => {
        const { socket } = this.state 
        socket.emit(LOGOUT)
        this.setState({user:null})
    }

    render() {
        const { socket, user } = this.state
        return (
            <div className='message-main'>
                {
                    !user ?
                    <LoginForm socket={socket} setUser={this.setUser} />
                    :
                    <ChatContainer socket={socket} user={user} logout={this.logout}/>
                }
            </div>
        )
    }
}

//this.props.socket

export default socketConnect(Message)
