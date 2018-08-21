let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Janine correctly', function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });
    it('should greet Lilo correctly', function(){
        
        assert.equal('Hello, Lilo', greet('Lilo'));
    });
});
