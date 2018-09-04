import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import Post from './Post'
import { ToastContainer, ToastStore } from 'react-toasts'
import MdBookmark from 'react-icons/lib/md/bookmark-outline'

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
        console.log(this.props.currentlyDisplayed)
        return (
            <div className='posts-container'>
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} lightBackground />
                {this.props.currentlyDisplayed.map(post => {
                    return (
                        <div key={post.id} className='posts-box'>
                            <div className='posts-box-top'>
                                <div className='posts-box-top-left'>
                                    <h3 onClick={() => this.props.openModal(post.id)}>{post.title}</h3>
                                </div>
                                <div className='posts-box-top-right'>
                                    {
                                        this.props.user ?
                                            <MdBookmark onClick={() => { this.props.makeFavorite(post.id, this.props.user.id); ToastStore.success('Added To Favorites!'); }} className='bookmark' />
                                            :
                                            null
                                    }
                                </div>
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