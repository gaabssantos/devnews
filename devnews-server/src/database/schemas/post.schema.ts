import mongoose, { Schema } from 'mongoose';

import { POST_ENUM } from '../../enums/post.enum';

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    category: {
      type: String,
      enum: POST_ENUM,
    },
  },
  {
    versionKey: false,
  },
);

export const PostModel = mongoose.model('Posts', PostSchema);
