import React, { Component } from 'react'
// import axios from 'axios'
import './CSS/Header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

import Navbar from './Navbar'

class Header extends Component {
    // constructor() {
    //     super()

    //     this.state = {

    //     }
    // }


    render() {
        return (
            <div className='header-main'>
                <div className='header-icons-left'>
                    <Navbar />
                </div>

                <div className='header-icons-right'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    {
                        this.props.user ?
                            <Link to='/login'><button onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/login'><button>Login</button></Link>
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

export default connect(mapStateToProps, { logout })(Header)

                    // css notes
// make sure to hide the different links and only display the logo, because all of these options will be in the navbar