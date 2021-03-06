const axios = require('axios')

module.exports = {
    auth: async (req, res) => {

        try {
            let { code } = req.query
            let payload = {
                client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: `${process.env.SERVER_PROTOCOL}://${req.headers.host}/auth/callback`
            }

            let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

            let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload)
            let accessToken = accessTokenResponse.data.access_token

            let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`)
            let userInfo = userInfoResponse.data

            let db = req.app.get('db')
            let users = await db.findUserByAuthId(userInfo.sub)

            if (users.length) {
                req.session.user = users[0]
                res.redirect('/#/posts')
            } else {
                console.log(userInfo)
                if (userInfo.picture.includes('https://s.gravatar.com/avatar')) {
                    userInfo.picture = 'https://static.thenounproject.com/png/138354-200.png'
                }
                let users = await db.createUser(userInfo)
                req.session.user = users[0]
                res.redirect('/#/posts')
            }
        } catch (error) {
            console.log('we have a problem authorizing', error)
            res.redirect('/error')
        }
    },

    currentUser: (req, res) => {
        res.send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}