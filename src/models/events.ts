import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    time:{
        type: String,
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: String,
        required: true,
    },
    guestName:{
        type: [String],
        required: true
    },
    guestDetails:{
        type: [String],
        required: true,
    },
    guestImages:{
        type: [String],
        required: true,
    },
    collaborators:{
        type: [String],
    },
    collaboratorsDetails:{
        type: [String],
    },
    collaboratorsImages:{
        type:[String],
    },
    sponsors:{
        type: [String],
    },
    sponsorsDetails:{
        type:[String],
    },
    sponsorsImages:{
        type: [String],
    },
    regQR:{
        type: [String]
    },
    venue:{
        type: String,
    },
    eventImage:{
        type: String,
        required: true
    }
});


const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
export default Event;