import mongoose, { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    name: String,
  },
  { versionKey: false },
);

export const CategoryModel = mongoose.model('Categories', CategorySchema);
