import React, { Component } from 'react'
// import FAChevronDown from 'react-icons/lib/md/keyboard-arrow-down'
// import FAMenu from 'react-icons/lib/fa/list-ul'
// import FASearch from 'react-icons/lib/fa/search'
// import MdEject from 'react-icons/lib/md/eject'

class SideBar extends Component {

    render() {
        const { chats, activeChat, user, setActiveChat, logout } = this.props
        return (
            <div>
                <div>
                    <div>Chatroom 1 </div>
                    <div>
                        {/* <FAMenu /> */}
                    </div>
                </div>

                <div>
                    {/* <i><FASearch/></i> */}
                    <input placeholder='Search' type='text'/>
                    <div></div>
                </div>

                <div ref='users' onClick={(e)=>{ (e.target === this.refs.user) && setActiveChat(null)}}>
                    {
                        chats.map((chat) => {
                            if(chat.name){
                                const lastMessage = chat.messages[chat.messages.length - 1];
                                const user = chat.users.find(({name}) => {
                                    return name !== this.props.name
                                }) || { name: 'Community'}
                                const classNames = (activeChat && activeChat.id === chat.id) ? 'active' : ''

                                return (
                                    <div
                                        key={chat.id}
                                        className={`user ${classNames}`}
                                        onClick={() => { setActiveChat(chat)}}
                                    >
                                        <div>{user.name[0].toUpperCase()}</div>
                                        <div>
                                            <div>{user.name}</div>
                                            {lastMessage && <div>{lastMessage.message}</div>}
                                        </div>
                                    </div>
                                )
                            }
                            return null
                        })
                    }
                </div>
                
                <div>
                    <span>{user.name}</span>
                    <button onClick={()=>{logout()}}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }
}

export default SideBar
