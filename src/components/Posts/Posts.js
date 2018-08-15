import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'
import Post from './Post'

import '../CSS/Posts.css'


class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state
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
                                    <h3 onClick={this.onOpenModal}>{post.title}</h3>
                                    <p>author: {post.author}</p>
                                <Modal open={open} onClose={this.onCloseModal} center classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                                    <div>
                                        <Post post={post} close={this.onCloseModal}/>
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

export default connect(mapStateToProps)(Posts)
