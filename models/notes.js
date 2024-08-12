const { Sequelize, DataTypes } = require('sequelize'); 
const db = require('../database.js');

const  sequelize = db.sequelize;

/**
 * @swagger
 * definitions:
 *   Stock:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - currentPrice
 *       - lastUpdate
 *     properties:
 *       id:
 *         type: number
 *       name:
 *         type: string
 *       currentPrice:
 *         type: number
 *       lastUpdate:
 *         type: number
 *   Stocks:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Stock'
 */

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 })

const Note = sequelize.define("note", {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // created_at: {
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW,
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    // }
 },{
    freezeTableName: true, // Model tableName will be the same as the model name
    //timestamps: false,
    underscored: true
  });

module.exports = Note;