import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { getFavorites } from '../../redux/reducers/posts'

import FavoritePost from './FavoritePost'

class FavoriteContainer extends Component {
    componentDidMount() {
        this.props.getFavorites()
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/favorites' component={FavoritePost} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, { getFavorites })(FavoriteContainer)
