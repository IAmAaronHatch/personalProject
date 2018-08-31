import React, { Component } from 'react'
import './CSS/BottomNav.css'

import { Link } from 'react-router-dom'

class BottomNav extends Component {



    render() {
        return (
            <div className='bottomnav-main'>
                <Link to='/form'><button><img className='btn' 
                src={'https://static.thenounproject.com/png/1127476-200.png'} 
                alt='newpost'/></button></Link>

                <Link to='/poll'><button><img className='btn' 
                src={'https://static.thenounproject.com/png/103882-200.png'} 
                alt='poll' /></button></Link>

                <Link to='/posts'><button><img className='btn-home' 
                src={'https://static.thenounproject.com/png/1892460-200.png'} 
                alt='home'/></button></Link>

                <Link to='/message'><button><img className='btn' 
                src={'https://static.thenounproject.com/png/738694-200.png'} 
                alt='messages' /></button></Link>

                <Link to='/usersettings'><button><img className='btn' 
                src={'https://static.thenounproject.com/png/1893507-200.png'} 
                alt='settings'/></button></Link>
            </div>
        )
    }
}

export default BottomNav
