const productsRouter= require('./products.router')
//const usersRouter= require('./users.router')
//se sube al git

function routerApi(app){
    app.use('/products', productsRouter);
    app.use('/users', productsRouter);
    app.use('/categories', productsRouter);

}

module.exports = routerApi;
