import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
       <HashRouter>
         <div>
           <Switch>
             <Route exact path='/' component={Login}/>
             <Route path='/dashboard' component={Dashboard}/>
           </Switch>
         </div>
         {/* <div>
           <Swicth>
             <Route />
             <Route />
             <Route />
           </Swicth>
         </div> */}
       </HashRouter>
      </div>
    );
  }
}

export default App;




//NOTES
//switch out HashRouter with browser touyrt 