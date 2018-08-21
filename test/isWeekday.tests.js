let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should check if today is a weekday and then it will return false if Saturday is not a weekday', function(){
        assert.equal( isWeekday('Saturday'), false);
    });
    it('should return true if Monday is a weekday', function(){

        assert.equal( isWeekday('Monday'), true);
    });
});
