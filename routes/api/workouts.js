const router = require("express").Router();
const { Workout, Exercise, Stats } = require("../../models");

router.get("/", (req, res) => {

    Workout.find().sort({ date: -1 }).limit(1)
    .then(dbWorkout => {
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

router.put("/:id", ({ body }, res) => {
    Exercise.create(body)
    .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbExercise => {
        res.json(dbExercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;