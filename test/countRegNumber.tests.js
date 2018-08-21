let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should count registrations numbers return  two registration ', function(){
        assert.equal( countRegNumber( 'CA 182736,CY 523519'), 2);
    });
    it('sholuld return  three registration', function(){

        assert.equal( countRegNumber( 'CA 182736,CY 523519,CJ 812328, CF 8575848'), 4);
    });
})
