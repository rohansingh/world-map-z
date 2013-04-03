var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
  var path = (req.url == '/') ? '/index.html' : req.url;
  path = __dirname + '/public' + path;
  console.log(path)

  fs.exists(path, function (exists) {
    if (!exists) {
      res.writeHead(404);
      return res.end('File not found')
    }

    fs.readFile(path,
      function (err, data) {
        if (err) {
          res.writeHead(500);
          return res.end('Error');
        }

        res.writeHead(200);
        res.end(data);
      });
  });
});

server.listen(process.env.PORT || 8000);
