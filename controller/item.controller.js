const db = require("../model");
const Item = db.items;

exports.findAll = (req,res) => {

    Item.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(
                {message: err.message}
            );
        });
};

exports.create = (req, res) => {

};

// Find a single Item with an id
exports.findOne = (req, res) => {

};

// Update a Item by the id in the request
exports.update = (req, res) => {

};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {

};
