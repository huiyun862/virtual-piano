# Virtual-piano
This is a basic piano with 7 keys that you can play on your browser or phone. 

## Libraries 
Node version 12 is used. 

To install libraries, run
```
npm install
```
## Compiling
Typescript is used for frontend code and needs to be compiled into Javascipt to run in the browser. 

To compile, run 
```
npx webpack
```
## Running
To run the server, run 
```
npx ts-node server
```
This will start a server running on port 8000. Connect to it using a browser by going to `localhost:8000`.

To interact with the piano, use the mouse, touchscreen, or keys: [z, x, c, v, b, n, m]. 

<img src="images/Piano.PNG" width="300px" >