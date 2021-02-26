const mapper = require('automapper-js');
const { PostPartialDto, PostFullDto } = require('../dtos');



class PostController {
    constructor({PostService}) {
        this._postService = PostService;
    }
 
    async getPosts(req, res){
        try{
        let posts = await this._postService.getAll();
        posts = posts.map( post => mapper(PostPartialDto, post));
        return res.send(posts);
        } catch(e) {console.log(e);}

    }

    async getPost(req, res){
        const { id } = req.params;
        try{
            let post = await this._postService.get(id);
            if (!post) {
                return res.status(404).send();
            }
            post = mapper(PostFullDto, post);
            return res.send(post);
        } catch (e) {
            return console.log(e);
        }
    }

    
    async createPost(req, res){
        const { body } = req;
        try{
            let createdPost = await this._postService.create(body);
            const post = mapper(PostFullDto, createdPost);
            return res.status(201).send(post);
        } catch (e) {
            return console.log(e);
        }
    }

    async updatePost(req, res) {
        const { body } = req;
        const { id } = req.params;
        try{
            await this._postService.update(id, body);
            return res.status(204).send();
        } catch(e){
            return console.log(e);
        }
    }

    async deletePost(req, res) {
        const { id } = req.params;
        try{
            await this._postService.delete(id, post);
            return res.status(204).send();
        } catch(e){ return console.log(e);}
    }
};

module.exports = PostController;