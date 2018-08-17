import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

class Settings extends Component {


    render() {
        return (
            <div >
                {
                    this.props.user ?
                        <Link to='/'><button onClick={this.props.logout}>Logout</button></Link> :
                        <Link to='/'><button>Login</button></Link>
                } 
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps, {logout})(Settings)
