import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

class Navbar extends Component {

    render() {
        return (
            <div>
                <div>
                    <button>☰</button>
                </div>

                {/* Mobile */}
                <div className='navbar-icons-mobile'>
                {/* <ul>
                    <li></li>
                </ul> */}
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    <Link to='/genres'><button>Genres</button></Link>
                    {
                        this.props.user ?
                            <Link to='/login'><button onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/login'><button>Login</button></Link>
                    }
                    {/* {
                        this.props.user ?
                            <p>{this.props.user.name}{this.props.user.picture}</p> :
                            null
                    } */}
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

export default connect(mapStateToProps, { logout })(Navbar)
