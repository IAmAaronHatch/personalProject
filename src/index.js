import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'

import store from './redux/store'
const socket = io.connect('http://localhost:4200')

ReactDOM.render(
    <Provider store={store}>
        <SocketProvider socket={socket}>
            <HashRouter>
                <App />
            </HashRouter>
        </SocketProvider>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();

