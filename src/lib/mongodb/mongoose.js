import mongoose from 'mongoose';
 let initialized = false;
 export const connect = async () => {
   mongoose.set('strictQuery', true);
   if (initialized) {
     console.log('MongoDB already connected');
     return;
   }
   try {
     await mongoose.connect(process.env.MONGO_URI, {
       dbName: 'next-movieDb-clerk',
       useNewUrlParser: true,
       useUnifiedTopology: true,
     }); 
     initialized = true;
     console.log('MongoDB connected');
   } catch (error) {
     console.log('MongoDB connection error:', error);
   }
 };