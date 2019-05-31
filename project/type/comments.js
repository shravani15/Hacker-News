var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new Schema ({
    name: String,
    comment: String
})

module.exports = mongoose.model('Comments', commentSchema)