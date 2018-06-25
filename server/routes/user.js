//route for user

const userController = require('./../controllers/user.controller')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {

    //create a user
    router
        .route('/user')
        .post(multipartWare, userController.createUser)

    //get specific user
    router
        .route('/user/:id')
        .get(userController.getUser)

    //get all users
    router
        .route('/users')
        .get(userController.getAllUsers)

    //update user
    router
        .route('/user/:id')
        .put(userController.updateUser)

    //delete user
    router
        .route('/user/:id')
        .remove(userController.deleteUser)

    //subscribe to a user
    router
        .route('/user/subscribe/:id')
        .post(userController.subscribe)

    //get all followers
    router
        .route('/user/:id/followers')
        .get(userController.getFollowers)

}