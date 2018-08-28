import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateTitle } from '../../redux/reducers/posts'
import { updateContent } from '../../redux/reducers/posts'
import { deletePost } from '../../redux/reducers/posts'

import { getComments, createComment } from '../../redux/reducers/comments'

import '../CSS/SinglePost.css'

class Post extends React.Component {
    // console.log(111111, this.props)
    constructor(props) {
        super(props)

        this.state = {
            updateOpen: false,
            title: '',
            content: '',
            comment: ''
        }
    }

    componentDidMount() {
        this.props.getComments(this.props.post.id)
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
    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }


    toggleUpdatePost = (e) => {
        this.setState({
            updateOpen: !this.state.updateOpen
        })
    }
    render() {
        return (
            <div className='post-main'>
                <div className='title-container'>
                    <div className='user-info'>
                        <p>Author/ {this.props.post.author}</p>

                    </div>
                    <div className='title-info'>
                        <h1>{this.props.post.title}</h1>
                        <button onClick={this.toggleUpdatePost}>✎</button>
                        {
                            this.state.updateOpen ?
                                <div>
                                    <textarea onChange={this.handleTitle} />
                                    <button onClick={() => this.props.updateTitle(this.state.title, this.props.post.id)}>Update Title</button>
                                    <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>
                                </div> :
                                null
                        }
                    </div>
                </div>

                <div className='content-container'>
                    <p>{this.props.post.content}</p>
                    {
                        this.state.updateOpen ?
                            <div>
                                <textarea onChange={this.handleContent} />
                                <button onClick={() => this.props.updateContent(this.state.content, this.props.post.id)}>Update Content</button>
                            </div> :
                            null
                    }
                </div>

                <div className='comment-container'>
                    <h3>Comments:</h3>
                    
                        {
                            this.props.user ?
                            <div>
                                <textarea onChange={this.handleComment} placeholder='Comment' />
                                <button onClick={() => this.props.createComment(this.state.comment)}>Submit</button>
                            </div> :
                            null
                        }
                    
                    {this.props.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <h4>"{comment.comment}"</h4>
                                <p>Commented by: {comment.commenter}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
        comments: state.comments.data
    }
}


export default connect(mapStateToProps, { updateTitle, updateContent, deletePost, getComments, createComment })(Post)