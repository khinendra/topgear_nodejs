var net = require('net');
var server = net.createServer(function(conn) { //'connection' listener
  console.log('client connected');
  conn.on('end', function() {
    console.log('client disconnected');
  });
  conn.write('hello\r\n');
  conn.pipe(conn);
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});