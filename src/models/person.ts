import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: true,
    },
});

const Person = mongoose.models.Person || mongoose.model("Person", personSchema);
export default Person;