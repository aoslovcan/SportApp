let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let cors = require("cors");
let { json } = require("express");

//Server create
const server = express();

server.listen("3001", () => {
  console.log("Server started on port 3001");
});

//Include json

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// aprove connection to server
server.use(cors());

//get dara from server
server.get("/feed", (req, res) => {
  request(
    {
      url:
        "https://private-anon-509354d9a5-technicaltaskapi.apiary-mock.com/feed",
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.end(JSON.stringify(body));
      //console.log(JSON.stringify(body));
    }
  );
});

server.get("/posts/:id", (req, res) => {
  console.log("Request URL:", req.originalUrl);
  console.log("Request URL:", req.params.id);

  data = req.body;
  request(
      { url: 'https://private-anon-509354d9a5-technicaltaskapi.apiary-mock.com/post/'+req.params.id+'' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
        res.end(JSON.stringify(body));
        //console.log(JSON.stringify(body));
      }
    )
});
