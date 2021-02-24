const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const StartUp = require('./startup');
const Server = require('./server');
const config = require('../config/environments');

// routes
const Routes = require('../api/routes');
const PostRoutes =  require('../api/routes/post.routes');

// business
const { PostBusiness } = require('../domain/');


// controllers
const { PostController} = require('../api/controllers');

// services
const { PostService } = require('../services');

// repositories
const { PostRepository } = require('../dal/repositories');

// db
const db = require('../dal/models');


const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    PostController: asClass(PostController).singleton(),
    router: asFunction(Routes).singleton(),
    PostRoutes: asFunction(PostRoutes).singleton()
})
.register({
    config: asValue(config)
})
.register({
    db: asValue(db)
})
.register({
    PostService: asClass(PostService).singleton()
})
.register({
    PostRepository: asClass(PostRepository).singleton()
})
.register({
    PostBusiness: asClass(PostBusiness).singleton()
});

module.exports = container;