const arr = [3,2,4,21,55];
arr.sort((a,b) => a-b)

console.log(arr);

function foo(a,b,c){
  console.log(arguments[1]);

}
foo('a','b','c');

for(let i = 0, j = 10; i < j; i++, j--){
  console.log(i);
}
console.log("hi");

console.log(typeof(function(){}));

const x = true;
const y = false;
const z = false;
console.log(x || y && z);

let p = 2, w ;
w = p++, p;

console.log(p,w);

const arrr = [1,2,3];
const newArr = arrr.forEach(x=> console.log(x));

const arr2 = {
  n: 'hi',
  t: 'my' ,
  s: 'name',
  length : 3
};

function foo(a,b,c){
  console.log(arguments[0],arguments[1]);
}

foo('ewr','twte')
console.log(arr2['n'])

function foo1(a,b,c){
  Array.prototype.forEach.call(arguments, (arg) => {
    console.log(arg);
  });
}
foo1('a','b','c');

let zt = 0;
let yt = 234;

zt = zt || yt;

console.log(zt)


const a = null;
const b = a ?? 'hi';
console.log(b);

// const obj = {
//   lang: `js`,
//   greeting : () => {
//     return `hi ${this.lang}`;
//   }
// }
// console.log(obj.greeting())

// const obj1 = {
//   name : 'js',
//   greeting() {
//     setTimeout((function timer() {
//       console.log(this.name);
//     }).bind(this),1000);
//   }
// }

// obj1.greeting();

const obj2 = {
  name : 'js',
  greeting() {
    setTimeout(() =>{
      console.log(this.name);
    },1000);
  }
}

obj2.greeting();