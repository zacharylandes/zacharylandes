const assert = require('chai').assert
const quickSort = require('../quick-sort')

describe('quick sort', function() {
    it('order using quickSort', function(){
      assert.equal(quickSort([1,6,7,2,4,3,234]), [1,2,3,4,6,7,234])
    })
})
