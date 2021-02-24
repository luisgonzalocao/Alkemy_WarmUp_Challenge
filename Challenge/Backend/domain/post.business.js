const BaseBusiness = require('./base.business');
const { Post } = require('./models');

class PostBusiness extends BaseBusiness {
    constructor({ PostRepository }) {
        super(PostRepository, Post);
    }
    //
}

module.exports = PostBusiness;