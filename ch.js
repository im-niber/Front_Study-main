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