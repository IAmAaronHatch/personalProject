import React, { Component } from 'react';
import { connect } from 'react-redux'

import './Message.css';

import Post from './MessagePost/MessagePost'
import Header from './MessageHeader/MessageHeader';
import Compose from './Compose/Compose';

import { getMessages } from '../../redux/reducers/message'

class Message extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         posts: []
    //     };
    // }

    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        console.log(1111, this.props)
        return (
            <div className="App__parent">
                <Header />

                <section className="App__content">

                    <Compose createPostFn={ this.createPost }/>

                    {
                        this.props.messages.map(message => {
                            return (
                                <Post message={message}/>
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