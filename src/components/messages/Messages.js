import React, { Component } from 'react'


class Messages extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        const { messages, user, typingUsers } = this.props
        return (
            <div>
                <div>
                    {
                        messages.map((mes) => {
                            return (
                                <div
                                    key={mes.id}
                                    className={`message-container ${mes.sender === user.name && 'right'}`}
                                >
                                    <div>{mes.time}</div>
                                    <div>
                                        <div>{mes.message}</div>
                                        <div>{mes.sender}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        typingUsers.map((name) => {
                            return (
                            <div key={name}>
                                {`${name} is typing . . .`}
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default Messages
