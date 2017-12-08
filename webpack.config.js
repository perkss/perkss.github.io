const path = require("path");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

module.exports = {
  // Entries have to resolve to files! They rely on Node
  // convention by default so if a directory contains *index.js*,
  // it resolves to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
  },
  plugins: [
  ],
};
