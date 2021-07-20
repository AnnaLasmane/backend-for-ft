import mongoose from 'mongoose';


const imageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    labels: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const image = mongoose.model('Images', imageSchema);

export default image;