module.exports = mongoose => {
  const Item = mongoose.model(
      "item", mongoose.Schema(
          {
              name: String,
              description: String
          },
          {timestamps: true}
      )
  );
  return Item;
};
