import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Posts(props) {
    return (
        <div>
            {props.posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <p>{post.author}</p>
                    </div>
                )
            })}
        </div>
    )
}

let mapStateToProps = state => {
    return {
        posts: state.posts.data
    }
}

export default connect(mapStateToProps)(Posts)
