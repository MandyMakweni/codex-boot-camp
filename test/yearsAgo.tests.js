let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should count how many years ago', function(){
        assert.equal(2000, yearsAgo(18));
    });
    it(' should tell if how many yearsAgo', function(){

        assert.equal(1990, yearsAgo(28));
    });
});
