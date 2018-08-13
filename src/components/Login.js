import React, { Component } from 'react'
import './CSS/Login.css'
// import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {

    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

        window.location = location
        console.log(this.props)
    }

    render() {
        return (
            <div className='login-main'>
                <div className='login-container'>
                    <div className='upper-login-container'>
                        <div className='login-icon'>logo picture</div>
                        <div>Logo</div>
                    </div>
                    <div className='lower-login-container'>
                        <button className='login-button' onClick={this.login}>Login</button>
                        <button className='login-button'>Register</button>
                    </div>
                </div>

                <Link to='/'><button>Dashboard</button></Link>
            </div>
        )
    }
}

export default Login
