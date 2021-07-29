const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now
},
totalDuration: {
    type: Number
},
exercises: [
//     {
//     type: String,
//     name: String,
//     weight: Number,
//     sets: Number,
//     reps: Number,
//     distance: Number,
//     duration: Number
// }
]
});

// WorkoutSchema.methods.getTotalDuration = function() {
//     this.totalDuration = this.exercises.aggregate([
//         { $addField: {
//             totalDuration: {$sum: "$duration"}
//         }}
//     ])
//     return this.totalDuration;
// }
// const agg = Workout.exercises.aggregate( {$addFields: {totalDuration: {$sum: "$duration"}}})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;