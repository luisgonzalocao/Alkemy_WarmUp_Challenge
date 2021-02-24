const mapper = require('automapper-js');
const { PostPartialDto, PostFullDto } = require('../dtos');



class PostController {
    constructor({PostService}) {
        this._postService = PostService;
    }
 
    async getPosts(req, res){
        let posts = await this._postService.getAll();
        posts = posts.map( post => mapper(PostPartialDto, post));
        return res.send(posts);
    }

    async getPost(req, res){
        const { id } = req.params;
        let post = await this._postService.get(id);
        if (!post) {
            return res.status(404).send();
        }
        post = mapper(PostFullDto, post);
        return res.send(post);
    }

    
    async createPost(req, res){
        const { body } = req;
        let createdPost = await this._postService.create(body);
        const post = mapper(PostFullDto, createdPost);
        return res.status(201).send(post);
    }

    async updatePost(req, res) {
        const { body } = req;
        const { id } = req.params;

        await this._Service.update(id, body);
        return res.status(204).send();
    }

    async deletePost(req, res) {
        const { id } = req.params;

        await this._postService.delete(id, post);
        return res.status(204).send();
    }
};

module.exports = PostController;