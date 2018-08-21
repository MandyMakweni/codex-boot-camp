
let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

    it('should find items that are over 12 and return their quantity', function(){
      var threshold = 21;
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

        assert.deepEqual( findItemsOver(itemList, threshold), [{name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},]);
    });

    it('should find items that are not over 12', function(){
      var threshold = 12;
      var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

        assert.notEqual( findItemsOver(results), [{name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},]);
    });


    it('should find all items ', function(){
      var results = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
        ];
    var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
];

        assert.notEqual( findItemsOver( itemList), [{name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},]);
    });
});
