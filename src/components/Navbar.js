

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

import { logout } from '../redux/reducers/user'

import './CSS/Navbar.css'

class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }

    combineOnClick = () => {
        this.props.logout()
        this.onCloseModal()
    }

    render() {
        const { open } = this.state
        return (
            <div>
                <div>
                    <button onClick={this.onOpenModal}>☰</button>
                </div>

                <Modal open={open} onClose={this.onCloseModal} center classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
                    <div className='navbar-icons-mobile'>
                        {
                            this.props.user ?
                                <div>
                                    <p>{this.props.user.name}</p>
                                    {/* <img src={this.props.user.profile_pic}/> */}
                                </div> :
                                null
                        }
                        <Link to='/home'><button onClick={this.onCloseModal}>Home</button></Link>
                        <Link to='/posts'><button onClick={this.onCloseModal}>Posts</button></Link>
                        {
                            this.props.user ?
                                <Link to='/favorites'><button onClick={this.onCloseModal}>Favorites</button></Link> :
                                null

                        }
                        <Link to='/genres'><button onClick={this.onCloseModal}>Genres</button></Link>
                        {
                            this.props.user ?
                                <Link to='/'><button onClick={this.combineOnClick}>Logout</button></Link> :
                                <Link to='/'><button onClick={this.onCloseModal}>Login</button></Link>
                        }
                    </div>
                </Modal>

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
