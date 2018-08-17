import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateTitle } from '../../redux/reducers/posts'
import { updateContent } from '../../redux/reducers/posts'
import { deletePost } from '../../redux/reducers/posts'

import { getComments } from '../../redux/reducers/comments'

import '../CSS/SinglePost.css'

class Post extends React.Component {
    // console.log(111111, this.props)
    constructor(props) {
        super(props)

        this.state = {
            updateOpen: false,
            title: '',
            content: ''
        }
    }

    componentDidMount() {
        this.props.getComments(this.props.post.id)
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    toggleUpdatePost = (e) => {
        this.setState({
            updateOpen: !this.state.updateOpen
        })
    }
    render() {
        return (
            <div className='post-main'>
                <div className='title-container'>
                    <div className='user-info'>
                        <p>Author/ {this.props.post.author}</p>

                    </div>
                    <div className='title-info'>
                        <h1>{this.props.post.title}</h1>
                        <button onClick={this.toggleUpdatePost}>✎</button>
                        {
                            this.state.updateOpen ?
                                <div>
                                    <textarea onChange={this.handleTitle} />
                                    <button onClick={() => this.props.updateTitle(this.props.post.id)}>Update Title</button>
                                    <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>
                                </div> :
                                null
                        }
                    </div>
                </div>

                <div className='content-container'>
                    <p>{this.props.post.content}</p>
                    {
                        this.state.updateOpen ?
                            <div>
                                <textarea onChange={this.handleContent} />
                                <button onClick={() => this.props.updateContent(this.props.post.id)}>Update Content</button>
                            </div> :
                            null
                    }
                </div>

                <div className='comment-container'>
                    <h3>Comments:</h3>
                    {this.props.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <h4>"{comment.comment}"</h4>
                                <p>Commented by: {comment.commenter}</p>
                            </div>
                        )
                    })}

                    <input placeholder='Comment'/>
                    <input type='submit' hidden/>
                </div>

            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
        comments: state.comments.data
    }
}


export default connect(mapStateToProps, { updateTitle, updateContent, deletePost, getComments })(Post)


// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// import { updatePost } from '../../redux/reducers/posts'
// import { deletePost } from '../../redux/reducers/posts'

// import '../CSS/SinglePost.css'

// class Post extends React.Component {
//     // console.log(111111, this.props)
//     constructor(props) {
//         super(props)

//         this.state = {
//             updateOpen: false
//         }
//     }


//     toggleUpdatePost = (e) => {
//         this.setState ({
//             updateOpen: !this.state.updateOpen
//         })
//     }
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.post && <div>
//                         <h1>{this.props.post.title}</h1>
//                         <button onClick={this.toggleUpdatePost}>✎</button>
//                         {
//                             this.state.updateOpen ?
//                             <div>
//                                 <input />
//                                 <button>Update Title</button>
//                             </div> :
//                             null
//                         }
//                         <p>Written By: {this.props.post.author}</p>

//                         <p>{this.props.post.content}</p>
//                         <button onClick={this.toggleUpdatePost}>✎</button>
//                         {
//                             this.state.updateOpen ?
//                                 <div>
//                                     <textarea />
//                                     <button>Update Content</button>
//                                 </div> :
//                                 null
//                         }

//                     </div>
//                 }
//                 <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>
//             </div>
//         )
//     }
// }


// export default connect(null, { updatePost, deletePost })(Post)


