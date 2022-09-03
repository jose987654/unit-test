

// // Test 1 : Return 1  PASS
// //ReferenceError: assert is not defined
var assert = require('assert');
assert.equal(multiply(1, 1), 1);  //first test statement 
function multiply(a, b) {
    result=a*b;
    console.log(result)
    return result;  
}

// Test 2 : Return 4  PASS
// assertEqual(multiply(2, 2), 4)
var assert = require('assert');
assert.equal(multiply(2, 2), 4);
function multiply(a, b) {
    result=a*b;
    console.log(result)
    return result;  
}

// Test 3 : Return 9  PASS
// assertEqual(multiply(3, 2), 4);
// AssertionError [ERR_ASSERTION]: 1 == 4
var assert = require('assert');
assert.equal(multiply(3, 3),9);
function multiply(a, b) {
    result=a*b;
    console.log(result)
    return result;  
}

// Test 4 : Return 16  PASS
// assertEqual(multiply(4, 4), 16);
var assert = require('assert');
assert.equal(multiply(4, 4),16);
function multiply(a, b) {
    result=a*b;
    console.log(result)
    return result;  
}

// Test 5 :   PASS
// assertEqual(multiply(23,45), 23*45);

var assert = require('assert');
assert.equal(multiply(23, 45),23*45);
function multiply(a, b) {
    result=a*b;
    console.log(result)
    return result;  
}




