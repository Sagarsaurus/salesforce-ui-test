//controller for Story

const User = require('./../models/User')
const Story = require('./../models/Story')
const fs = require('fs')

module.exports = {
    //first of CRUD operations, we create a user
    createUser: (request, response, next) => {
        let { name, email, token } = request.body
        if (name && email ) {
                let user = { name, email, token }
                saveUser(user)
        }else {
            alert("Missing a required parameter for user creation!")
        }

        function saveUser(user) {
            new User(user).save((error, user) => {
                if (error)
                    response.send(error)
                else if (!user)
                    response.send(400)
                else {
                    response.send(201)
                }
                next()
            })
        }
    },

    //second CRUD operation, return a specific user
    getUser: (request, response, next) => {
        User.findById(request.params.id).then((user) => {
            if (error)
                response.send(error)
            else if (!user)
                response.send(404)
            else
                response.send(user)
            next()            
        })
    },

    //useful function for later, return all users
    getAllUsers: (request, response, next) => {
        Story.find({}, (error, users)=> {
            if (error)
                response.send(error)
            else if (!users)
                response.send(404)
            else
                response.send(users)
            next()            
        })
    },

    //third CRUD operation, update user
    updateUser: (request, response, next) => {
        //TODO
    },

    //final CRUD operation, delete user
    deleteUser: (request, response, next) => {
        //TODO
    },
    //subscribe to a user
    subscribe: (request, response, next) => {
        //TODO
    },

    //get all followers
    getFollowers: (request, response, next) => {
        //TODO
    }
}
