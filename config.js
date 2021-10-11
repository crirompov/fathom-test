const bodyParser = require('body-parser')
const cors = require('cors')
const { config } = require('dotenv')

const SETTINGS = config()


module.exports = app => {
    app.disabled("x-powered-by") 
    app.set("env", SETTINGS.parsed.ENV)
    app.set("config", SETTINGS.parsed)
    app.set("port", SETTINGS.parsed.PORT)
    app.locals.env = app.get("env")
    app.locals.config = app.get("config")


    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded( { extend: false }))

    app.use(cors())
}