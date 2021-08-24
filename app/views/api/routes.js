const router = require("express").Router();
const fetch = require("node-fetch");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send(`
     /gif/kiss
     /gif/hug
     /gif/smile
     /gif/sleep
     /gif/yawn
     /gif/search/<text>`);
});

router.get("/gif/kiss", (req, res) => {
  let query = "anime kiss";
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

router.get("/gif/hug", (req, res) => {
  let query = "anime hug";
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

router.get("/gif/sleep", (req, res) => {
  let query = "anime sleep";
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

router.get("/gif/smile", (req, res) => {
  let query = "anime sleep";
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

router.get("/gif/yawn", (req, res) => {
  let query = "anime yawn";
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

router.get("/gif/search/:query", (req, res) => {
  let query = req.params.query;
  let finder = query.split(/ +/).join("+");
  let link = `https://g.tenor.com/v1/search?q=${finder}&key=${process.env.tenorApiKey}&limit=10000`;

  fetch(link)
    .then((res) => res.json())
    .then((json) => {
      let ar = [];
      json.results.forEach((r) => {
        r.media.forEach((m) => {
          ar.push(m.gif.url);
        });
      });
      const response = ar[Math.floor(Math.random() * ar.length)];
      res.json({ url: response, Credits: "Powered by tenor" });
    });
});

module.exports = router;
