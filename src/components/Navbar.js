import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Navbar extends Component {
    // constructor() {
    //     super()

    //     this.state = {

    //     }
    // }


    render() {
        return (
            <div>
                <div>
                    <button>☰</button>
                </div>

                {/* Mobile */}
                <div className='navbar-icons-mobile'>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    {
                        this.props.user ?
                            <Link to='/login'><button onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/login'><button>Login</button></Link>
                    }
                    {
                        this.props.user ?
                            <p>{this.props.user.name}{this.props.user.picture}</p> :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default Navbar
