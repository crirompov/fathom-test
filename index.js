const express = require('express')
const config = require('./config')
const sequelize = require('./common/mysql')
const helmet = require("helmet");
var path = require("path")
var cors = require("cors");

const router = require('./routers')

let _server

//Check database connection
sequelize.authenticate().then(err => {
	if (err) {
	   console.log('Error trying to connect to database');
	} else {
	   console.log('successful connection');
	}
});

const server = {
	start(){
		const app = express()
		
		app.use(helmet())

		app.use(cors())

		app.use("/", express.static(path.join(__dirname + "/public")))

		config(app)

		router(app)
		

 		_server = app.listen(process.env.PORT, () => {
		 	if(process.env.NODE_ENV !== "test"){
		 		console.log("Server running... http://localhost:9000")
		 	}
		}) 
	},
	close(){
		_server.close();
	}
}


 if(!module.parent){
	server.start();
} 
module.exports = server