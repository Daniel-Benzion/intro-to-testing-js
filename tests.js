// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
});

describe('sayHello("Jane")', function() {
        it('should return the string "Hello, Jane!"', function() {
            expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
})

describe('sayHello("Alex")', function() {
    it('should return the string "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
});

describe('sayHello("Pat")', function() {
    it('should return the string "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

describe('sayHello()', function() {
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
});

describe('sayHello(true)', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
});

describe('sayHello(false)', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('sayHello("")', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
});

describe('sayHello(5)', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello(5)).toBe("Hello, World!");
    });
});

describe('sayHello("5")', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

describe('sayHello(null)', function () {
    it('should return "Hello, World!', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () { expect(typeof isFive()).toBe("boolean");
    });
});

describe('isFive(5)', function () {
    it('should return true', function () {
        expect(isFive(5)).toBe(true);
    });
});

describe('isFive("5")', function () {
    it('should return true', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isFive()', function () {
    it('should return false', function () {
        expect(isFive()).toBe(false);
    });
});

describe('isFive(null)', function () {
    it('should return false', function () {
        expect(isFive(null)).toBe(false);
    });
});

describe('isFive(6)', function () {
    it('should return false', function () {
        expect(isFive(6)).toBe(false);
    });
});

describe('isFive("6")', function () {
    it('should return false', function () {
        expect(isFive("6")).toBe(false);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
});

describe('isEven(2)', function () {
    it('should return true', function () {
        expect(isEven(2)).toBe(true);
    });
});

describe('isEven(-4)', function () {
    it('should return true', function () {
        expect(isEven(-4)).toBe(true);
    });
});

describe('isEven(3)', function () {
    it('should return false', function () {
        expect(isEven(3)).toBe(false);
    });
});

describe('isEven("banana")', function () {
    it('should return false', function () {
        expect(isEven("banana")).toBe(false);
    });
});

describe('isEven("8")', function () {
    it('should return true', function () {
        expect(isEven("8")).toBe(true);
    });
});

describe('isEven("7")', function () {
    it('should return false', function () {
        expect(isEven("7")).toBe(false);
    });
});

describe('isEven(Infinity)', function () {
    it('should return false', function () {
        expect(isEven(Infinity)).toBe(false);
    });
});

describe('isEven(true)', function () {
    it('should return false', function () {
        expect(isEven(true)).toBe(false);
    });
});

describe('isEven(false)', function () {
    it('should return false', function () {
        expect(isEven(false)).toBe(false);
    });
});

describe('isEven(2.8)', function () {
    it('should return false', function () {
        expect(isEven(2.8)).toBe(false);
    });
});

describe('isEven(2.7)', function () {
    it('should return false', function () {
        expect(isEven(2.7)).toBe(false);
    });
});

describe('isEven("2.8")', function () {
    it('should return false', function () {
        expect(isEven("2.8")).toBe(false);
    });
});

describe('isEven("")', function () {
    it('should return false', function () {
        expect(isEven("")).toBe(false);
    });
});

describe('isEven(undefined)', function () {
    it('should return false', function () {
        expect(isEven(undefined)).toBe(false);
    });
});

describe('isEven()', function () {
    it('should return false', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isEven(null)', function () {
    it('should return false', function () {
        expect(isEven(null)).toBe(false);
    });
});