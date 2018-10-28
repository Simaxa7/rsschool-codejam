const assert = require('assert');

const recursion = require('./src/index');

describe('Tests', () => {
  it('1', () => {
    const input = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
    const output = [[100], [90, 120], [70,99,110,130]];  
    assert.equal(JSON.stringify(input), JSON.stringify(output));
  });

  it('2', () => {
	
	const input = recursion(
  {"value": 100,
        "left": {"value":90,
                     "left": {"value":70, 
                                    "left":{"value":70},
                                    "right":{"value":99}},
                  },
        "right":{ "value":99,
                      "right":{"value":120,
                                    "left":{"value":110},
                                "right":{"value":130}
                              }
                  }
  });
	const output = [ [ 100 ], [ 90, 99 ], [ 70, 120 ], [ 70, 99, 110, 130 ] ];  
    assert.equal(JSON.stringify(input), JSON.stringify(output));
  });

  it('3', () => {
	
	const input = recursion(
  {"value": 100,
        "left": {"value":90,
                     "left": {"value":70, 
                                    "left":{"value":70}},
                  },
        "right":{ "value":99,
                      "right":{"value":120,
                                    "left":{"value":110}
                                
                              }
                  }
  });
	const output = [ [ 100 ], [ 90, 99 ], [ 70, 120 ], [ 70, 110 ] ];  
    assert.equal(JSON.stringify(input), JSON.stringify(output));
  });


});



      // -[[100],[90,99],[70,120],[null,null,null,null]]
      // +[[100],[90,99],[70,120],[70,99,110,130],[null,null,null,null]]
