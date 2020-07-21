// SCHEMA FOR STUDENT "CLASS"

// We interact through mongoose, never just mongoDB (for our purposes)

const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
});

// student - collection in database
// StudentSchema - inside student, required field 
const Student = mongoose.model('student', StudentSchema)

// export so others can use student
module.export = Student;
