# 📝Simple Note application
RESTful API for a simple note-taking application using Node.js and Express. This application
will allow for creating, fetching, querying, and updating notes without user management. Swagger UI is implemented for documentation.

# Getting started

## tech stack
node.js, mysql

### manually
1) install mysql 5.7,node js on your machine
2) set environment variables in .env file if you want to change otherwise default ones also work.
3) npm install
4) node app.js in project directory
5) swagger api will be available at "http://localhost:4151/api-docs"
### docker
1) install docker and docker compose
2) go to project directory in cmd and type "docker compose up"
3) swagger api will be available at "http://localhost:4151/api-docs"

### Implemented APIs
- [x] POST /notes/: Create a new note.
- [x] GET /notes/: Fetch a note by its primary key.
- [x] GET /notes?title=<substring>: Query notes by title substring.
- [x] PUT /notes/: Update an existing note.

### Additional features
- [x] Docker.
- [x] Swagger-partially implemented with post and put request not working.
- [x] Supertest for testing endpoints

## for testing
1) start node app.js in one terminal.
2) parallely run "npm test" in another terminal.

# 📃 License
Product is freely available for use under MIT license

# 🗨️ Contacts
For more details about the products, services, or any general information, feel free to reach out.
Email: dewansh15025@iiitd.ac.in

