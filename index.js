const express = require("express");
const app = express();
const proxyRouter = require("./routes/proxy");

// Middleware
app.use(express.json());

// Routes
app.use("/proxy", proxyRouter);

app.listen(3000, () => {
  console.log("Proxy server started on port 3000");
});
