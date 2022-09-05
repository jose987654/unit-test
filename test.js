
var assert = require('assert');
const multiply=require('./multiply');

describe("multiply function",()=>{
// Test 1 : 
it("TEST 1",()=>{
    assert.equal(multiply(1, 1), 1);})

// Test 2 : 
it("TEST 2",()=>{
assert.equal(multiply(2, 2), 4);})

// Test 3 : 
it("TEST 3",()=>{
assert.equal(multiply(3, 3),9);})

// Test 4 :
it("TEST 4",()=>{
assert.equal(multiply(4, 4),16);})

// Test 5 :
it("TEST 5",()=>{   
assert.equal(multiply(23, 45),23*45);})
});




