import React, { Component } from 'react'
import '../CSS/CreatePost.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createPost } from '../../redux/reducers/posts'

class CreatePost extends Component {
    constructor() {
        super()
        this.state={
            title: '',
            content: '',
        }
    }
    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className='newpost-main'>   
                <textarea cols='40' rows='2' placeholder='Title' onChange={this.handleTitle}/>
                <textarea cols='40' rows='20' placeholder='Content' onChange={this.handleContent}/>
                <Link to='/posts'><button onClick={() => this.props.createPost(this.state.title, this.state.content)}>Create Post</button></Link>

                <br/>
                <Link to='/posts'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default connect(null, {createPost})(CreatePost)
