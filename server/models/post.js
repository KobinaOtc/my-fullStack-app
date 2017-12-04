const mongoose = require('mongoose');
const {Schema} = mongoose;

let postsSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  contentLink: String,
  upVote: {
    type: Number,
    required: true,
    default: 0
  },
  downVote: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model("posts", postsSchema)
