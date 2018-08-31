const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')
const app = express()
const path = require('path');
// const socket_io = require('socket.io');


require('dotenv').config()
const port = 4200

//controllers
const AuthCtrl = require('./controllers/AuthCtrl')
const PostCtrl = require('./controllers/PostCtrl')
const CommentCtrl = require('./controllers/CommentCtrl')
const FavoriteCtrl = require('./controllers/FavoriteCtrl')
const MessageCtrl = require('./controllers/MessageCtrl')

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

app.use(express.static(`${__dirname}/../build`));

//TODO remove this before production
app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {id: 1}
    }
    next()
})

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
app.get('/api/posts/favorites', FavoriteCtrl.read)
app.post('/api/posts/:postId/favorite', FavoriteCtrl.create)

//Messaging
app.get('/api/messages', MessageCtrl.read)
app.post('/api/message', MessageCtrl.create)
app.put('/api/message/:id', MessageCtrl.update)
app.delete('/api/message/:id', MessageCtrl.delete)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});


app.listen( port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})


// const io = socket_io(server)
// io.on('connection', function(socket) {
// })