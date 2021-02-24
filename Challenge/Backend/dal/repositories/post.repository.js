const BaseRepository = require('./base.repository');

class PostRepository extends BaseRepository {
    constructor({ db }){
        super(db, 'Post');
    }

    //
}

module.exports = PostRepository;