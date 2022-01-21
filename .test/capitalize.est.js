import capitalize from "../src/capitalize.js";

if(capitalize('hello') !== 'Hello') {
    throw new Error('Function error');
};
if(capitalize('') !== '') {
    throw new Error('Function error');
}
console.log('All tests success complete');