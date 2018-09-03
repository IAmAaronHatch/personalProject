import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Message.css';

import MessagePost from './MessagePost/MessagePost'
import Compose from './Compose/Compose';

import { getMessages } from '../../redux/reducers/message'

class Message extends Component {
constructor(){
    super()
    this.state = {
        inputVal: ''
    }
}

    componentDidMount() {
       this.props.getMessages()
    }

    setInputVal = (value) => {
        value = '@' + value
        this.setState({
            inputVal: value 
        })
    }
    handleChange = (value) => {
        this.setState ({
            inputVal: value
        })
    }

    render() {
    // console.log(22222, this.props.messages);
        return (
            <div className="App__parent">

                <section className="App__content">

                    <Compose inputVal={this.state.inputVal}
                    handleChange={this.handleChange}/>

                    {
                        this.props.messages.map(message => {
                            return (
                                <MessagePost key={message.id} picture={message.picture} messager={message.messager} message={message} setInputVal={this.setInputVal}/>
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
        messages: state.message.messages,

    }
}

export default connect(mapStateToProps, { getMessages } )(Message);