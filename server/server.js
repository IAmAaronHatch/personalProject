const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const app = express()

//Socket.io
const socket_io = require('socket.io');
const { VERIFY_USER, USER_CONNECTED, LOGOUT, USER_DISCONNECTED, COMMUNITY_CHAT, MESSAGE_RECEIVED, MESSAGE_SENT, TYPING } = require('../src/Events')
const { createUser, createMessage, createChat } = require('../src/Factories')

require('dotenv').config()
const port = 4200

//controllers
const AuthCtrl = require('./controllers/AuthCtrl')
const PostCtrl = require('./controllers/PostCtrl')
const CommentCtrl = require('./controllers/CommentCtrl')

massive(process.env.CONNECTION_SESSION ).then( db => {
    app.set('db', db)
    console.log(`Never gonna run around and desert db!`)
}).catch( err => console.log(err) )

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(bodyParser.json())

//Authentication
app.get('/auth/callback', AuthCtrl.auth)
app.get('/api/currentUser', AuthCtrl.currentUser)
app.get('/api/logout', AuthCtrl.logout)

//Posts 
app.get('/api/posts', PostCtrl.read)
app.get('/api/popular-posts', PostCtrl.readByPoints)
app.post('/api/post', PostCtrl.create)
app.put('/api/post/title/:id', PostCtrl.updateTitle)
app.put('/api/post/content/:id', PostCtrl.updateContent)
app.delete('/api/post/:id', PostCtrl.delete)

//Comments
app.get('/api/posts/:postId/comments', CommentCtrl.readComment)
app.post('/api/posts/:postId/comment', CommentCtrl.createComment)
// app.put('/api/posts/:postId/comment/:id')
app.delete('/api/comments/:id', CommentCtrl.deleteComment)

//Extras
app.get('/api/posts', PostCtrl.readByPoints)

//Favorites 
app.get('/api/posts/:postId/favorites')


const server = app.listen( port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})

//Socket.io
const io = socket_io(server)
let connectedUsers = {  }
let communityChat = createChat()

io.on('connection', function(socket) {
    console.log('Socket Id:' + socket.id)
    
    //Verify Username 
    socket.on(VERIFY_USER, (nickname, callback) => {
        if(isUser(connectedUsers, nickname)){
            callback({ isUser: true, user:null })
        } else {
            callback({ isUser: false, user: createUser({name:nickname})})
        }
    })
    //User COnnects with username
    socket.on(USER_CONNECTED, (user) => {
        connectedUsers = addUser(connectedUsers, user)
        socket.user = user

        io.emit(USER_CONNECTED, connectedUsers)
        console.log(connectedUsers)
    })
    //User disconnects 

    socket.on('disconnect', () => {
        if('user' in socket) {
            connectedUsers = removeUser(connectedUsers, socket.user.name)

            io.emit(USER_DISCONNECTED, connectedUsers)
            console.log('Disconnect', connectedUsers)
        }
    })

    //user logouts

    socket.on(LOGOUT, () => {
        connectedUsers = removeUser(connectedUsers, socket.user.name)
        io.emit(USER_DISCONNECTED, connectedUsers)
        console.log('Disconnect', connectedUsers)
    })

    //Get Community Chat 

    socket.on(COMMUNITY_CHAT, (callback) => {
        callback(communityChat)
    })
    socket.on(MESSAGE_SENT, ({chatId, message}) => {
        sendMessageToChatFromUser(chatId, message)
    })
    socket.on(TYPING, ({chatId, isTyping}) => {
        sendTypingFromUser(chatId, isTyping)
    })

})

function addUser(userList, user) {
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList    
}
function removeUser(userList, username) {
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}
function isUser(userList, username) {
    return username in userList 
}

function sendTypingToChat(user){
    return(chatId, isTyping)=> {
        io.emit(`${TYPING}-${chatId}`, {user, isTyping})
    }
}

function sendMessageToChat(sender){
    return(chatId, message) => {
        io.emit(`${MESSAGE_RECEIVED}-${chatId}`, createMessage({message, sender}))
    }
}