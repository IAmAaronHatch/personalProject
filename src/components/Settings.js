import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

import './CSS/Settings.css'

class Settings extends Component {


    render() {
        return (
            <div className='settings-main'>
                <div className='user-settings'>

                    <h2>User Settings</h2>
                </div>
                <div className='settings-container'>
                    {
                        this.props.user ?
                            <div className='user-info'>
                                <img className='profile-pic' src={this.props.user.profile_pic} alt='' />
                                <p>{this.props.user.name}</p>
                            </div> :
                            null
                    }
                </div>

                <div className='buttons'>
                    <Link to='/favorites'><button className='logout-fav-btn'>Favorites</button></Link>
                    {
                        this.props.user ?
                            <Link to='/'><button className='logout-fav-btn' onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/'><button>Login</button></Link>
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

export default connect(mapStateToProps, { logout })(Settings)
