//controller for Story

const User = require('./../models/User')
const Story = require('./../models/Story')
const fs = require('fs')

module.exports = {
    //first of CRUD operations, we create a story
    createStory: (request, response, next) => {
        let { body, title, upvotes } = request.body
        if (body && title ) {
                let story = { body, title, upvotes }
                saveStory(story)
        }else {
            alert("Missing a required parameter for story creation!")
        }

        function saveStory(story) {
            new Story(story).save((error, story) => {
                if (error)
                    response.send(error)
                else if (!story)
                    response.send(400)
                else {
                    return story.addAuthor(request.body.author).then((_story) => {
                        return response.send(_story)
                    })
                }
                next()
            })
        }
    },

    //second CRUD operation, return a specific Story
    getStory: (request, response, next) => {
        Story.findById(request.params.id)
        .populate('author')
        .populate('comments.author').exec((error, story)=> {
            if (error)
                response.send(error)
            else if (!story)
                response.send(404)
            else
                response.send(story)
            next()            
        })
    },

    //useful function for later, return all story associated with a User
    getAllStories: (request, response, next) => {
        Story.find(request.params.id)
        .populate('author')
        .populate('comments.author').exec((error, story)=> {
            if (error)
                response.send(error)
            else if (!story)
                response.send(404)
            else
                response.send(story)
            next()            
        })
    },

    //third CRUD operation, update story
    updateStory: (request, response, next) => {
        //TODO
    },

    //final CRUD operation, delete story
    deleteStory: (request, response, next) => {
        //TODO
    },

    upvoteStory: (request, response, next) => {
        Story.findById(req.body.story_id).then((story)=> {
            return story.upvote().then(()=>{
                return response.json({message: "Upvoted"})
            })
        }).catch(next)
    },
    /**
     * comment, author_id, article_id
     */
    commentStory: (request, response, next) => {
        Story.findById(request.body.story_id).then((story)=> {
            return story.comment({
                author: request.body.author_id,
                body: request.body.comment
            }).then(() => {
                return response.json({message: "Commented"})
            })
        }).catch(next)
    }
}
