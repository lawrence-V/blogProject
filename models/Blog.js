const mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  first_name: {
    type: String,
  },
  middle_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  age: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lang: {
    type: Number,
  },
  //   marker: {[{
  //     lat : String,
  //     lng : String
  // }]
  image: {
    data: Buffer,
    contentType: String,
  },
  name: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('BlogPost', blogSchema)
