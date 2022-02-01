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

class Person extends AbstarctPerson{
  setName(name: string): void {
    this._name = name;
  }
  printName(): void {
    console.log(this._name);
  }
}
const p = new Person();
p.setName("aile");
p.printName();

