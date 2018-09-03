import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Message.css';

import MessagePost from './MessagePost/MessagePost'
import Compose from './Compose/Compose';

import { getMessages } from '../../redux/reducers/message'

class Message extends Component {


    componentDidMount() {
       this.props.getMessages()
    }

    render() {
    // console.log(22222, this.props.messages);
        return (
            <div className="App__parent">

                <section className="App__content">

                    <Compose />

                    {
                        this.props.messages.map(message => {
                            return (
                                <MessagePost key={message.id} message={message}/>
                            )
                        })
                    }

                </section>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        messages: state.message.messages
    }
}

export default connect(mapStateToProps, { getMessages } )(Message);