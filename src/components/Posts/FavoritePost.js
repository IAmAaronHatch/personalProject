import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'

import { openModal, closeModal } from '../../redux/reducers/posts'
import PostWrapper from './PostWrapper';

class FavoritePost extends Component {


    render() {
        console.log(1111, this.props)
        return (
            <div>
                <PostWrapper currentlyDisplayed={this.props.favorites}/>
                {/* {this.props.favorites.map(favorite => {
                    return (
                        <div>
                        hello
                        </div>
                    )
                })} */}
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
