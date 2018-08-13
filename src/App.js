import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'


import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import PostContainer from './components/Posts/PostContainer'
import FavoriteContainer from './components/Posts/FavoriteContainer'

class App extends Component {
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)




//NOTES
//switch out HashRouter with browser touyrt 