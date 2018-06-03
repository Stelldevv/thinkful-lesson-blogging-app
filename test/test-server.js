const chai = require('chai');
const chaiHttp = require('chai-http');
const {app, closeServer, runServer} = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Blogging Application', function() {

    before(function() {
      return runServer();
    });

    after(function() {
      return closeServer();
    });

  it('should list posts on GET', function() {
    // since we're returning `chai.request.get.then...`
    // we don't need a `done` call back
    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.length).to.be.above(0);
      })
  }

  it('should add a post on POST', function() {
    // since we're returning `chai.request.get.then...`
    // we don't need a `done` call back
    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
        expect(res).to.have.status(200);
        // check other stuff
      })
  }

  it('should update a post on PUT', function() {
    // since we're returning `chai.request.get.then...`
    // we don't need a `done` call back
    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
        expect(res).to.have.status(200);
        // check other stuff
      })
  }

  it('should delete a post on DELETE', function() {
    // since we're returning `chai.request.get.then...`
    // we don't need a `done` call back
    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
        expect(res).to.have.status(204);
        // check other stuff
      })
  }
}