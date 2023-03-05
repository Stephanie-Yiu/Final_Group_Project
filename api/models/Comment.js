const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CommentSchema = new Schema(
  {
    comment: String,
    postId: String,
    // authorId: String,// future use
    // author: String, // future use

  },
 

  {
    timestamps: true,
  },
);

const CommentModel = model(
  'Comment',
  CommentSchema,
);

module.exports = CommentModel;
