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
        ]
    }
)
UserSchema.methods.subscribe = function (user) {
    if (this.subscribedTo.indexOf(user) === -1) {
        this.subscribedTo.push(user)        
    }
    return this.save()
}
UserSchema.methods.addFollower = function (follower) {
    this.followedBy.push(follower)        
}
module.exports = mongoose.model('User', UserModel)
