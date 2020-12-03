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
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name can not be empty!" });
        return;
    }

    // Create an Item
    const item = new Item({
        name: req.body.name,
        description: req.body.description
    });

    // Save Item in the database
    item
        .save(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });

};

// Find a single Item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Item with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Item with id=" + id });
        });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Item with id=${id}. Maybe item was not found!`
                });
            } else res.send({ message: "Item was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Item with id=" + id
            });
        });
};

// Delete an Item with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Item.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
                });
            } else {
                res.send({
                    message: "Item was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Item with id=" + id
            });
        });
};

// Delete all Items from the database.
exports.deleteAll = (req, res) => {

};
