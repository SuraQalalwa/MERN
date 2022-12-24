const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    playerName: {
        type:String,
        required: [true,
            "Player name required"
        ],
        minlength:[2,"Name must at least 2 characters in length"]
    },
    position: {
        type: String,
    }
    },
    {timestamps: true}
    )

module.exports.Team = mongoose.model('Team', TeamSchema);