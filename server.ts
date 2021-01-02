import * as express from 'express';
import * as path from 'path';
import * as http from 'http';

var app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/sounds', express.static(path.resolve(__dirname, 'sounds')));
var server = http.createServer(app);
console.log('Server is online!');
server.listen(8000);

export interface Car{
    wheels: number;
    name: string;
}