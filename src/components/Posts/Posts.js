import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import Post from './Post'

import '../CSS/Posts.css'

import { openModal, closeModal } from '../../redux/reducers/posts'


class Posts extends React.Component {

    onOpenModal = (post) => {
        post.openModal = true
    }

    onCloseModal = (post) => {
        post.openModal = false
    }

    render() {
        return (
            <div className='posts-main'>
                <div>
                    {
                        this.props.user ?
                            <div>
                                <Link to='/form'><button>Create a new post! ✎</button></Link>
                            </div> :
                            null
                    }
                </div>
                <div className='posts-container'>
                    {this.props.posts.map(post => {
                        return (
                            <div key={post.id} className='posts-box'>
                                    <h3 onClick={() => this.props.openModal(post.id)}>{post.title}</h3>
                                    <hr/>
                                    <p>author: {post.author}</p>
                                <Modal open={post.openModal} onClose={this.props.closeModal} center classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                                    <div>
                                        <Post post={post} close={this.props.closeModal}/>
                                    </div>
                                </Modal>
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
        posts: state.posts.data,
        user: state.user.data
    }
}

export default connect(mapStateToProps, {openModal, closeModal})(Posts)
