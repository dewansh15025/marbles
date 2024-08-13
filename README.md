# 📝Simple Note application
RESTful API for a simple note-taking application using Node.js and Express. This application
will allow for creating, fetching, querying, and updating notes without user management. Swagger UI is implemented for documentation.

## tech stack
node.js, mysql

### manual build
1) install mysql 5.7,node js on your machine
2) set environment variables in .env file if you want to change otherwise default ones also work.
3) npm install
4) node app.js in project directory
5) swagger api will be available at "http://localhost:4151/api-docs"
### docker build - quick start 
1) install docker and docker compose
2) go to project directory in cmd and type "docker compose up"
3) swagger api will be available at "http://localhost:4151/api-docs"

### Implemented APIs
- [x] POST /notes/: Create a new note.
- [x] GET /notes/: Fetch a note by its primary key.
- [x] GET /notes?title=<substring>: Query notes by title substring.
- [x] PUT /notes/: Update an existing note.
- [x] GET /allNotes/: Fetch all notes in db.

### Additional features
- [x] Docker.
- [x] Swagger-working for get, not working for put and post, documentation for all apis available.
- [x] Supertest for testing endpoints

## for testing
1) start node app.js in one terminal.
2) parallely run "npm test" in another terminal.

# 📃 License
Product is freely available for use under MIT license

# 🗨️ Contacts
For more details about the products, services, or any general information, feel free to reach out.
Email: dewansh15025@iiitd.ac.in

