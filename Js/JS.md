# Js

## 화살표 함수(Arrow Function)

() => {} vs function () {}

```js
const double = function (x) {
  return x * 2
} 
const doubleArrow = (x) => {
  return x * 2
} 
// 축약형
const doubleArrow2 = (x) => x * 2
```

화살표 함수는 `function` 키워드를 사용하지 않는다  
결과값이 한줄이면 중괄호,`return`을 생략가능  
매개변수가 하나인 경우 괄호도 생략이 가능하다

> 축약형으로 객체데이터를 반환 할 때는 `x => ({name:'hello'})`로 소괄호로 감싸줘야한다

## 즉시 실행함수(IIFE, Immediately-Invoked Function Expression)

```js
(function () {
  console.log(a * 2)
})();

// 밑의 방식을 권장, 두 함수의 결과값은 같다
(function () {
  console.log(a * 2)
}());
```
익명함수를 만들고 소괄호로 감싸준뒤, 소괄호를 뒤에 붙여주면 즉시 실행한다  
> 즉시실행함수를 사용할때는 세미콜론을 붙여주는 편이 좋다

## 호이스팅(Hoisting)

함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

```js
const a = 7

double ()
function double() {
  console.log(a * 2)
} // 정상적으로 실행된다, 함수표현식이라면 error
```

## 타이머 함수

- setTimeout(함수, 시간) : 일정 시간 후 함수 실행
- setInterval(함수, 시간) : 시간 간격마다 함수 실행
- clearTimeout() : 설정된 Timeout 함수를 종료
- clearInterval() : 설정된 Interval 함수를 종료
```js
// 3초뒤 실행
setTimeout(function () {
  console.log("hello~")
}, 3000)

setTimeout(()=>{
  console.log("arrow~")
},3000)

const timer = setTimeout(()=>{
  console.log("expression~")
},3000)
```

## 콜백(Callback)

함수의 인수로 사용되는 또 다른 함수를 의미함
```js
function timeout(cb) {
  setTimeout(() =>{
    console.log("hello")
    cb()
  },3000)
}
timeout(()=>{
  console.log("Done")
})
// hello 출력 후 Done이 출력이 된다
```

## 생성자 함수(Prototype)

```js
const heropy = {
  firstNmae:'Heropy',
  lastName : 'park',
  getFullNmae: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy)


//생성자 함수는 앞글자를 대문자로 표기한다
function User(first, last) {
  this.firstName = first
  this.lastNmae = last
}

// 인스턴스 생성
const heropy = new User('Heropy', 'Park')

// user에 원형 함수를 넣어줌 
user.prototype.getFullName = function () {
  return `${this.firstNmae} ${this.lastName}`
}
```

## this

일반(Normal) 함수는 호출 위치에서 따라 this 정의 !  
화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의 !  

```js
const heropy = {
  name : "Heropy",
  normal : function() {
    console.log(this.name) // Heropy
  },
  arrow : () => {
    console.log(this.name) // undefined
  }
}
```