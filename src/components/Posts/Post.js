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
        console.log(this.state.updateOpen)
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
                        <p>{this.props.post.author}</p>
                        <br />
                        <p>{this.props.post.content}</p>
                    </div>
                }
                <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>

                <Link to='/posts'><button>Back</button></Link>
            </div>
        )
    }
}

let mapStateToProps = (state, props) => {
    let { id } = props.match.params
    let post = state.posts.data.find(post => +post.id === +id)
    return { post }
}

export default connect(mapStateToProps, { updatePost, deletePost })(Post)

