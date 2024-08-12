import request from 'supertest';
import {expect} from'chai';
const dummyData={"title":"asd","body":"qwe"};
var id ="";
describe('Post API tests using supertest', () => {
	const baseurl = 'http://localhost:4151';
	it('should successfully pass the test for post api', (done) => {
		request(baseurl)
			.post('/addNote')
			.send(dummyData)
			 .set('Accept', 'application/json')
			 .set('Content-Type', 'application/json')
			.end(function(err, res) {
				expect(res.statusCode).to.be.equal(200);
				expect(res.body.content.title).to.be.equal("asd");
				expect(res.body.content.body).to.be.equal("qwe");
				expect(res.body.content.uuid).not.to.be.null;
				expect(res.body.content.createdAt).not.to.be.null;
				done();
        id=res.body.content.uuid;
			});
	});
});


describe('Restful Api with some before hand work', () => {
  const baseurl = 'http://localhost:4151';
  var allNotes;


  before(function(done) {
      request(baseurl)
          .get('/allNotes')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end(function(err, res) {
              expect(res.statusCode).to.be.equal(200);
              expect(res.body.msg).to.be.equal("All notes have been fetched successfully!");
              allNotes = res.body.content;
              if (err) {
                  throw err;
              }
              done();
          });
  });

  it('should successfully fetch note by id', (done) => {
    request(baseurl)
        .get(`/notes/${allNotes[0].uuid}`)
        .send({"title":"changed1","body":"changed1"})
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
            expect(res.statusCode).to.be.equal(200);
            expect(res.body.content.uuid).to.be.equal(allNotes[0].uuid);
            
            
            if (err) {
                throw err;
            }
            done();
        });
});

it('should successfully fetch note by title substring', (done) => {
  request(baseurl)
      .get(`/notes/?title=cha`)
      .send()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end(function(err, res) {
        console.log(res)
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.content.length).to.be.greaterThanOrEqual(1);
          
          if (err) {
              throw err;
          }
          done();
      });
});

  it('should successfully edit a note', (done) => {
      request(baseurl)
          .put(`/notes/${allNotes[0].uuid}`)
          .send({"title":"changed1","body":"changed1"})
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end(function(err, res) {
              expect(res.statusCode).to.be.equal(200);
              expect(res.body.content.uuid).not.to.be.null;
             
              if (err) {
                  throw err;
              }
              done();
          });
  });
  it('should show 404 status code for random note id', (done) => {
      request(baseurl)
          .get('/notes/' + 'randomeId')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end(function(err, res) {
              expect(res.statusCode).to.be.equal(404);
              if (err) {
                  throw err;
              }
              done();
          });
  });
});