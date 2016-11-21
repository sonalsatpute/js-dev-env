import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/*eslint-disable no-console*/

const  port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id": 1, "firstName": "Sonal", "lastName": "Satpute", "email": "sonal@readgreenclean.com"},
    {"id": 2, "firstName": "Saurabh", "lastName": "Mahajan", "email": "saurabh@readgreanclean.com"},
    {"id": 3, "firstName": "Swapnil", "lastName": "Khare", "email": "swapnil@readgreenclean.com"}
  ]);
});

app.listen(port, function (err){
  if (err){
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
});
