const { Thought, User } = require('../models');

module.exports {
    
    getThoughts(req, res) {
        Thought.find()
        .then((dbThoughtData) => {
            res.json(dbThoughtData);
        })
        .catch((err) => res.status(500).json(err));
        },
    }

