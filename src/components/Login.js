import React, { Component } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'
import logo from '../Threddit@2x.png'

class Login extends Component {

    login = () => {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)

        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`

        window.location = location
    }

    render() {
        return (
            <div className='login-main'>
                <div className='login-container'>
                    <div className='upper-login-container'>
                        <img className='logo' src={logo} alt='logo'/>
                    </div>
                    <div className='lower-login-container'>
                        <button className='login-button' onClick={this.login}>Login</button>
                        <hr />
                        <Link to='/posts'><button className='login-button-small'>Login as Guest</button></Link>
                        <button className='night-toggle'><img className='btn-night' src={'https://static.thenounproject.com/png/1643412-200.png'} alt='nightmode'/></button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login
