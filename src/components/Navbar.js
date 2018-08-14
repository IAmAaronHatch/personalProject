import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../redux/reducers/user'

class Navbar extends Component {
    constructor(){
        super()

        this.state ={
            navOpen: false
        }
    }

    toggleNav = (e) => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.toggleNav}>☰</button>
                </div>

                {/* Mobile */}

                {
                    this.state.navOpen ?
                <div className='navbar-icons-mobile'>
                    {
                        this.props.user ?
                        <div>
                            <p>{this.props.user.name}</p> 
                            {/* <img src={this.props.user.profile_pic}/> */}
                        </div> :
                            null
                    }
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/posts'><button>Posts</button></Link>
                    <Link to='/favorites'><button>Favorites</button></Link>
                    <Link to='/genres'><button>Genres</button></Link>
                    {
                        this.props.user ?
                            <Link to='/login'><button onClick={this.props.logout}>Logout</button></Link> :
                            <Link to='/login'><button>Login</button></Link>
                    }
                </div> :
                null

                }
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

