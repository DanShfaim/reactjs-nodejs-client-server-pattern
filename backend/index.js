const express = require("express");
const apiRouter = express.Router()
const mongoose = require("mongoose");

const http = require("http");
const cors = require("cors");
const path = require("path");

const { PORT, MONGO_USER, MONGO_PWD, MONGO_ENDPOINT, MONGO_NAME } = require('./config')


const mongoS = `mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_ENDPOINT}/${MONGO_NAME}decision-board`;
mongoose
    .connect(
        mongoS,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB..."));

const app = express();
app.use(cors());

const api = require('./api')
for (service in api) app.use("/api", api[service]);

// app.use("/auth", auth);

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) =>
    res.sendFile(path.resolve(path.join(__dirname, "../build/index.html")))
);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
