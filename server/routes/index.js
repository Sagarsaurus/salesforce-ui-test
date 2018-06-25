
const user = require('./user')
const story = require('./story')
module.exports = (router) => {
    user(router)
    story(router)
}