// import getType from './getType'
import random from './getRandom.js'

console.log("hello world");

// 삼항 연산자(ternary operator)
let a = true
console.log(a ? '참' : '거짓')
console.log(random())

// switch문
a = random()
switch(a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  default:
    console.log('rest...')
}

const ulEl = document.querySelector('ul')

for (let i = 0; i <3; i++){
  const li = document.createElement('li')
  li.textContent = `list-${i+1}`
  if (i %2 === 0){
    li.addEventListener('click', function() {
      console.log(li.textContent)
    })  
  }
  ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope) 블록 레벨을 가진다
// var, let, const
// var는 함수 레벨의 스코프를 가진다
// let, const는 블록 레벨

function scope() {
  if(true){
    //console.log(a) >> undefined
    const a = 123
  }
  // console.log(a) >> error
}