let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('The countAllPaarl function', function(){

    it('should count All registration that are from Paarl and return their number', function(){

        assert.equal(countAllPaarl( 'CA 182736,CY 523519,CJ 812328'), 1);
    });
    it('should count all that are not from Paarl and return their number', function(){

        assert.equal(countAllPaarl( 'CJ 182736,CJ 523519,CJ 812328'), 3);
    });
});
