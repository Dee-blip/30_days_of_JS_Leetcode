/**
 * @return {Function}
 */
var createHelloWorld = function() {
    const res = "Hello World";
    return function(...args) {
        
        return res
        
    }
};


createHelloWorld();
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
