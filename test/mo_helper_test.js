// HELPER FUNCTIONS, no tests

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // ES6 - promise

before(done => { // before any test
    mongoose.connect("mongodb://localhost/mongotube", {useNewUrlParser: true});
    // check connection (promise)
    mongoose.connection
        .once('open', () => {
            // console.log('Connected');
            done(); // done w connection, move on to next test
        }) // listener to open
        .on('error', () => {
            console.log("Error: ", error)
        });
});

// drop whole collection
beforeEach(done => {
    mongoose.connection.collections.students.drop(() => {
        console.log("Drop success")
        done();
    });
})