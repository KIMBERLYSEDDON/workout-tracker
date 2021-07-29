const router = require("express").Router();
const { Workout } = require("../../models");

router.get("/", (req, res) => {
 
    Workout.aggregate([

        {$addFields: {
            totalDuration: { $sum: "$exercises.duration"}
        }}
        
    ]).sort({ day: -1 }).limit(1)
    .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.post("/", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.get("/range", (req, res) => {
    Workout.aggregate([

        {$addFields: {
            totalDuration: { $sum: "$exercises.duration"}
        }}
        
    ]).sort({ day: -1 }).limit(7)

    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})


module.exports = router;