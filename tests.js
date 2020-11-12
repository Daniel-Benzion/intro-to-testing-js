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