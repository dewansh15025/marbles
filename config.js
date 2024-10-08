require('dotenv').config()

module.exports ={
    "database":{
         "host": process.env.DB_HOST,
         "port": process.env.DB_PORT,
         "user": process.env.DB_USERNAME,
         "password": process.env.DB_PASSWORD,
         "database": process.env.DB_NAME
    },
    "pool": {
     "max": 5,
     "min": 0,
     "acquire": 30000,
     "idle": 10000
   }
 };