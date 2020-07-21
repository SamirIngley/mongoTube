// SCHEMA FOR STUDENT
// We interact through mongoose, never just mongoDB (for our purposes)

const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    videos: Int16Array,
});

const VideoSchema = new Schema({
    name: String,
    length: Int16Array,
    price: Int16Array
})

const PurchaseSchema = new Schema({
    productID: ObjectId("5f16b236cce6b8441b1ba956"),
    customerID: ObjectId("5f16b25bcce6b8441b1ba957")
})

// student - collection in database
// StudentSchema - inside student, required field 
const Student = mongoose.model('student', StudentSchema)
const Video = mongoose.model('video', VideoSchema)
const Purchase = mongoose.model('purchase', StudentSchema)


// export so other files can use student
module.exports = Student, Video, Purchase;
