# TypeScript (2)

## Interface

### What are Interfaces ??

```ts
interface Person1 {
  name : string,
  age: number
}
// function hello1(person: {name : string; age: number })
function hello1(person: Person1) : void {
  console.log(`안녕하세요! ${person.name} 입니다`)
}
const p1: Person1 = {
  name : "mark",
  age: 39
};
hello1(p1)
```
위 코드와 같이 미리 인터페이스를 설정을 하면 해당 타입들을 좀 더 편하게 명시할 수 있다

> 인터페이스는 컴파일 할 때만 필요하다(js에서는 없는 문법)

### optional property

```ts
interface Person2{
  name : string;
  //age가 있을수도 없을수도 있다를 표현할 때 ? 기호 사용함
  age? : number;
}
function hello2(person: Person2) : void {}
hello2({name : "mark", age : 39}); // o
hello2({name : "anna"}); // o

//----------------------------//

interface Person3 {
  name : string;
  age? : number;
  // 어떤 이름의 프로퍼티가 와도 괜찮다는 INDEX 방법
  [index : string]: any; 
}

function hello3(person : Person3): void {}

const p31 : Person3 = {
  name : "Mark",
  age: 39,
};

const p32 : Person3 = {
  name : "anna",
  systers : ["sung","chen"]
}

const p33 : Person3 = {
  name : "Bokdaengi",
  father : p31,
  mother : p32
}
hello3(p31,p32,p33) // 다 정상 작동
```

### function in interface
```ts
interface Person4 {
  name: string;
  age: number;
  hello() :void;
}

const p41 : Person4 = {
  name : "Mark",
  age : 39,
  hello:function() : void{}
}

const p42 : Person4 = {
  name : "Mark",
  age : 39,
  hello() : void{}
}

const p43 : Person4 = {
  name : "Mark",
  age : 39,
  hello: ():void =>{}
} // this를 사용할 수 없는 경우 주의
```

### class implements interface

```ts
interface IPerson1 {
  name : string;
  age? : number;
  hello() : void;
}
class Person implements IPerson1{
  name: string;
  age?: number | undefined;
  
  //초기값을 지정해주는 constructor
  constructor(name : string) {
    this.name = name;
  }
  hello(): void {
    console.log(`hi ${this.name}`);
  }
}
const person: IPerson1 = new Person("mark");
```

### interface extends interface
```ts
interface Iperson2{
  name : string;
  age? : number;
}
// Iperson2를 상속하는 Ikorean
interface IKorean extends Iperson2{
  city : string;
}
const k: IKorean = {
  name : "김김김",
  city : "서울"
};
```
### function interface
```ts
interface HelloPerson {
  (name : string, age?: number) :void;
}
const helloPerson : HelloPerson = function(name : string) {
  console.log(`hi ${name}`);
}
helloPerson("Mark",39) // 문제없이 작동함
```

### Readonly Interface Properties
```ts
interface Person8{
  name : string;
  age? : number;
  readonly gender: string;
}
const p81 : Person8 = {
  name : "Mark",
  gender : "male",
}
p81.gender = "female" // error
```
### type alias vs interface
```ts
// function
type EatType = (food : string) => void;
interface Ieat{
  (food : string) : void ;
}
// Array
type PersonList = string[];
interface IPersonList {
  [index: number]: string;
}
```

## Classes

- object를 만드는 blueprint(청사진, 설계도)
- 클래스 이전에 object를 만드는 기본적인 방법은 function
- JS에도 class는 ES6 부터 사용 가능
- OOP를 위한 초석
- TypeScript 에서는 클래스도 사용자가 만드는 타입의 하나

### constructor & initialize

