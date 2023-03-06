const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    
  },
  {
    timestamps: true,
  },

  {
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]
    
  }


 







);


const PostModel = model('Posts', PostSchema);

module.exports = PostModel;
