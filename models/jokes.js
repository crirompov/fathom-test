const sequelize = require('../common/mysql.js');
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

const jokes = sequelize.define(
	'jokes',
	{
		id: {
			type: Sequelize.BIGINT(11),
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
        joke_type: {
            type: DataTypes.BIGINT,
            allowNull: true,
            references: {
                model: 'joke_types',
                key: 'id'
            }
        },
        active: {
            type: DataTypes.INTEGER(1).UNSIGNED,
            allowNull: false,
            defaultValue: 1
        },
		setup: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
        punchline: {
            type: Sequelize.STRING(255),
            allowNull: false,
            defaultValue: 1
        },
		created_at: {
			type: 'TIMESTAMP',
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		},
		updated_at: {
			type: 'TIMESTAMP',
			defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
		}
	},
	{
		timestamps: false,
		freezeTableName: true 
	}
)

module.exports = jokes