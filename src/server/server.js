const Express = require('express');

const server = new Express();

//server.set('port', process.env.PORT || 8085);
server.set('port', process.env.PORT || 8085);

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-Type, Accept');
  next();
});
server.use(require('./api'));
server.use((req, res) => {
  res.status(404).end('Not found');
});

server.listen(server.get('port'), () => {
  console.log(`Back-end-Server started @ localhost:${server.get('port')}`);
});

module.exports = server;
