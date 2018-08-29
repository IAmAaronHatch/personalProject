import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import Post from './Post'

import '../CSS/Posts.css'

import { openModal, closeModal, updateCurrentlyDisplayed } from '../../redux/reducers/posts'


class Posts extends React.Component {
    constructor () {
        super()

        this.state = {
            searchTerm: ''
        }
    }

    onInputChange = (e) => {
        let { value } = e.target

        let filter = this.props.posts.filter(post => {
            let sub = post.title.substring(0, value.length)
            if(sub === value){
                return post
            }
            
        })
        this.props.updateCurrentlyDisplayed(filter)
    }

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
                    <textarea type='text' placeholder='Search' onChange={this.onInputChange}/>
                </div>

                <div className='posts-container'>
                    {this.props.currentlyDisplayed.map(post => {
                        return (
                            <div key={post.id} className='posts-box'>
                                <h3 onClick={() => this.props.openModal(post.id)}>{post.title}</h3>
                                <img className='post-picture' src={post.picture} alt='post' />
                                <hr />
                                <p>author: {post.author}</p>
                                <Modal open={post.openModal} onClose={this.props.closeModal} center classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                                    <div>
                                        <Post post={post} close={this.props.closeModal} />
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
        currentlyDisplayed: state.posts.currentlyDisplayed,
        user: state.user.data
    }
}

export default connect(mapStateToProps, { openModal, closeModal, updateCurrentlyDisplayed })(Posts)


// create a button on each post that fires an sql method that can push that post to init state in redux and add it on the users table to display for later?