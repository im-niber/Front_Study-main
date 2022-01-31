console.log("hello typescript");
let b : boolean = true;
let c : Boolean = false;

console.log(typeof b)
console.log(typeof c)
console.log(Symbol("foo"))

declare const maybe: unknown;

// const aNumber : number = maybe;

if(maybe === true) {
  const aBoolean : boolean = maybe;

  // const aString: string = maybe;
}

if(typeof maybe === "string") {
  const aString : string = maybe;
  //const aBoolean : boolean = maybe;
}

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

