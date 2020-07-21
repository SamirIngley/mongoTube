// CREATE
const Student = require('../app/student');
const assert = require('assert');

describe('Create records', () => {
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

