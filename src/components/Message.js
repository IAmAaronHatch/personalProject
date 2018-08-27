import React, { Component } from 'react'

import { socketConnect } from 'socket.io-react'

class Message extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                Message
            </div>
        )
    }
}

//this.props.socket

export default socketConnect(Message)
