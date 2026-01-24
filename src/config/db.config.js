import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const dbUserConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI1)
        .then((e) => {
            console.log(
                `User - MongoDB Atlas connected: PORT: ${e.connection.port}, name: ${e.connection.name}`
            );
        })
        .catch(err => console.error("User DB connection error:", err))
}

// dbUserConnection.on('connected', () => {
//     console.log(
//         `User - MongoDB Atlas connected: PORT: ${dbUserConnection.port}, name: ${dbUserConnection.name}`
//     );
// })
// dbUserConnection.on('error', (err) => {
//     console.error("User DB connection error:", err);
// })