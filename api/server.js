const express = require('express');

const server = express();

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("*", (req, res, next) => {
  res.status(err.status || 500).json({
    message: "Not found, sorry!",
    err: err.message,
  })
})

module.exports = server;
