let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should Check Registrations if it is Mpumalanga and return false if its not from Mpumalanga', function(){
        assert.equal( regCheck('GP 30 30 30'), false);
    });
    it('should if my test will know if it is from Mpumalanga and return true if it is from mpumalanga', function(){

        assert.equal( regCheck('MP 563 6 230'), true);
    });
});
