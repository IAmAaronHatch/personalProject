// App.js 

import React, { Component } from 'react';
import axios from 'axios'

import './Message.css';

import Post from './MessagePost/MessagePost'
import Header from './MessageHeader/MessageHeader';
import Compose from './Compose/Compose';

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        
    }

    updatePost = (id, text) => {
        axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text }).then(results => {
            this.setState({ posts: results.data });
        });
    }

    deletePost = (id) => {
        axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then(results => {
            this.setState({ posts: results.data });
        });
    }

    createPost = (text) => {
        axios.post('https://practiceapi.devmountain.com/api/posts', { text }).then(results => {
            this.setState({ posts: results.data });
        });
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="App__parent">
                <Header />

                <section className="App__content">

                    <Compose createPostFn={ this.createPost }/>

                    {
                        posts.map(post => (
                            <Post key = { post.id } 
                                text = { post.text }
                                date = { post.date }
                                id = { post.id }
                                updatePostFn = { this.updatePost }
                                deletePostFn = { this.deletePost }
                                />
                        ))
                    }

                </section>
            </div>
        );
    }
}

export default Message;