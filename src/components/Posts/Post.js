import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Post extends React.Component {
    // console.log(111111, this.props)
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                {
                    props.post && <div>
                        <h1>{props.post.title}</h1>
                        <p>{props.post.author}</p>
                        <br />
                        <p>{props.post.content}</p>
                    </div>
                }

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

export default connect(mapStateToProps)(Post)

