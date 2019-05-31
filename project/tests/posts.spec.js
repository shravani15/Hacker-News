const request = require('request-promise');

describe('Posts Modules', function(){

  it('Creates a post when a req is sent to /addpost', function(){
    // testing code here
    // todo: Incomplete
    return request('http://localhost:8080/addpost?authtoken=a76abca78a8acabda87fbfb8')
    .then(function(res){
      expect(res).toBeDefined();
      expect(res.message).toEqual('Success')
      //assert(res.responseType === 500 );
      //assert(res.message === "Needs authentication");
    })
  })

  it('Sends an error in the response when a req is sent to /addpost without logging in', function(){
    // Send a request without any authenticatio token 
    // The response has to be a failure with proper error message that says
    // "Needs authentication"

    return request({
      method: 'POST',
      uri: 'http://localhost:8080/addpost',
      body: {},
      json: true // Automatically stringifies the body to JSON
    })
    .then(function(res){
      expect(res).toBeNotDefined();
    })
    .catch(RES=>{
      expect(RES.statusCode).toEqual(500);
    })

  })

});