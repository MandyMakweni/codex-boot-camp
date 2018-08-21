let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should Count All registration that are from town(Stelenbosch) and return their number', function(){

        assert.equal(1,countAllFromTown("CA 124 , CY 567 , CA 345 , CJ 456, CL 341", "CL"));
    });
    it('Its should return nothing if the registration numbers are not from Stelenbosch', function(){

        assert.equal(0,countAllFromTown("CA 124 , CY 567 , CA 345 , CJ 456, CJ 341", "CL"));
    });
});
