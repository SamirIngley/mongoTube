// CREATE Tests
const Student = require('../app/student');
const assert = require('assert');

describe('Create Tests', () => {
    it('create user in DB', () => {
        // tests should be written in such a way that never fails
        // false values fail
        // assert(false);
        const sam = new Student({ name: "Sam" });
        sam
            .save()
            .then(() => {
                assert(!sam.isNew) // if successful, is New set to false, so ! will reverse it
            }) // if save is successful
            .catch(() => { // if unsuccessful
                console.log("error");
            });
    });// it block is exactly same as describe
});


// READ Tests
describe("Read Tests", () => {
    let reader;
    beforeEach(done => {
        reader = new Student({name: "Reader"})
        reader.save() // need to save to DB
            .then(() => {
                done(); // wait til operations are done then move on to other tests
            })
    })

    it("Read a user: Reader", (done) => {
        Student.find({name: "Reader"})
            .then((students) => {
                // id is BSON
                assert(reader._id.toString() === students[0]._id.toString());
                done();
            })
    })
})


// DELETE Tests
describe("Delete Tests", () => {
    let deleter;
    beforeEach((done) => {
        deleter = new Student({name: "Deleter"})
        deleter.save().then(() => done());
    });
    
    // referencing read test
    it ("A delete test for deleter", () => {
        Student.findByIdAndDelete(deleter._id) // should have been deleted here
            .then(() => Student.findOne({ name: "Deleter" })) // let's check - if search for object, should be null 
            .then((student) => {
                assert(student === null);
                done();
            })
            
    })
})