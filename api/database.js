import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'project-1';

export const dbConnect = () => {
    return mongoose.connect(
        DB_URL.concat(DB_NAME), 
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true, 
        }, 
        console.log('db connected..')
    );
};
