const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogpostSchema = new Schema(
  {
    body: { 
      type: String, 
      required: true 
    },
  },
  {
    timestamps: true //automatically create timestamps for entries
  }
);

const Blogpost = mongoose.model('Blogpost', BlogpostSchema); 
module.exports = Blogpost;