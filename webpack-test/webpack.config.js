const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve("./src", "dijkstra.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Dijkstra.js",
    library: {
      name: "Dijkstrajs",
      type: "var",
    },
  },
};
