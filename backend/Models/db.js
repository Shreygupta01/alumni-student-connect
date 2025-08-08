const mongoose = require('mongoose');


const mongo_uri = process.env.MONGO_URI;

const connectDb = async ()=>{

   await  mongoose.connect(mongo_uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
}
export default connectDb;