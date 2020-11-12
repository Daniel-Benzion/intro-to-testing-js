// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

const sayHello = function(name) {
    if (typeof name === "string" && name !== "" && isNaN(name)) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!"
    }
}

const isFive = function(number) {
    return number == 5;
}

const isEven = function(number) {
    if ((typeof number === "number" || typeof number === "string") && number !== "") {
        return number % 2 === 0;
    } else {
        return false;
    }
}

const isVowel = function(letter) {
    const vowels = /[^aeiou]/i
    if (letter === "") {
        return false;
    } else {
        return !vowels.test(letter);
    }
}

const add = function(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "NaN";
    } else {
        return parseFloat(num1) + parseFloat(num2);
    }
}
