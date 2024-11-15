import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const USER = process.env.MONGO_INITDB_ROOT_USERNAME;
    const PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
    const connection = await mongoose.connect(
      `mongodb://${USER}:${PASSWORD}@mongodb:27017/chat-app?authSource=admin`
      //   {
      //     useNewUrlParser: true,
      //     useUnifiedTopology: true,
      //   }
    );

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
