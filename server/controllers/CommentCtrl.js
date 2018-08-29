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
            let { comment } = req.body
            let postId = req.params.postId
            let commenter_id = req.session.user ?
                req.session.user.id : 1
            
            let comments = await db.createComment({ comment, commenter_id, postId })
            res.send(comments)
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