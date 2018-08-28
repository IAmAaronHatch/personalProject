import React, { Component } from 'react'
import SideBar from './SideBar'
import { COMMUNITY_CHAT, MESSAGE_SENT, TYPING, MESSAGE_RECEIVED} from '../../Events'
import ChatHeading from './ChatHeading'
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'

class ChatContainer extends Component {
    constructor(props) {
        super(props)

        this.state={
            chats: [],
            activeChat:null
        }
    }

    componentDidMount() {
        const { socket } = this.props 
        socket.emit(COMMUNITY_CHAT, this.resetChat)
    }

    resetChat = (chat) => {
        return this.addChat(chat, true)
    }

    addChat = (chat, reset) => {
        const { socket } = this.props 
        const { chats } = this.state 

        const newChats = reset ? [ chat ] : [...chats, chat]
        this.setState({chats:newChats})

        const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`
        const typingEvent = `${TYPING}-${chat.id}`

        socket.on(typingEvent)
        socket.on(messageEvent, this.addMessageToChat(chat.id))
    }

    addMessageToChat = (chatId) => {
        return message => {
            const { chats } = this.state 
            let newChats = chats.map((chat) => {
                if(chat.id === chatId)
                    chat.messages.push(message)
                return chat
            })

            this.setState({chats:newChats})
        }
    }

    updateTypingInChat = (chatId) => {

    }


    sendMessage = (chatId, message) => {
        const { socket } = this.props 
        socket.emit(MESSAGE_SENT, {chatId, message})
    } 

    sendTyping = (chatId, isTyping) => {
        const { socket } = this.props 
        socket.emit(TYPING, {chatId, isTyping})
    }

    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }

    render() {
        const { user, logout } = this.props
        const { chats, activeChat } = this.state
        return (
            <div>
                <SideBar 
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={this.setActiveChat}
                />
                <div>
                    {
                        activeChat !== null ? (
                            <div>
                                <ChatHeading name={activeChat.name} />
                                <Messages 
                                    messages={activeChat.messages}
                                    user={user}
                                    typingUsers={activeChat.typingUsers} />
                                <MessageInput 
                                    sendMessage={
                                        (message)=> {
                                            this.sendMessage(activeChat.id, message)
                                        }
                                    }
                                    sendTyping={
                                        (isTyping)=> {
                                            this.sendTyping(activeChat.id, isTyping)
                                        }
                                    }
                                />
                            </div>
                        ) : 
                        <div>
                            <h3>Chose a chat</h3>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ChatContainer
