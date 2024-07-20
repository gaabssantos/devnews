import mongoose from 'mongoose';

export async function setupMongo() {
  if (mongoose.connection.readyState === 1) return;

  try {
    console.log('⏳ MongoDB connecting...');
    await mongoose.connect(process.env.MONGO as string);
    console.log('🟢 DB connected!');
  } catch (err) {
    console.log(err);
  }
}
