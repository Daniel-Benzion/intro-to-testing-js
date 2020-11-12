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

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
});

describe('isVowel("a")', function () {
    it('should return true', function () {
        expect(isVowel("a")).toBe(true);
    });
});

describe('isVowel("A")', function () {
    it('should return true', function () {
        expect(isVowel("A")).toBe(true);
    });
});

describe('isVowel("y")', function () {
    it('should return false', function () {
        expect(isVowel("y")).toBe(false);
    });
});

describe('isVowel(4)', function () {
    it('should return false', function () {
        expect(isVowel(4)).toBe(false);
    });
});

describe('isVowel("4")', function () {
    it('should return false', function () {
        expect(isVowel("4")).toBe(false);
    });
});

describe('isVowel(true)', function () {
    it('should return false', function () {
        expect(isVowel(true)).toBe(false);
    });
});

describe('isVowel(false)', function () {
    it('should return false', function () {
        expect(isVowel(false)).toBe(false);
    });
});

describe('isVowel("banana")', function () {
    it('should return false', function () {
        expect(isVowel("banana")).toBe(false);
    });
});

describe('isVowel("aardvark")', function () {
    it('should return false', function () {
        expect(isVowel("aardvark")).toBe(false);
    });
})

describe('isVowel("aaabaaa")', function () {
    it('should return false', function () {
        expect(isVowel("aaabaaa")).toBe(false);
    });
});

describe('isVowel()', function () {
    it('should return false', function () {
        expect(isVowel()).toBe(false);
    });
});

describe('isVowel("")', function () {
    it('should return false', function () {
        expect(isVowel("")).toBe(false);
    });
});

describe('isVowel(null)', function () {
    it('should return false', function () {
        expect(isVowel(null)).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
});

describe('add(2, 3)', function () {
    it('should return 5', function () {
        expect(add(2, 3)).toBe(5);
    });
});

describe('add(-3, -9)', function () {
    it('should return -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
});

describe('add("5", 6)', function () {
    it('should return 11', function () {
        expect(add("5", 6)).toBe(11);
    });
});

describe('add("-4", "10")', function () {
    it('should return 6', function () {
        expect(add("-4", "10")).toBe(6);
    });
});

describe('add("banana", "split")', function () {
    it('should return NaN', function () {
        expect(add("banana", "split")).toBe("NaN");
    });
});

describe('add(2, "apples")', function () {
    it('should return NaN', function () {
        expect(add(2, "apples")).toBe("NaN");
    });
});

describe('add()', function () {
    it('should return NaN', function () {
        expect(add()).toBe("NaN");
    });
});