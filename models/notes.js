const { Sequelize, DataTypes } = require('sequelize'); 
const db = require('../database.js');

const  sequelize = db.sequelize;

/**
 * @swagger
 * definitions:
 *   Note:
 *     type: object
 *     required:
 *       - title
 *       - body
 *     properties:
 *       uuid:
 *         type: string
 *       title:
 *         type: string
 *       body:
 *         type: string
 *       createAt:
 *         type: string
 *         format: date-time
 *       lastUpdatedAt:
 *          type: string
 *          format: date-time
 *   Notes:
 *     type: array
 *     items:
 *       $ref: '#/definitions/Note'
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