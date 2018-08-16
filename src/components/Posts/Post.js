import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updatePost } from '../../redux/reducers/posts'
import { deletePost } from '../../redux/reducers/posts'

class Post extends React.Component {
    // console.log(111111, this.props)
    constructor(props) {
        super(props)

        this.state = {
            updateOpen: false
        }
    }


    toggleUpdatePost = (e) => {
        this.setState ({
            updateOpen: !this.state.updateOpen
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.post && <div>
                        <h1>{this.props.post.title}</h1>
                        <button onClick={this.toggleUpdatePost}>✎</button>
                        {
                            this.state.updateOpen ?
                            <div>
                                <input />
                                <button>Update Title</button>
                            </div> :
                            null
                        }
                        
                        <br />
                        <p>{this.props.post.content}</p>
                        <button onClick={this.toggleUpdatePost}>✎</button>
                        {
                            this.state.updateOpen ?
                                <div>
                                    <textarea />
                                    <button>Update Content</button>
                                </div> :
                                null
                        }
                        <p>Written By: {this.props.post.author}</p>
                    </div>
                }
                <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>
            </div>
        )
    }
}


export default connect(null, { updatePost, deletePost })(Post)

