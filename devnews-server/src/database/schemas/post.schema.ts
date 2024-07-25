import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    category: {
      type: String,
      enum: ['politic', 'sports', 'entertainment'],
    },
  },
  {
    versionKey: false,
  },
);

export const PostModel = mongoose.model('Posts', PostSchema);
