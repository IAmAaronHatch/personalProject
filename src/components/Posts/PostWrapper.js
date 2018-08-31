import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import Post from './Post'

import '../CSS/Posts.css'

import { openModal, closeModal, makeFavorite } from '../../redux/reducers/posts'




class PostWrapper extends React.Component {

    onOpenModal = (post) => {
        post.openModal = true
    }

    onCloseModal = (post) => {
        post.openModal = false
    }



    render() {
        return (
            <div className='posts-container'>
                {this.props.currentlyDisplayed.map(post => {
                    return (
                        <div key={post.id} className='posts-box'>
                            <div className='posts-box-top'>
                                <h3 onClick={() => this.props.openModal(post.id)}>{post.title}</h3>
                                {
                                    this.props.user ?
                                        <button onClick={() => this.props.makeFavorite(post.id, this.props.user.id)} className='star'>★</button>
                                        :
                                        null
                                }
                            </div>
                            <img className='post-picture' src={post.picture} alt='post' onClick={() => this.props.openModal(post.id)} />
                            <hr />
                            <p>Author/ {post.author}</p>
                            <Modal open={post.openModal} onClose={this.props.closeModal} center classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                                <div>
                                    <Post post={post} close={this.props.closeModal} />
                                </div>
                            </Modal>
                        </div>
                    )
                })}
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        posts: state.posts.data,
        // currentlyDisplayed: state.posts.currentlyDisplayed,
        user: state.user.data
    }
}

export default connect(mapStateToProps, { openModal, closeModal, makeFavorite })(PostWrapper)


// create a button on each post that fires an sql method that can push that post to init state in redux and add it on the users table to display for later?