```ts
class Person {
  name : string; // error ,초기화가 안되어 있다 
  age : number; // error
  age!: number; // number로 할당되지 않아도 error를 발생하지 않겠다 라는 의미
  constructor(age:number) {
    this.age = age;
  }
}
```
- 생성자 함수가 없으면, 디폴트 생성자가 불린다
- 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다
- strict 모드에서는 프로퍼티를 선언하는 곳 or 생성자에서 값을 할당해야 함
- 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현
- 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다
- constructor 에는 async를 사용할 수 없다

### 접근 제어자(Access Modifiers)

TypeScript는 기본적으로 외부에서 접근이 가능하다(public)

- private : 외부에서 호출이 불가하다
- protected : 외부 접근이 불가하나 상속 관계라면 가능 
- JS에서 private는 지원하지 않아 오랫동안 프로퍼티나 메서드 이름 앞에 _를 붙여서 표현함 아직도 이어가고 있는듯 ?

### initialization in constructor parameters

생성자의 매개변수에 접근제어자를 붙여주면 this와 같은 동작을 수행함

```ts
class Person{
  public constructor(public name : string, public age: number) {}
}
const p1: Person = new Person("Mark", 39);
console.log(p1) // Person{name : "mark", age: 39};
```

### Getters & Setters

```ts
class Person{
  // ...constructor public _name : string ...
  get name() {
    console.log("get");
    return this._name;
  } 
  set name(n: string) {
    this._name = n;
  }
}
console.log(p1.name) // get 을 하는 함수 getter
p1.name = "mark" // set 을 하는 함수 setter
```

> getter, setter를 사용하면 private로 설정하고 읽기전용으로 인자를 만드거나, 사용을 제한두는 여러 활용이 가능하다

### readonly properties

```ts
class Person {
  public readonly name: string = "mark";
  private readonly country: string = "korea"; // 변경 불가, 초기화 하는 부분에서만 값을 할당 가능 (생성자 포함)
  //...constructor(private _name...)
}
```

### Index Signatures in class

`[index:string] : string` 로 사용한다(python에 딕셔너리와 거의 같은듯?)

```ts
class Students {
  [index: string] : string;
}
const a = new Students();
a.mark = 'male';
a.jade = 'male';
const b = new Students();
b.chloe = "female";
b.alex = "male";
```

### Static Properties & Methods

```ts
class Person{
  public static hello() {
    console.log("hi");
  }
}
const p1 = new Person();
Person.hello(); // 이렇게 사용이 가능하게 해주는것이 static, 대신 object에서는 메소드로 실행이 불가
```
> 클래스 내부에서 인자나, 메소드를 공유하고 싶을 때 쓰는 키워드

### Singletons

싱글톤이란 ? class로 부터 단 하나의 오브젝트를 생성해서 사용하는 패턴

```ts
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // 이 클래스에서 만든 object가 있으면 그것을 리턴
    // 없으면 만들어서 리턴
    if (ClassName.instance === null){
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}
const a = new ClassName(); // 이런 행위를 막아야함, private로 막음
const b = ClassName.getInstance() 
```

### 상속(Inheritance)
```ts
class Parent{ 
  constructor(protected _name: string , private _age: number){}
  public print(): void{console.log(`hi ${this._name} ${this.age}`)}
  protected printName(){}
}
const p = new Parent("Mark",39);

class Child extends Parent{
  // 생성자가 없다면 parent의 생성자를 따라감
  public gender = "male";

  constructor(age: number){
    super('Mark Jr.', age)
    this.printName() // 생성자에서 this를 호출할때는 super를 먼저 선언해줘야 하는 룰이 있다
  } 
}
const c = new Child(5);
```

### Abstract Classes
```ts
abstract class AbstarctPerson {
  protected _name: string = "Mark";
  // 추상 메소드는 {} 없이 만든다
  abstract setName(name: string): void;
}

class Person extends AbstarctPerson{
  // (IDE에 자동 완성 기능도 있긴 하다) 상속받아서 메소드를 자식 클래스에 만들어야함
  setName(name: string): void {
    this._name = name;
  }
}
const p = new Person();
p.setName("tom");
```
