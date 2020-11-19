module.exports = server => {

    const items = require("../controller/item.controller");
    var router = require("express").Router();

    router.get("/", items.findAll);

    router.post('/', items.create);

    // Retrieve a single Item with id
    router.get("/:id", items.findOne);

    // Update a Item with id
    router.put("/:id", items.update);

    // Delete a Item with id
    router.delete("/:id", items.delete);

    // Delete a new Item
    router.delete("/", items.deleteAll);



    server.use('/api/v1/items', router);

}
