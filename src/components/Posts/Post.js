import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updatePost } from '../../redux/reducers/posts'
import { deletePost } from '../../redux/reducers/posts'

import '../CSS/SinglePost.css'

class Post extends React.Component {
    // console.log(111111, this.props)
    constructor(props) {
        super(props)

        this.state = {
            updateOpen: false
        }
    }


    toggleUpdatePost = (e) => {
        this.setState({
            updateOpen: !this.state.updateOpen
        })
    }
    render() {
        return (
            <div>
                <div className='title-container'>
                    <div className='user-info'>
                        <img className='profile-pic' src={this.props.user.profile_pic} alt='profile-pic'/>
                        <p>Author/ {this.props.post.author}</p>
                        
                    </div>
                    <div className='title-info'>
                        <h1>{this.props.post.title}</h1>
                        <button onClick={this.toggleUpdatePost}>✎</button>
                        {
                            this.state.updateOpen ?
                                <div>
                                    <textarea />
                                    <button>Update Title</button>
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
                                <textarea />
                                <button>Update Content</button>
                            </div> :
                            null
                    }


                </div>
                <div className='comment-container'>
                    comments section
                </div>

                <Link to='/posts'><button onClick={() => this.props.deletePost(this.props.post.id)}>Delete Post</button></Link>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}


export default connect(mapStateToProps, { updatePost, deletePost })(Post)


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


