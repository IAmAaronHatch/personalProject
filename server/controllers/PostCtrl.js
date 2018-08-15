
module.exports = {
    read: async (req, res) => {
        try {
            let db = req.app.get('db')
            let posts = await db.getPosts()
            // console.log(1111, posts)
            res.send(posts)
        } catch (error) {
            console.log('had a problem fetching posts', error)
            res.status(500).send(error)
        }
    },
    readByPoints: async (req, res) => {
        try {
            let db = req.app.get('db')
            let posts = await db.getPostByPoints()
            // console.log(1111, posts)
            res.send(posts)
        } catch (error) {
            console.log('had a problem fetching posts by points', error)
            res.status(500).send(error)
        }
    },

    create:  async (req, res) => {
        try {
            let db = req.app.get('db')
            let { title, content } = req.body 
            let user_id = req.session.user ?
            req.session.user.id : 1

            let newPost = { user_id, title, content }
            let posts = await db.createPost(newPost) 
            res.send(posts)
        } catch (error) {
            console.log ('error creating post', error) 
            res.status(500).send(error)
        }
    },

    updateTitle: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params
            let { title } = req.body

            let updatedPosts = await db.updateTitle([title, id])
            res.send(updatedPosts)
        } catch (error) {
            console.log('error updating post title', error)
            res.status(500).send(error)
        }
    },
    updateContent: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params
            let { content } = req.body

            let updatedPosts = await db.updatePost([content, id])
            res.send(updatedPosts)
        } catch (error) {
            console.log('error updating post content', error)
            res.status(500).send(error)
        }
    },

    delete: async (req, res) => {
        try {
            let db = req.app.get('db')
            let { id } = req.params

            let deletedPost = await db.deletePost([id])
            res.send(deletedPost)
        } catch (error) {
            console.log('error deleting post', error)
            res.status(500).send(error)
        }
    }
}