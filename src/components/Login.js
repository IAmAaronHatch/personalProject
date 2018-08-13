import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {
    // constructor() {
    //     super()

    //     this.state = {

    //     }
    // }


    render() {
        return (
            <div>
                Login

                <Link to='/'><button>Dashboard</button></Link>
            </div>
        )
    }
}

export default Login
