let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should count the total of two sms and return total cost of sms ', function(){

        assert.equal(totalPhoneBill("sms, sms"), "R1.30");
    });
    it("it should count the total  of two phone calls and return total of the phone bill", function(){

        assert.equal( totalPhoneBill("call, call"), "R5.50" );
    });

    it("it should count the total  of two phone calls and sms's and return total", function(){

        assert.equal( totalPhoneBill("call, sms, call, sms, sms"), "R7.45" );
});


});
