import React, { Component } from 'react'
import './CSS/Dashboard.css'

// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPostsByPoints } from '../redux/reducers/posts'

class Dashboard extends Component {
    componentDidMount(){
        this.props.getPostsByPoints()
    }
    render() {
        return (
            <div className='dashboard-main'>    
                <div>
                    <h3>Check Out Our Popular Posts!</h3>
                </div>
            </div>
        )
    }
}
let mapStateToProps = state => {
    return {
        user: state.user.data,
        posts: state.posts.data
    }
}
export default connect(mapStateToProps, { getPostsByPoints })(Dashboard)