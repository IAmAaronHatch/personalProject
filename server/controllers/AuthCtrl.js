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
                redirect_uri: `http://${req.headers.host}/auth/callback`
            }
        } catch (error) {
            console.log('we have a problem authorizing', error)
            res.redirect('/error')
        }
    },

    currentUser: (req, res) => {
        req.send(req.session.user)
    }
}