# JS

### 화살표 함수(Arrow Function)

**() => {} vs function () {}**

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

### 즉시 실행함수(IIFE, Immediately-Invoked Function Expression)

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

### 호이스팅(Hoisting)

함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

```js
const a = 7

double ()
function double() {
  console.log(a * 2)
} // 정상적으로 실행된다, 함수표현식이라면 error
```

### 타이머 함수

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

### 콜백(Callback)

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

### 생성자 함수(Prototype)

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

### this

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

const amy = {
  name : 'Amy',
  normal : heropy.normal,
  arrow : heropy.arrow // 함수 할당, 호출이 아님
}
//normal, arrrow도 프로토타입으로 만들 수 있다

const timer = {
  name : "Heropy!!",
  timeout : function() {
    setTimeout(function() { // arrow 함수로 만들면 Heropy를 출력함
      console.log(this.name) // undefined
    },2000)
  }
}
```
### ES6 Classes

```js
class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

### 상속

```js
class Vehicle {
  costructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}
// extends(확장)
class Car extends Vehicle {
  costructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
```

## JS 데이터

### 문자열

```js
String.prototype.indexOf() // 호출한 string 객체에서 주어진 값과 일치하는 첫번째 인덱스 반환, 없다면 -1 반환
String.length // 문자열의 길이 반환
String.prototype.replace() // 첫인자의 문자열을 두번째 문자열로 바꿔줌
String.prototype.match() // match() 메서드는 문자열이 정규식과 매치되는 부분을 검색함
String.prototype.trim() // 문자열 양 끝의 공백을 제거함
```

### slice

문자열의 추출된 부분을 담는 새로운 문자열이 반환된다 시작점은 0, 만약 음수라면, beginIndex는 strLength(문자열 길이) + beginIndex로 취급된다 (예를 들어 beginIndex가 -3이면 시작점은 strLength - 3)

**endIndex의 직전까지 추출이된다, endIndex 위치의 문자는 추출에 포함되지 않음**

```js
String.prototype.slice(beginIndex,endIndex(optional))
```

### 숫자와 수학

```js
toFixed() // 소수점 몇째자리까지 출력할지 정함
parseInt(str) // 문자열의 정수부분만 추출해서 Number로 형변환  
parseFloat(str) // 문자열의 실수부분을 추출해서 Number로 형변환

Math.abs() // 주어진 숫자의 절대값을 반환
Math.min() // 두 매개변수중 작은값 반환
Math.max() // 두 매개변수중 큰값 반환
Math.round() // 소수점 반올림 후 반환
```
### 배열

```js
Array.prototype.find() // 주어진 판별 함수를 만족하는 첫번째 요소 값을 반환함 요소가 없다면 undefined 반환
Array.prototype.findIndex() // 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환함, 만족하는 요소가 없으면 -1을 반환한다 
Array.length // 배열의 길이를 반환, 값을 설정시 길이를 변경함
Array.prototype.concat() // 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다
Array.prototype.forEach() // 주어진 함수를 배열 요소 각각에 대해 실행
Array.prototype.map() // 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다
Array.prototype.filter() // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다
Array.prototype.includes() // 인자로 주어진 값이 포함되어 있는지 여부를 반환
//
// 원본이 수정되는 메소드
Array.prototype.push() // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환함
Array.prototype.unshift() //새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환함
Array.prototype.reverse() // 배열을 뒤집음
Array.prototype.splice() // 첫 인자의 인덱스부터 두번째 인자의 숫자만큼 요소를 지움, 세번째 인자를 넣는다면, 그 자리에 추가하는 역할도 수행

```

## 객체(Object)

### Method 
```js
Object.assign(target, source) // 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할때 사용, 대상 객체 반환, 출처 객체는 여러개 작성이 가능하다 
Object.keys() // 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환.
```

## 구조 분해 할당(Destructuring assignment, 비구조화 할당)

```js
const user = {
  name : 'Heropy',
  age: 85,
  email : 'rwb@gmail.com'
}

const {name, age, email, address} = user
// E.g, user.address => undefined , address = 'korea' 로 기본값으로 할당 가능
//변수 명을 바꾸고 싶다면 name:heropy로 선언하면 된다

const fruits = ['apple', 'banana', 'cherry']
const [a,b,c,d] = fruits
console.log(a,b,c,d) // apple banana cherry undefined
const [, b] = fruits // banana 순서를 지켜야하므로 쉼표 필수
```

## 전개 연산자(Spread)

```js
const fruits = ['apple', 'banana', 'cherry']
console.log(...fruits) // console.log('apple','banana','cherry')

// ...c 로 c대신 입력한다면 나머지 매개변수로 배열 형태로 c에 저장한다 
function toObject(a,b,c) {
  // 속성과 매개변수 이름이 같다면 return {a,b,c}로 축약해서 작성이 가능 화살표함수로 구현한다면 한줄코딩 가능 !
  // const toObject = (a,b, ...c) => ({a,b,c})
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits)) // apple banana cherry
```

## 데이터 불변성(Immutability)

원시 데이터 값이 기존 메모리에 존재 한다면, 새로 메모리를 할당하는 것이 아니라 해당 메모리주소를 가리키게 한다

참조형 데이터에는 Object, Array, Function이 존재하고 가변하는 성질을 가진다 `a = b` 는 a가 가리키는 메모리주소를 b로 가리키게 함

## 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

```js
// Shallow copy
const copyUser = user
// 밑의 두 방법은 1차원 객체까지는 깊은 복사이다
const copyUser = Object.assign({}, user)
const copyUser = {...user}

// Deep copy
import _ from 'lodash'

const copyUser = _.cloneDeep(user)
```



