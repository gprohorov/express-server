module.exports = server => {
    const ItemsList = require("../controller/item.controller")

    var router = require("express").Router();

    router.get("/", ItemsList.findAll);

    router.post("/", ItemsList.create);

    server.use('/api/v1/items', router);

}
