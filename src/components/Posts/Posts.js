import React from 'react'
import { connect } from 'react-redux'

import '../CSS/Posts.css'

import { openModal, closeModal, updateCurrentlyDisplayed, makeFavorite } from '../../redux/reducers/posts'
import PostWrapper from './PostWrapper';




class Posts extends React.Component {
    constructor() {
        super()

        this.state = {
            searchTerm: ''
        }
    }

    onInputChange = (e) => {
        let { value } = e.target

        let filter = this.props.posts.filter(post => {
            let sub = post.title.substring(0, value.length)
            if (sub === value) {
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
            <div className='post'>
                <div className='posts-main'>
                    <div >
                        <input type='text' className='search' placeholder='Search' onChange={this.onInputChange} />
                    </div>

                    <div className='posts-container'>
                        <PostWrapper currentlyDisplayed={this.props.currentlyDisplayed}/>
                    </div>
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


export default connect(mapStateToProps, { openModal, closeModal, makeFavorite, updateCurrentlyDisplayed })(Posts)


// create a button on each post that fires an sql method that can push that post to init state in redux and add it on the users table to display for later?
