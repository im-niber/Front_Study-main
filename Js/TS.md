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

## Type Annotation

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

### 서브타입

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

1. 같거나 서브 타입인 경우, 할당이 가능하다 => **공변**
```ts
//primitive type
let sub: string = '';
let sup: string | number = sub7;
//object-각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야한다
let sub : {a:string; b:number} = {a:'', b:1};
let sup : {a :string|number; b: number} = sub;
// array - object와 마찬가지
let sub : Array<{a:string; b: number}> = [{a:'', b: 1}];
let sup : Array<{a:string|number; b: number}> = sub
```
2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다 => **반병**
```ts
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
tellme(function sToD(d:StartupDeveloper):Developer{
  return new Developer();
}) 
// error 스타트업디벨로퍼는 디벨로퍼의 하위 타입이다
```

> strictFunctionTypes 옵션을 사용하면, 함수를 할당시 함수의 매개변수 타입이 다르거나 슈퍼타입인 경우가 아닌경우 에러를 통해 경고함

### 타입 별칭(Type Alias, 타입 별명)

- Interface랑 비슷해 보임
- Primitive, Union Type, Tuple, Function 에 사용하거나, 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다
- 만들어진 타입의 refer 로 사용하는 것이지 만드는것은 아님

```ts
// Aliasing Primitive
// String을 MyStringType으로 부른다는 뜻
type MyStringType = string;
// Aliasing Union Type
type StringOrNumber = string | number;
// Aliasing Tuple
type PersonTuple = [string, number];
// Aliasing Function
type EatType = (food : string) =>void;
```

## TypeScript Compiler

### Compilation Context

컴파일러가 어떤 파일과 어떤 방식으로 컴파일할지 규명 해둔 맥락이다

### tsconfig schema 

tsconfig의 구조를 뜻함

#### compileOnSave
세이브하면 컴파일을 할지 정하는 옵션 값은 true / false (default false) vs2015 with typescript 1.8.4 이상이면 가능함

#### extends
tsconfig 파일도 상속을 받을 수 있고, 속성값에는 경로를 입력하면 된다 TypeScript 2.1 New Spec이다

#### files, include, exclude
- 셋 다 설정이 없으면 전부 컴파일
- files
  - 상대 혹은 절대경로의 리스트 배열
  - exclude 보다 우선순위가 높다
- include, exclude
  - glob 패턴(마치 .gitignore)
  - include
    - exclude 보다 우선순위 낮음
    - *같은걸 사용하면, .ts/.tsx/.d.ts 만 include(allowJS)
  - exclude
    - 설정 하지 않으면 4가지(node_modules, bower_components, jspm_packages, outDir)를 default로 제외 
    - outDir은 항상 제외함 (include에 있어도)

#### compileOptions

##### typeRoots, types

- TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
- 설정을 안하면, node_modules/@types 라는 모든 경로 찾아서 사용
- typeRoots 를 사용하면, 배열 안에 들어있는 경로들 아래서만 가져옴
- types를 사용하면, 배열 안의 모듈 혹은 ./node_modueles/@types/ 안의 모듈 이름에서 찾아옴, 빈 배열을 넣으면 이 시스템을 이용하지 않겠다는 것
- typeRoots와 types를 같이 사용하지 x

##### target, lib

- target
  - 빌드의 결과물을 어떤 버전으로 할것이냐
  - 지정을 안하면 es3 이다
- lib
  - 기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
  - 지정하지 않았을 때
    - target이 `es3`이고, 디폴트로 lib.d.ts 를 사용한다
    - target이 `es5`이면, 디폴트로 dom, es5, scripthost를 사용한다
    - target이 `es6`이면, 디폴트로 dom, es6, dom.iterable, scripthost를 사용한다
  - lib를 지정하면 그 lib 배열로만 라이브러리를 사용한다

##### outDir, outFile, rootDir

- outFile : 모듈들을 하나의 파일로 만들어준다 
- outDir : 파일들의 결과물을 내보낼 경로를 지정함
- rootDir : 루트 ts파일의 경로를 변경할 수 있음

##### strict

엄격하게 타입을 체크하는 옵션

- noImplicitAny : 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러 발생
  - TS가 추론을 실패한 경우, any 가 맞으면, any라고 지정해라
  - 아무것도 쓰지 않으면 에러 발생
  - 이 오류를 해결하면, any라고 지정되어 있지 않은 경우는 any가 아님
- noImplicitThis : 명시적이지 않게 any 타입을 사용하여, this 표현식에 사용시 에러 발생
  - 첫 매개변수 자리에 this를 놓고, this에 타입을 명시 안하면 오류 발생
  - JS 에는 매개변수에 this를 넣으면 이미 예약된 키워드라 SynstaxError
  - call/apply/bind 와 같이 this를 대체하여 함수 콜을 하는 용도로 쓰임
  - this를 any로 명시적으로 지정하는 것은 합리적인편
- strictNullChecks : null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, any 일경우에만 할당 가능 한가지 예외는 undefined에 void 할당 가능
  - 이 옵션을 적용하지 않으면, 모든 타입은 null,undefined 값을 다 가질수 있다
  - 적용을 하여, null, undefined 값을 가지려면 union type을 이용해서 직접 명시해야한다 
- strictfunctionTypes : 함수 타입에 대한 bivariant 매개 변수 검사를 비활성화한다 
  - 반환타입은 공변적(covariant)
  - 인자 타입은 반공변적(contravariant)
  - TS에서는 인자 타입은 공변적이면서, 반공변적인게 문제
  - 그 부분을 해결하는 옵션이다.
- strictPropertyInitialization : 정의되지 않은 클래스 속성이 생성자에서 초기화 되었는지 확인
- strictBindCallApply : bind, call, apply에 대한 더 엄격한 검사 수행
  - Function의 내장 함수인 bind/call/apply 를 사용할 때 엄격하게 체크하도록 하는 옵션
  - bind 는 해당 함수 안에서 사용할 this와 인자를 설정하는 역할을 하고 call 과 apply는 this와 인자를 설정 후 실행까지 한다
  - call은 함수의 인자를 여러 인자의 나열로 넣어서 사용하고, apply는 모든 인자를 배열 하나로 넣어서 사용한다
- alwaysStrict : 각 소스파일에 대해 JS의 strict mode로 코드를 분석하고 "엄격하게 사용" 을 해제한다