import React, { Component } from 'react'
import { connect } from 'react-redux'

import { openModal, closeModal } from '../../redux/reducers/posts'
import PostWrapper from './PostWrapper';
import '../CSS/FavoritePost.css'
class FavoritePost extends Component {


    render() {
        console.log(1111, this.props)
        return (
            <div className='favorite-main'>
                <PostWrapper currentlyDisplayed={this.props.favorites}/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        favorites: state.posts.favorites,
        posts: state.posts.data
    }
}

export default connect(mapStateToProps, { openModal, closeModal })(FavoritePost)
