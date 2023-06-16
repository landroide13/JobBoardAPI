const mongoose = require('mongoose');

//DB
const jobBoard = 'jobBoard';

//Mongoose Connection
mongoose.connect(`mongodb://localhost:27017/${jobBoard}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))
