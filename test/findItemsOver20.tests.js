let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function(){

    it('should count find Items that are Over 20 and return their quantity', function(){
      var threshold = 12;
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

        assert.deepEqual( findItemsOver20(itemList, threshold), [{name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},]);
    });

    it('should find Items that not Over 20', function(){
      var threshold = 21;
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

        assert.notEqual( findItemsOver20(results,), [{name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},]);
    });
});
