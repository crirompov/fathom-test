# Fathom3 Jokes

## Enviroment
+ Visual Studio Code 1.57.0
+ MysqlWorkbench 8.0.25
+ Mozilla Firefox 93.0
+ Postman 8.6.2
+ MacOS Versión 11.5

## Create Database

1. Create a new user to the new database or use an existing user. In our case, we will use the root user. This option is not recommended  bad for production enviroment.
2. Run '__dirname/database/create-database.sql' on Mysql Workbench or similar.
3. Run '__dirname/database/import_data.sql' on Mysql Workbench or similar.
4. Change database username and password from .env file


## Run project

1. Run 'npm install' in project terminal 
2. Open http://localhost:9000/ in the browser

