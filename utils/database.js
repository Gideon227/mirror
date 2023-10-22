import mongoose from "mongoose";

let isConnected = false

export const connectToDB = () => {
    mongoose.set('strictQuery', true);
     
    if(isConnected){
        console.log('Mongodb is connected')      
    }

    try {
        mongoose.connect(process.env.MONGODB_URI, {
                dbName: "shallom_project",
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
        
        isConnected = true
        console.log('Mongodb connection is successful')

    } catch (error) {
        throw new Error(error)
    }
}