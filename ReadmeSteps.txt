// MERN

// Mongodb
// Express js
// React   // Angular
// Node js


1. create new folder mern_crud
2. npm init -y to obtain package.json
3. open mern_crud into vscode
4. npm i express mongoose nodemon
	npm install express - to obtain node folder
5. create index.js
6. npm install nodemon and config into package.json "start:nodemon index" then npm run start
	- else use node index from terminal

7. write a code from index.js
	const express = require("express");
	const app = express();
	app.use("/",(req,res)=>{
    		res.json("Hi Friends")
	})
	//Listen Port
	app.listen(5000,()=>{
    		console.log('====================================');
    		console.log("Server Started on 5000");
    		console.log('====================================');
	})

8. npm run start

/********************************************/

/*****For React


1. npx create-react-app mern-app
2. cd mern-app
3. npm start

