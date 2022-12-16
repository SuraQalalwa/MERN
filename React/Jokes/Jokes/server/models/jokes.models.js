const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema(
        {
        setup:{
                type: String,
                required:[true, "Setup is required"],
                minlength:[10,"setup must be at least 10 characters long"]
        },
        punchline:{
                type: String,
                required:[true, "Punchline is required"],
                minlength:[3,"setup must be at least 10 characters long"]
        }
},
{timestamps:true}
);

const Jokes = mongoose.model('Jokes', JokesSchema);
module.exports = Jokes;