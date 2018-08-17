module.exports = {
    readComment: async (req, res) => {
        try {
            let db = req.app.get('db')
            let postId = req.params.postId
            let comments = await db.getComments(postId)

            res.send(comments)

        } catch (error) {
            console.log('had a problem getting comments', error)
            res.status(500).send(error)
        }
    },

    createComment: async (req, res) => {
        try {
            let db = req.app.get('db')
            // let {} = req.body 
            // let user_id = req.session.user ?
            // res.session.user.id : 1
            

        } catch (error) {
            console.log('had a problem creating comments', error)
            res.status(500).send(error)
        }
    }, 
    
    updateComment: async (req, res) => {
        try {
            let db = req.app.get('db')

        } catch (error) {
            console.log('had a problem updating comments', error)
            res.status(500).send(error)
        }
    }, 
    
    deleteComment: async (req, res) => {
        try {
            let db = req.app.get('db')

        } catch (error) {
            console.log('had a problem deleting comments', error)
            res.status(500).send(error)
        }
    },
}