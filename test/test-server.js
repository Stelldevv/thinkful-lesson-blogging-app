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

    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.length).to.be.above(0);
      })
  }

  it('should add a post on POST', function() {

  	const newPost = {
  		title: 'testTitle',
  		content: 'These are words.',
  		author: 'Joshua Stelly'
  	};
  	const expectedKeys = ['title','content','author'];

  	return chai.request(server)
  	.then(function(res){
  		expect(res).to.have.status(201);
  		expect(res).to.be.json;
  		expect(res.body).to.have.all.keys(expectedKeys);
  		})
  	}
  }

  it('should update a post on PUT', function() {

    return chai.request(server)
      .get('/blog-posts')
      .then(function(res) {
      	const updatedPost = {
      		title: 'updatedTitle',
      		content: 'These are updated words.'
      	}
      return chai.request(app)
      	.put(`/blog-posts/${res.body[0].id}`)
      	.send(updatedPost)
      	.then (function(res)){
        	expect(res).to.have.status(200);
      	}
      })
  }

  it('should delete a post on DELETE', function() {

    return chai.request(server)
    	.get('/blog-posts')
      	.then(function(res) {
      		return chai.request(app)
      		.delete(`/blog-posts/${res.body[0].id}`)
      		.then(function(res){
      			expect(res).to.have.status(204);
      		})
      	})
  }