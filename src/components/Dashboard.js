import React, { Component } from 'react'
import './CSS/Dashboard.css'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard-main'>  
                {
                    this.props.user ?
                        <Link to='/'><button onClick={this.props.logout}>Logout</button></Link> :
                        <Link to='/'><button>Login</button></Link>
                } 
                Dashboard
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Dashboard)
