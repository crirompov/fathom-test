const sequelize = require('../common/mysql.js');
const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

const joke_types = sequelize.define(
	'joke_types',
	{
		id: {
			type: Sequelize.BIGINT(11),
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: false,
		},
        active: {
            type: DataTypes.INTEGER(1).UNSIGNED,
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

module.exports = joke_types