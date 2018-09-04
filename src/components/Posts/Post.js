import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateTitle } from '../../redux/reducers/posts'
import { updateContent } from '../../redux/reducers/posts'
import { deletePost } from '../../redux/reducers/posts'

import { getComments, createComment } from '../../redux/reducers/comments'

import ChatBubble from 'react-icons/lib/md/chat-bubble-outline'
import Delete from 'react-icons/lib/md/delete'
import Edit from 'react-icons/lib/md/edit'

import '../CSS/SinglePost.css'

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            updateOpen: false,
            title: '',
            content: '',
            comment: '',
            commentOpen: false
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

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        window.location.reload();
    }

    toggleUpdatePost = (e) => {
        this.setState({
            updateOpen: !this.state.updateOpen
        })
    }
    toggleComment = (e) => {
        this.setState({commentOpen: !this.state.commentOpen})
    }

    handleNewComment = () => {
        this.props.createComment(this.props.post.id, this.state.comment, this.props.user.id)
        this.setState({comment:''})
    }

    handleUpdateContent = () => {
        this.props.updateContent(this.state.content, this.props.post.id)
        window.location.reload();
    }
    handleUpdateTitle = () => {
        this.props.updateTitle(this.state.title, this.props.post.id)
        window.location.reload();
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
                        {
                            this.props.user.name === this.props.post.author ?
                            <div className='edit-container'>
                                    <Edit className='edit-btn' onClick={this.toggleUpdatePost} />
                                    {
                                        this.state.updateOpen ?
                                            <div className='edit'>
                                                <textarea cols='40' rows='1' onChange={this.handleTitle} />
                                                <button className='updatebtn' onClick={this.handleUpdateTitle}>Update Title</button>
                                                <Link to='/posts'><Delete onClick={this.handleClick} /></Link>
                                            </div> :
                                            null
                                    }
                            </div> : null
                        }
                    </div>
                </div>

                <div className='content-container'>
                    <div className='picture-container'>
                        <img className='singlePost-picture' src={this.props.post.picture} alt='' />
                    </div>
                    <p className='content'>{this.props.post.content}</p>
                    {
                        this.state.updateOpen ?
                            <div className='edit'>
                                <textarea id='updateContent' cols='100' rows='3' onChange={this.handleContent} />
                                <button className='updatebtn' onClick={this.handleUpdateContent}>Update Content</button>
                            </div> :
                            null
                    }
                </div>

                <div className='comment-container'>
                    <h3>Stitches:</h3>

                    {
                        this.props.user ?
                            <div className='commentsection'>
                                <ChatBubble onClick={this.toggleComment}/>
                                {
                                    this.state.commentOpen ? 
                                    <div>
                                        <textarea onChange={this.handleComment} placeholder='Comment' />
                                        <button onClick={this.handleNewComment}>Submit</button>
                                    </div>
                                    : null
                                }
                            </div> :
                            null
                    }

                    {this.props.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <h4>"{comment.comment}"</h4>
                                <p>Stitched by: {comment.commenter}</p>
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