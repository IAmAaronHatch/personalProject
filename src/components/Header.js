import React from 'react'
import './CSS/Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

import Navbar from './Navbar'

function Header(props) {
    return (
        <div className='header-main'>
            <div className='header-icons-left'>
                <Navbar />
                <h1>Logo</h1>
            </div>

            <div className='header-icons-right'>
                <Link to='/'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/favorites'><button>Favorites</button></Link>
                {
                    props.user ?
                        <Link to='/'><button onClick={props.logout}>Logout</button></Link> :
                        <Link to='/'><button>Login</button></Link>
                }
                {
                    props.user ?
                        <p>{props.user.name}</p> :
                        null
                }
            </div>
        </div>
    )
}
let mapStateToProps = state => {
    return {
        user: state.user.data
    }
}
export default connect(mapStateToProps, { logout })(Header)