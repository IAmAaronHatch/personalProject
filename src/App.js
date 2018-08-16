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
import CreatePost from './components/Posts/CreatePost';


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div>
        {
          (this.props.location.pathname !== '/') ?
            <Header /> :
            null
        }
        <Switch>
          <Route path='/home' component={Dashboard} />
          <Route exact path='/' component={Login} />
          <Route path='/genres' component={Genres} />
          <Route path='/posts' component={PostContainer} />
          <Route path='/form' component={CreatePost} />
          <Route path='/favorites' component={FavoriteContainer} />
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