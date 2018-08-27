import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class myPost extends Component {
    render() {
        return (
            <div className='mypost-main'>
                My Posts

                <div>
                    {
                        this.props.user ?
                            <div>
                                <Link to='/form'><button>Create a new post! ✎</button></Link>
                            </div> :
                            null
                    }
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(myPost)
