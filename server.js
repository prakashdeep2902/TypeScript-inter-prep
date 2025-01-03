// const http = require("http");

// // Create a server
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });

// // Define a port
// const PORT = 3000;

// // Start the server
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

let dbconnection = db.connect("mongodb://localhost:27017/EcomApp.employe");

if (dbconnection.on) {
  console.log(`db has connected`);
}

let port = 3000;
app.post((req, res) => {
  try {
    let { EName, Eemail } = req.body;

    if (Eemail !== "") {
      res.sendstatus(401).json("email dind'nt provide");
    }

    dbconnection.push(EName, Eemail);
    res.sendstatus(200).json({ EName, Eemail });
  } catch (error) {
    res.sendstatus(500).json({ error: `error has occure ${error.msg}` });
  }
});

app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
