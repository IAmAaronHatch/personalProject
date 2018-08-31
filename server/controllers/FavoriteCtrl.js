
module.exports = {
    read: async (req, res) => {
        console.log('id', req.session)
        try {
            let db = req.app.get('db')

            // TODO: this line needs to be fixed for production to only look at user on session
            let user_id  = req.session.user ? req.session.user.id : 1

            let favorite = await db.getFavorites(user_id)
            res.send(favorite)
        } catch (error) {
            console.log('had a problem getting favorites', error)
            res.status(500).send(error)
        }
    },

    create: async (req, res) => {
        try {
            let db = req.app.get('db')
            let postId = req.params.postId
            let user_id = req.session.user.id 

            let newFavorite = await db.createFavorite({postId, user_id})
        } catch (error) {
            console.log('had a problem favoriting', error)
            res.status(500).send(error)
        }
    },

    
}
