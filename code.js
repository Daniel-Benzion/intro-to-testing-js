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