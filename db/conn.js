import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const DB = process.env.DATABASE_URI;

if (!DB) {
  console.error('Error: DATABASE_URI is not set in environment variables.');
  process.exit(1); // Exit the process if the URI is not set
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB, { });
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

export default connectDB;
