import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    role: {
      type: String,
      enum: ['user', 'editor'],
      default: 'user',
    },
    password: String,
  },
  {
    versionKey: false,
  },
);

export const UserModel = mongoose.model('User_Credentials', UserSchema);
