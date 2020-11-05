module.exports = mongoose => {
    const Item = mongoose.model(
        "item", mongoose.Schema(
            {
                name: String,
                description: String
            },
            {timestamp: true}
        )
    );
    return Item;
};
