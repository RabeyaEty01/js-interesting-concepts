/*
Falsy:
false
0
empty string
undefined
null
NaN 
------------------------

Truthy:
truth
any number(positive or negative)
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy is truthy
*/
let x = {};
console.log('value of x', x);
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}