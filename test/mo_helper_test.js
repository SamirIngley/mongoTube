// HELPER FUNCTIONS, no tests

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true})

// check connection (promise)
mongoose.connection
    .once('open', () => console.log('Connected')) // listener to open
    .on('error', () => {
        console.log("Your Error: ", error)
    });

    