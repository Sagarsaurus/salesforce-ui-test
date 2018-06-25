//route for story

const storyController = require('./../controllers/story.controller')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {

    //create a story
    router
        .route('/story')
        .post(multipartWare, storyController.createStory)

    //get specific story
    router
        .route('/story/:id')
        .get(storyController.getStory)

    //get all stories
    router
        .route('/stories')
        .get(storyController.getAllStories)

    //update story
    router
        .route('/story/:id')
        .put(storyController.updateStory)

    //delete story
    router
        .route('/story/:id')
        .delete(storyController.deleteStory)

    //upvote a story
    router
        .route('/story/upvote')
        .post(storyController.upvoteStory)

    //comment on story
    router
        .route('/story/comment')
        .post(storyController.commentStory)

}