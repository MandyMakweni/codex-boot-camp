let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('should count transport fee in the morning', function(){

        assert.equal(transportFee("morning"), "R20");
    });
    it('should count transport fee in the afternoon', function(){

        assert.equal( transportFee("afternoon"), "R10" );
    });
});
