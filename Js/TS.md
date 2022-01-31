# TypeScript

JS에 타입을 추가한 확장버전이라고 생각하면 된다, 오픈소스로 어떤 자바스크립트의 실행환경에서도 실행가능, **Typed Superset of JavaScript**

- 타입스크립트는 **Programming Language 언어**
- 타입스크립트는 **Compiled Language**
  - 전통적인 Compiled Language 와는 다른점이 많다
  - 그래서 **Transpile** 이라는 용어를 사용하기도 함
- 자바스크립트는 **Interpreted Language**

Compiled | Interpreted
--|--
컴파일이 필요 O| 필요 X
컴파일러가 필요 O| 필요 X
컴파일하는 시점 O | 시점 X
컴파일된 결과물 실행 | 코드 자체 실행
컴파일된 결과물을 실행하는 시점 O | 코드를 실행하는 시점 O == 런타임

## 타입스크립트 설치, 실행

### 환경

- node.js : Chrome`s V8 JS 엔진을 사용하여, JS를 해석하고 OS 레벨에서 API를 제공하는 서버사이드용 JS 런타임 환경
- browser : HTML 을 동적으로 만들기 위해 브라우저에서 JS를 해석하고, DOM을 제어할 수 있도록 하는 JS 런타임 환경

### 명령어 

```bash
## 컴파일 명령어 , 같은 이름의 js가 생성이 된다
& tsc test.tc

## 수정할때 마다 컴파일을 자동으로해주는 와치모드
& tsc -w

# 해당 프로젝트에만 컴파일러 설치
& npm init -y
& npm install typescript
& npx tsc --init

## 컴파일 명령어
& npx tsc
```

### json 파일을 수정해서 컴파일하는 방법
```json
"scripts" : {
  "build" : "tsc"
}
```

위 처럼 설정을 하면, `npm run build` 명령어를 사용해서 컴파일 할 수 있다

## Fist Type Annotation

JS와 차별되는 기능, 타입을 표시해서 할당 가능 
```js
let a : string;
a = "mark";
a = 39; // error : Type 'Number' is not assignable to type 'string'

function hello(b: number) {}
```

## TypeScript의 데이터 타입

JS 기본 자료형 포함을하고, 몇가지 타입이 더 제공된다

- Any, Void, Never, Unknown
- Enum
- Tuple : object 형

### Number

- JS와 같이 모든 숫자는 부동 소수점 값
- 16진수 10진수 외에도 2진수 8진수 지원
- 1_000_000 표기 가능

### symbol

- ECMAScript 2015의 Symbol
- new Symbol 로 사용 x
- Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다(대소문자 구별!)
- 프리미티브 타입 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만들어 준다

### union type
```ts
// string 뿐만 아니라 null도 가질 수 있다라는 의미
let union : string | null = null;
```

### Array

```ts
let list: number[] = [1,2,3];
let list: Array<number> = [1,2,3];

// 이런식으로도 사용이 가능하다
let list : (number | string)[] = [1,2,3,"4"];
```

### Tuple

할당시에 타입, 순서, 길이가 같아야 함

```ts
let x: [string, number];

x = ["hello", 39];
```

### Any

```ts
// return이 any 타입
function returnAny(message: any): any {
  console.log(message);
}
const any1 = returnAny("anything")
```
> 웬만해서 사용을 지양하는 편이 좋다, 결국 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억  
>(After all, remeber that all the convenience of any comes at the cost of losing type safety)

### unknown

컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기 위해 만들어짐

```ts
declare const maybe: unknown;
// const aNumber : number = maybe; error
if(maybe === true) {
  const aBoolean : boolean = maybe;
  // const aString: string = maybe; error
}

if(typeof maybe === "string") {
  const aString : string = maybe;
  //const aBoolean : boolean = maybe; error
}
```
- any와 짝으로 any 보다 Type-safe한 타입
  - any와 같이 아무거나 할당 가능
  - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁힘
  - 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용 x
- unknown 타입을 사용하면 runtime error를 줄일 수 있다
  - 사용 전 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용가능

### never

```ts
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
if(typeof a !== "string"){
  a; // never타입
}

```
- never 타입은 모든 타입의 subtype이며, 모든 타입에 할당 가능
- 하지만 never 에는 어떤 것도 할당 x (any 조차 x)
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용

### void

어떤 값도 가지지 않는 타입, 실제로 잘 사용은 하지 않음

```ts
// void 리턴 타입의 함수
function returnVoid(message : string) {
  console.log(message);
}
```

---

## 작성자와 사용자 관점으로 코드 바라보기

### 타입 시스템

- 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템

### 타입 스크립트의 타입 시스템

- 타입을 명시적으로 지정 가능
- 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입 추론

> 타입이란 해당 변수가 할 수 있는 일을 결정한다

### 함수 사용법에 대한 오해를 야기하는 JS

f2 실행의 결과가 NaN을 의도한 것이 아니라면, 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작성함

```js
function f2(a) {
  return a * 38;
}
// 사용자는 사용법을 숙지하지 않은 채, 문자열을 사용하여 함수 실행
console.log(f2(10)); // 380
console.log(f2("mark")); // NaN
```

### noImplicitAny 옵션을 사용하는 경우

```ts 
// error TS7006 : Parameter 'a' implicity has an 'any' type
function f3(a) {
  return a * 38;
}
// 사용자 코드 실행 x 컴파일이 정상적으로 마무리 될수 있도록 수정해야 한다
console.log(f3(10));
console.log(f3("Mark") + 5);
```

### number 타입으로 추론된 리턴 타입

```ts
function f4(a: number) {
  if(a>0) {
    return a * 38;
  }
}
// undefined + 5 ==> NaN
console.log(f4(-5) +5) // NaN
```

### strictNullChecks 옵션을 사용하면

모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해준다

### noImplicitReturns 옵션을 사용하면

함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생 시킴

### 함수 매개변수가 오브젝트인 경우
```ts
// object literal type으로 명시해주는 것이 좋다
function f7(a : {name : string; age: number}) : string {
  return `이름은 ${a.name} 이고, 연령대는 ${
    Math.floor(a.age/10) * 10} 대 입니다.`;
}
```
하지만 매번 이렇게 명시하는것은 비효율적이라 나만의 타입 만드는 방식을 배울 것

### 나만의 타입을 만드는 방법 

```ts
// 두가지 방법이 존재
interface PersonInterface {
  name : string;
  age : number;
}
type PersonTypeAlias = {
  name : string;
  age : number;
};
```

## Structural Type System VS Nominal Type System

### Structural type system 

구조가 같으면, 같은 타입이다. **타입스크립트의 방식**

```ts
ace Iperson {
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

// 할당이 가능하다
personInterface = personType;
personType = personInterface;
```

### nominal type system

구조가 같아도 이름이 다르면, 다른 타입이다. **타입스크립트는 따르지 앟음**
```ts
type PersonID = string & { readonly brand: unique symbol} ;
function PersonID(id: string) : PersonID {
  return id as PersonID;
}
function getPersonById(id : PersonID) {}
getPersonById(PersonID('id-aaaaaa'));
getPersonById('id-aaaaaa') // error
```

## 타입 호환성(Type Compatibility) 

### 서브타입 (1)

```ts
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1= 1;
let sup1: number = sub1;
sub1 = sup1; // error

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 : number[]  = [1];
let sup2: object = sub2;
sub2 = sup2 // error

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1,2];
let sup3 : number[] = sub3;
sub3 = sup3 ; // error
```

### 서브타입(2)
```ts

```