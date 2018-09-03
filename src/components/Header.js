import React from 'react'
import './CSS/Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../Threddit@2x.png'

import { logout } from '../redux/reducers/user'

function Header(props) {
    return (
        <div className='header-main'>
            <div className='header-icons-left'>
                <img className='logo' src={logo} alt='logo'/>
            </div>


            <div className='header-icons-right'>
                <Link to='/form'><button>Create Post</button></Link>
                <Link to='/poll'><button>Polls</button></Link>
                <Link to='/posts'><button>Home</button></Link>
                <Link to='/message'><button>Message</button></Link>
                {
                    props.user ?
                        <Link to='/usersettings'><button>{props.user.name}</button></Link> :
                        null
                }
                {
                    props.user ?
                        null :
                        <Link to='/'><button>Login</button></Link>
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