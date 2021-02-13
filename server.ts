import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as fs from 'fs';


let seqRouter = express.Router();
seqRouter.get('/:fname', (req, res) => {
    let fname = req.params.fname + '.json';
    if(fs.existsSync(path.resolve(__dirname, 'sequences', fname))){
        res.setHeader('Content-Type', 'application/json');
        res.sendFile(path.resolve(__dirname, 'sequences', fname));
    }else{
        res.status(404).send('sequence does not exist');
    }
});


var app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/sounds', express.static(path.resolve(__dirname, 'sounds')));
app.use('/sequence', seqRouter)
var server = http.createServer(app);
console.log('Server is online!');
server.listen(8000);

export interface Car{
    wheels: number;
    name: string;
}

