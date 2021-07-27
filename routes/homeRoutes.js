const router = require("express").Router();
const db = require("../models")
router.get("/exersice", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = router;