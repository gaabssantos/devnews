import mongoose, { Schema } from 'mongoose';

import { CategorySchema } from './category.schema';

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    image: String,
    category: CategorySchema,
  },
  {
    versionKey: false,
  },
);

export const PostModel = mongoose.model('Posts', PostSchema);
