import React, { Component } from 'react'
import '../CSS/CreatePost.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createPost } from '../../redux/reducers/posts'

class CreatePost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            picture: 'https://d.ibtimes.co.uk/en/full/1471346/anonymous-rickrolldaesh-opparis-isis-opisis.jpg?w=736&e=423bff0a5a50b7e899b581a337f3fad9'
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
    handlePicture = (e) => {
        this.setState({
            picture: e.target.value
        })
    }

    handleClick = () => {
        window.location.reload();
        this.props.createPost(this.state.title, this.state.content, this.state.picture)
    }

    render() {
        return (
            <div className='newpost-main'>
                {
                    this.props.user ?
                        <div className='newpost-main'>
                            <textarea cols='40' rows='2' placeholder='Title' onChange={this.handleTitle} />
                            <textarea cols='40' rows='2' placeholder='Picture Link' onChange={this.handlePicture} />
                            <textarea cols='40' rows='20' placeholder='Content' onChange={this.handleContent} />
                            <Link to='/posts'><button onClick={this.handleClick}>Create Post</button></Link>
    
                            <br />
                            <Link to='/mypost'><button>Cancel</button></Link> 
                        </div>
                        :
                        <div>Please Log in to create post</div>

            }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
    }
}

export default connect(mapStateToProps, { createPost })(CreatePost)
