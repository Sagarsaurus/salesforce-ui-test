//represents a User

const mongoose = require('mongoose')
let UserModel = new mongoose.Schema(
    {
        name: String,
        email: String,
        token: String,
        subscribedTo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        followedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        stories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Story'
            }
        ]
    }
)
UserModel.methods.subscribe = function (user) {
    if (this.subscribedTo.indexOf(user) === -1) {
        this.subscribedTo.push(user)        
    }
    return this.save()
}

UserModel.methods.addFollower = function (follower) {
    this.followedBy.push(follower)        
}

UserModel.methods.addStory = function (story) {
    this.stories.push(story)
}

module.exports = mongoose.model('User', UserModel)
