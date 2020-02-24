const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const authRouter = require("../auth/auth-router.js");
const childrenRouter = require("../children/children-router.js");
// const usersRouter = require("../users/users-router.js");
const entriesRouter = require("../entries/entries-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api", childrenRouter);
// server.use("/api", usersRouter);
server.use("/api", entriesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
