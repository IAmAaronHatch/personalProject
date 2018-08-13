import React, { Component } from 'react'
// import axios from 'axios'
import './CSS/Header.css'
import { Link } from 'react-router-dom'

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
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                </div>
            </div>
        )
    }
}

export default Header

// css notes
// make sure to hide the different links and only display the logo, because all of these options will be in the navbar