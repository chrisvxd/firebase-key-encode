const firebaseKeyEncode = require('../firebase-key-encode');

//, . * $  # [ ] / 
describe('Testing encoding of illegal firebase characters', () => { 
    test('*a* -> %2Aa%2A', () => { 
        const encoded = firebaseKeyEncode.encode('*a*'); 
        expect(encoded).toBe('%2Aa%2A');
    });

    test('.a. -> %2Ea%2E', () => { 
        const encoded = firebaseKeyEncode.encode('.a.'); 
        expect(encoded).toBe('%2Ea%2E');
    }); 

    test('$a$ -> %24a%24', () => { 
        const encoded = firebaseKeyEncode.encode('$a$'); 
        expect(encoded).toBe('%24a%24');
    });

    test('#a# -> %23a%23', () => { 
        const encoded = firebaseKeyEncode.encode('#a#'); 
        expect(encoded).toBe('%23a%23');
    }); 

    test(',a, -> %2Ca%2C', () => { 
        const encoded = firebaseKeyEncode.encode(',a,'); 
        expect(encoded).toBe('%2Ca%2C');
    });
    
    test('[a[ -> %5Ba%5B', () => { 
        const encoded = firebaseKeyEncode.encode('[a['); 
        expect(encoded).toBe('%5Ba%5B');
    }); 

    test(']a] -> %5Da%5D', () => { 
        const encoded = firebaseKeyEncode.encode(']a]'); 
        expect(encoded).toBe('%5Da%5D');
    }); 

    test('/a/ -> %2Fa%2F', () => { 
        const encoded = firebaseKeyEncode.encode('/a/'); 
        expect(encoded).toBe('%2Fa%2F');
    }); 

    test(',.*$#[]/ -> %2C%2E%2A%24%23%5B%5D%2F', () => { 
        const encoded = firebaseKeyEncode.encode(',.*$#[]/'); 
        expect(encoded).toBe('%2C%2E%2A%24%23%5B%5D%2F');
    }); 
});

describe('Testing decoding of illegal firebase characters', () => { 
    test('%2Aa%2A -> *a*', () => { 
        const encoded = firebaseKeyEncode.decode('%2Aa%2A'); 
        expect(encoded).toBe('*a*');
    });

    test('%2Ea%2E -> .a.', () => { 
        const encoded = firebaseKeyEncode.decode('%2Ea%2E'); 
        expect(encoded).toBe('.a.');
    }); 

    test('%24a%24 -> $a$', () => { 
        const encoded = firebaseKeyEncode.decode('%24a%24'); 
        expect(encoded).toBe('$a$');
    });

    test('%23a%23 -> #a#', () => { 
        const encoded = firebaseKeyEncode.decode('%23a%23'); 
        expect(encoded).toBe('#a#');
    }); 

    test('%2Ca%2C -> ,a,', () => { 
        const encoded = firebaseKeyEncode.decode('%2Ca%2C'); 
        expect(encoded).toBe(',a,');
    });
    
    test('%5Ba%5B -> [a[', () => { 
        const encoded = firebaseKeyEncode.decode('%5Ba%5B'); 
        expect(encoded).toBe('[a[');
    }); 

    test('%5Da%5D -> ]a]', () => { 
        const encoded = firebaseKeyEncode.decode('%5Da%5D'); 
        expect(encoded).toBe(']a]');
    }); 

    test('%2Fa%2F -> /a/', () => { 
        const encoded = firebaseKeyEncode.decode('%2Fa%2F'); 
        expect(encoded).toBe('/a/');
    }); 

    test('%2C%2E%2A%24%23%5B%5D%2F -> ,.*$#[]/', () => { 
        const encoded = firebaseKeyEncode.decode('%2C%2E%2A%24%23%5B%5D%2F'); 
        expect(encoded).toBe(',.*$#[]/');
    }); 
});