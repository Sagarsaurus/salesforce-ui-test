//represents a story written by a user

const mongoose = require('mongoose')
let StoryModel = new mongoose.Schema(
    {
        title: String,
        body: String,
        upvotes: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);
StoryModel.methods.upvote = function() {
    this.upvotes++
    return this.save()
}
StoryModel.methods.comment = function(comment) {
    this.comments.push(comment)
    return this.save()
}
StoryModel.methods.addAuthor = function (author) {
    this.author = author
    return this.save()
}
StoryModel.methods.getStory = function (user) {
    Story.find({'author': user}).then((story) => {
        return story
    })
}
module.exports = mongoose.model('Story', StoryModel)
