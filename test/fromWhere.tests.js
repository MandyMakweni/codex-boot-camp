let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should check  all  the ragistration number that are from Cape Town and return their regNumber', function(){

        assert.equal(fromWhere("CA 123"), "Cape Town");
    });
    it('it shoul check all the regNumber from Bellville and it will pass if the reigistration is true', function(){

        assert.equal( fromWhere("CY 900 212"), "Bellville");
    });
});
