const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({

});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;