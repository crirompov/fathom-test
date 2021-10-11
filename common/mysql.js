const { config } = require('dotenv')
const Sequelize = require('sequelize')

const SETTINGS = config()

console.log("###################")
console.log("datos de conexión:")
console.log("Nombre de la BD: "+SETTINGS.parsed.DB_DATABASE)
console.log("Usuario de la BD: "+SETTINGS.parsed.DB_USERNAME)
console.log("Host de la BD: "+SETTINGS.parsed.DB_HOST)
console.log("Dialect: "+SETTINGS.parsed.DB_DIALECT)
console.log("Puerto de la BD: "+SETTINGS.parsed.DB_PORT)
console.log("datos de la pool:")
console.log("Máximo conexiones: "+SETTINGS.parsed.DB_POOL_MAX)
console.log("Mínimo conexiones: "+SETTINGS.parsed.DB_POOL_MIN)
console.log("Latencia: "+SETTINGS.parsed.DB_POOL_IDLE)
console.log("###################")




const sequelize = new Sequelize(
    SETTINGS.parsed.DB_DATABASE,
    SETTINGS.parsed.DB_USERNAME,
    SETTINGS.parsed.DB_PASSWORD,
    {
        host: SETTINGS.parsed.DB_HOST,
        dialect: 'mysql',
        port: SETTINGS.parsed.DB_PORT,
        pool: {
            max: Number.parseInt(SETTINGS.parsed.DB_POOL_MAX),
            min: Number.parseInt(SETTINGS.parsed.DB_POOL_MIN),
            idle: SETTINGS.parsed.DB_POOL_IDLE
        },
        timestamps: false
	}
)


module.exports = sequelize