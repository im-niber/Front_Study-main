console.log("hello typescript");
let b : boolean = true;
let c : Boolean = false;

console.log(typeof b)
console.log(typeof c)
console.log(Symbol("foo"))

function error(message : string ) : never {
  throw new Error(message);
}
function fail() {
  return error("failed")
}
function inifiniteLoop() : never {
  while (true) {}
}

let a: string = "hello";
if(typeof a !== "number"){
  a; // never타입
}

function returnVoid(message : string) {
  console.log(message);
}
const r = returnVoid("not return")

function f4(a: number) {
  if(a>0) {
    return a * 38;
  }
}

interface Iperson {
  name : string;
  age : number;
  speak() : string;
}
type PersonType = {
  name : string;
  age : number;
  speak() : string;
};

let personInterface: Iperson = {} as any;
let personType : PersonType = {} as any;

personInterface = personType;
personType = personInterface;

type PersonID = string & { readonly brand: unique symbol} ;
function PersonID(id: string) : PersonID {
  return id as PersonID;
}
function getPersonById(id : PersonID) {}
getPersonById(PersonID('id-aaaaaa'));
//getPersonById('id-aaaaaa')

// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1= 1;
let sup1: number = sub1;
//sub1 = sup1; // error

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 : number[]  = [1];
let sup2: object = sub2;
//sub2 = sup2 // error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1,2];
let sup3 : number[] = sub3;
//sub3 = sup3 ; // error


interface Person1 {
  name : string,
  age: number
}

function hello1(person: Person1) : void {
  console.log(`안녕하세요! ${person.name} 입니다`)
}
const p1: Person1 = {
  name : "mark",
  age: 39
};
hello1(p1)

interface Person2{
  name : string;
  age? : number;
}

class Persons{
  public constructor(public name : string, public age: number) {}
}
const p11: Persons = new Persons("Mark", 39);
console.log(p11) // Person{name : "mark", age: 39};

abstract class AbstarctPerson {
  protected _name: string = "Mark";
  abstract setName(name: string): void;
  abstract printName(): void;
}

function helloBasic<T>(message: T): T {
  return message;
}

function helloTuple<T, K>(message: [T,K]):T{
  return message[0];
}
//helloTuple(["hello","world"]);

interface StringArray {
  [index: string]: number;
}
let arr: StringArray = {
  "Hi" : 3,
}
console.log(typeof arr['Hi'])

interface IPerson2{
  name: string;
  age: number;
}
const person: IPerson2 = {
  name: "mark",
  age: 39,
};

type Keys = keyof IPerson2;
const keyss: Keys ="name"

console.log(person[keyss])

class Person{}
class Developer extends Person{
  coding(){}
}
class StartupDeveloper extends Developer{
  burning(){}
}
function tellme(f:(d:Developer)=> Developer) {}
// Developer -> Developer에다가 Developer->Developer를 할당하는 경우
tellme(function dToD(d:Developer):Developer{
  return new Developer();
})
// Developer -> Developer에다가 Person -> Developer를 할당 하는 경우
tellme(function pToD(d:Person): Developer{
  return new Developer();
})
// Developer -> Developer에다가 StartupDeveloper->Developer를 할당 하는 경우
// tellme(function sToD(d:StartupDeveloper):Developer{
//   return new Developer();
// }) 

