describe('Test Plus', () => {
    it('Function check', () => {
        const act = plus(3, 7);
        const exp = 10;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': 100,
            'value2': 4,
            'expected': 104
        },
        
        {    
            'value1': 555,
            'value2': 555,
            'expected': 1110
        },
        
        {    
            'value1': -5,
            'value2': -1,
            'expected': -6
        }
    ];
    
    for (let testSuite of mock) {
        it(`Test  value1 ${testSuite['value1']}, value2 ${testSuite['value2']}, expected ${testSuite['expected']}`,() => {
            const act = plus(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = plus(undefined, 2);
        assert.isFalse(act);
    });
    
    it('Second value not undefined', () => {
        const act = plus(3, undefined);
        assert.isFalse(act);
    });
    
    it('First value NaN', () => {
        const act = plus('test', 3);
        assert.isFalse(act);
    });
    
    it('Second value NaN', () => {
        const act = plus(3, 'test');
        assert.isFalse(act);
    });
});

describe('Test Minus', () => {
    it('Function check', () => {
        const act = minus(3, 7);
        const exp = -4;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': 100,
            'value2': 4,
            'expected': 96
        },
        
        {    
            'value1': 555,
            'value2': 555,
            'expected': 0
        },
        
        {    
            'value1': -5,
            'value2': -1,
            'expected': -4
        }
    ];
    
    for (let testSuite of mock) {
        it(`Test  value1 ${testSuite['value1']}, value2 ${testSuite['value2']}, expected ${testSuite['expected']}`,() => {
            const act = minus(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = minus(undefined, 2);
        assert.isFalse(act);
    });
    
    it('Second value not undefined', () => {
        const act = minus(3, undefined);
        assert.isFalse(act);
    });
    
    it('First value NaN', () => {
        const act = minus('test', 3);
        assert.isFalse(act);
    });
    
    it('Second value NaN', () => {
        const act = minus(3, 'test');
        assert.isFalse(act);
    });
});

describe('Test Times', () => {
    it('Function check', () => {
        const act = times(3, 7);
        const exp = 21;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': 100,
            'value2': 4,
            'expected': 400
        },
        
        {    
            'value1': 555,
            'value2': 555,
            'expected': 308025
        },
        
        {    
            'value1': -5,
            'value2': -1,
            'expected': 5
        }
    ];
    
    for (let testSuite of mock) {
        it(`Test  value1 ${testSuite['value1']}, value2 ${testSuite['value2']}, expected ${testSuite['expected']}`,() => {
            const act = times(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = times(undefined, 2);
        assert.isFalse(act);
    });
    
    it('Second value not undefined', () => {
        const act = times(3, undefined);
        assert.isFalse(act);
    });
    
    it('First value NaN', () => {
        const act = times('test', 3);
        assert.isFalse(act);
    });
    
    it('Second value NaN', () => {
        const act = times(3, 'test');
        assert.isFalse(act);
    });
});

describe('Test Divide', () => {
    it('Function check', () => {
        const act = divide(6, 2);
        const exp = 3;
        assert.deepEqual(act, exp);
    });
    
    const mock = [
        {
            'value1': 100,
            'value2': 4,
            'expected': 25
        },
        
        {    
            'value1': 555,
            'value2': 555,
            'expected': 1
        },
        
        {    
            'value1': -6,
            'value2': -1,
            'expected': 6
        }
    ];
    
    for (let testSuite of mock) {
        it(`Test  value1 ${testSuite['value1']}, value2 ${testSuite['value2']}, expected ${testSuite['expected']}`,() => {
            const act = divide(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('First value not undefined', () => {
        const act = divide(undefined, 2);
        assert.isFalse(act);
    });
    
    it('Second value not undefined', () => {
        const act = divide(3, undefined);
        assert.isFalse(act);
    });
    
    it('First value NaN', () => {
        const act = divide('test', 3);
        assert.isFalse(act);
    });
    
    it('Second value NaN', () => {
        const act = divide(3, 'test');
        assert.isFalse(act);
    });
});

//describe('Test Events', () => {
//    it('Not undefined', () => {
//        const act = events();
//        assert.isFalse(act);
//    });
//    
////    it('Second value not undefined', () => {
////        const act = events(3, undefined);
////        assert.isFalse(act);
////    });
////    
////    it('First value NaN', () => {
////        const act = events('test', 3);
////        assert.isFalse(act);
////    });
////    
////    it('Second value NaN', () => {
////        const act = events(3, 'test');
////        assert.isFalse(act);
////    });
//});