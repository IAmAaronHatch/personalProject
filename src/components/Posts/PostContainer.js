import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { getPosts } from '../../redux/reducers/posts'

import Posts from './Posts'
import Post from './Post'


class PostContainer extends Component {
    
    componentDidMount(){
        this.props.getPosts()
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/posts' component={Posts}/>
                    <Route path='/posts/:id' component={Post}/>
                </Switch>
            </div>
        )
    }
}

export default connect(null, { getPosts })(PostContainer)
