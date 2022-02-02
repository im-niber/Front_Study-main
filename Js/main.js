"use strict";
console.log("hello typescript");
let b = true;
let c = false;
console.log(typeof b);
console.log(typeof c);
console.log(Symbol("foo"));
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
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다`);
}
const p1 = {
    name: "mark",
    age: 39
};
hello1(p1);
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p11 = new Persons("Mark", 39);
console.log(p11); // Person{name : "mark", age: 39};
class AbstarctPerson {
    constructor() {
        this._name = "Mark";
    }
}
class Person extends AbstarctPerson {
    setName(name) {
        this._name = name;
    }
    printName() {
        console.log(this._name);
    }
}
const p = new Person();
p.setName("aile");
p.printName();
function helloBasic(message) {
    return message;
}
function helloTuple(message) {
    return message[0];
}
let arr = {
    "Hi": 3,
};
console.log(typeof arr['Hi']);
const person = {
    name: "mark",
    age: 39,
};
const keyss = "name";
console.log(person[keyss]);
