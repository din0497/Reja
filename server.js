const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://rivojidin97:Mustafo2022@cluster0.vzhu7ix.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection MongoDB");
    } else {
      console.log("MongoDB connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, () => {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
