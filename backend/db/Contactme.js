import mongoose from "mongoose";

const contactmeSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
})
const contactmeModel = mongoose.model('contactme', contactmeSchema);

export default contactmeModel;