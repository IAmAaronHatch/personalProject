import React, { Component } from 'react'
import './CSS/Dashboard.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'
import { getPostsByPoints } from '../redux/reducers/posts'

class Dashboard extends Component {
    componentDidMount(){
        this.props.getPostsByPoints()
    }
    render() {
        return (
            <div className='dashboard-main'>  
                {
                    this.props.user ?
                        <Link to='/'><button onClick={this.props.logout}>Logout</button></Link> :
                        <Link to='/'><button>Login</button></Link>
                } 
                <div>
                    <h3>Check Out Our Popular Posts!</h3>

                </div>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data,
        posts: state.posts.data
    }
}

export default connect(mapStateToProps, { logout, getPostsByPoints })(Dashboard)
