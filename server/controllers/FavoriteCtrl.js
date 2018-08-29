
module.exports = {
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let postId = req.params.postId
        } catch (error) {
            console.log('had a problem getting favorites', error)
            res.status(500).send(error)
        }
    },

    create: async (req, res) => {
        try {
            let db = req.app.get('db')
        } catch (error) {
            console.log('had a problem favoriting', error)
            res.status(500).send(error)
        }
    },

    
}
