"use strict";
console.log("hello typescript");
let b = true;
let c = false;
console.log(typeof b);
console.log(typeof c);
console.log(Symbol("foo"));
// const aNumber : number = maybe;
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe;
}
if (typeof maybe === "string") {
    const aString = maybe;
    //const aBoolean : boolean = maybe;
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function inifiniteLoop() {
    while (true) { }
}
let a = "hello";
if (typeof a !== "number") {
    a; // never타입
}
function returnVoid(message) {
    console.log(message);
}
const r = returnVoid("not return");
function f4(a) {
    if (a > 0) {
        return a * 38;
    }
}
let personInterface = {};
let personType = {};
personInterface = personType;
personType = personInterface;
function PersonID(id) {
    return id;
}
function getPersonById(id) { }
getPersonById(PersonID('id-aaaaaa'));
//getPersonById('id-aaaaaa')
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1 = 1;
let sup1 = sub1;
//sub1 = sup1; // error
// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 = [1];
let sup2 = sub2;
//sub2 = sup2 // error
// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3 = [1, 2];
let sup3 = sub3;
//sub3 = sup3 ; // error
