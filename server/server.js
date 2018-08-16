const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')

require('dotenv').config()

const app = express()
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
app.post('/api/post', PostCtrl.create)
app.put('/api/post/title/:id', PostCtrl.updateTitle)
app.put('/api/post/content/:id', PostCtrl.updateContent)
app.delete('/api/post/:id', PostCtrl.delete)

//Comments
app.get('/api/posts/:postId/comments', CommentCtrl.readComment)
app.put('/api/posts/:postId/comments/:id')

// app.get('/api/comments/:id', CommentCtrl.readComment)
app.post('/api/comment/:id', CommentCtrl.createComment)
// app.put('/api/comments/:id', CommentCtrl.updateComment)
app.delete('/api/comments/:id', CommentCtrl.deleteComment)

//Extras
app.get('/api/posts', PostCtrl.readByPoints)


app.listen( port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})