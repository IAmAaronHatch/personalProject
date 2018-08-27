import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { getUser } from './redux/reducers/user'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import PostContainer from './components/Posts/PostContainer'
import FavoriteContainer from './components/Posts/FavoriteContainer'
import CreatePost from './components/Posts/CreatePost';
import Settings from './components/Settings';
import BottomNav from './components/BottomNavbar'
import Poll from './components/Poll';
import Message from './components/Message'
import MyPost from './components/Posts/MyPost'


class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <div className='app-main'>
        <div>
          {
            (this.props.location.pathname !== '/') ?
              <Header /> :
              null
          }
        </div>
        <div className='components-contain'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Dashboard} />
            <Route path='/message' component={Message} />
            <Route path='/posts' component={PostContainer} />
            <Route path='/form' component={CreatePost} />
            <Route path='/favorites' component={FavoriteContainer} />
            <Route path='/usersettings' component={Settings} />
            <Route path='/poll' component={Poll} />
            <Route path='/mypost' component={MyPost} />
          </Switch>
        </div>

        <div className='app-bottomnav'>
          {
            (this.props.location.pathname !== '/') ?
              <BottomNav /> :
              null
          }
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { getUser })(App)
);




//NOTES
//switch out HashRouter with browser touyrt 