import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

class Settings extends Component {


    render() {
        return (
            <div >
                <div className='settings-container'>
                    {
                        this.props.user ?
                        <div className='user-info'>
                            <img className='profile-pic' src={this.props.user.profile_pic} alt=''/> 
                            <p>{this.props.user.name}</p> 
                        </div> :
                            null
                    }
                </div>

                <div>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    <p>Night Mode</p>
                </div>

                <div>
                    {
                        this.props.user ?
                            <Link to='/'><button onClick={this.props.logout}>Logout</button></Link> :
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
