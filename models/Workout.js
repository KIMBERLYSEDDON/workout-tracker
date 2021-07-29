const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
},
exercises: [
    {
    type: {
       type: String,
       trim: true,
       required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    weight: {
        type: Number
    },
    sets: Number,

    reps: Number,

    distance: Number,

    duration: {
        type: Number, 
        required: true
    }
}]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;