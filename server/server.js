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


app.listen( port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})