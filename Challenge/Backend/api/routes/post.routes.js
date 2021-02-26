const { Router } = require("express");

module.exports = function({ PostController }) {
    
    const router = Router();
    
    router.get('/', PostController.getPosts.bind(PostController));
    router.get('/:id'), PostController.getPost.bind(PostController);
    router.post('/', PostController.createPost.bind(PostController));
    router.patch('/:id', PostController.updatePost.bind(PostController));
    router.delete('/:id', PostController.deletePost.bind(PostController));

    return router;
}