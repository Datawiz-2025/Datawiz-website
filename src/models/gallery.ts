import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
    evenetName: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: true,
    }
});

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);
export default Gallery;