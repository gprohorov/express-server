const db = require("../model")
const Item = db.items;

exports.findAll = (req, res) => {
    console.log(" Find all request");
    Item.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send(
                {message: err.message || " Smth wrong"}
            );
        });
};

exports.create = (req, res) =>{
    if (!req.body.name) {
        res.status(400),send(
            {message: "Content is empty"}
        );
    }

    const item = new Item ({
        name: req.body.name,
        description: req.body.description
    });
    item.save(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the item."
            });
        });



};
