import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { getUser } from './redux/reducers/user'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Genres from './components/Genres'
import PostContainer from './components/Posts/PostContainer'
import FavoriteContainer from './components/Posts/FavoriteContainer'


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div>
        {
          (this.props.location.pathname !== '/login') ?
            <Header /> :
            null
        }
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/posts' component={PostContainer} />
          <Route path='/favorites' component={FavoriteContainer} />
          <Route path='/genres' component={Genres} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(null, {getUser})(App)
);




//NOTES
//switch out HashRouter with browser touyrt 