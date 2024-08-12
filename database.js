const config = require('./config.js');
const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');

module.exports = db = {};

async function initialize() {
    try {

        // first action is to create a db named initialize-db

        const { host, port, user, password, database } = config.database;
        
        const pool =  mysql.createPool({ host, port, user, password });

        pool.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);


        // second action: connect to db using Sequelize

        const sequelize = new Sequelize(database, user, password, {
            host: host,
            dialect: 'mysql',
        });

        db.sequelize = sequelize;

        // third action: init the Employee model and add it to the exported db object
        db.Notes = require('./models/notes');

        // sync all models with database
        sequelize.sync();

    } catch (e) {
        console.log(e);
    }
}



initialize();