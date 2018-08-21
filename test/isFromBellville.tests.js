let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should say this regigistration is from Bellville by returning true if regNumber starts by CY', function(){
        assert.equal( isFromBellville('CY 30 30 30'), true);
    });
    it('should say this registration is not from Bellville if and return false if thr the reg does not starts with CY', function(){

        assert.equal( isFromBellville('CA 563 6 230'), false);
    });
});
