# 2022_01_02

JS 객체의 프로퍼티나 메서드에 접근하는 원리에 대해 알아보고, 상속을 구현하고, 스코프의 정의와 규칙, 모듈, 클로저, 호이스팅에 대해 배우는 단원

---

<h2> 프로토타입 </h2>

Js에서는 프로토타입을 기반으로 객체 지향의 상속 개념을 구현한다. **모든 객체는 부모 역할을 하는 프로토타입 객체의 참조 링크를 가지고 있고, 이걸 통해 프로퍼티나 메서드를 상속 받을 수 있다** 또한 프로토타입도 상위 프로토타입으로부터 프로퍼티나 메서드를 상속 받을 수 있다.

<h3> 프로토타입과 프로토타입 체인 </h3>

객체의 프로토타입은 참조 링크 형태로 [[Prototype]] 내부 프로퍼티에 저장된다. **참조 링크 형태의 저장이므로 동일 프로토타입 상속 객체는 모두 같은 프로퍼티와 메서드를 공유함**


<h4> 프로토타입 체인 </h4>

프로토타입 체인은 상위 프로토타입과 연쇄적으로 연결되 구조를 의미함 그리고 프로퍼티나 메서드에 접근하기 위해 이 연결구조를 따라 차례대로 검색하는 것을 프로토타입 체이닝이라고 한다.

<h4> 최상위 프로토타입 </h4>

Object.prototype은 프로토타입 체인의 최상위 프로토타입이다. 모든 객체의 종점이기도 하다.

<h4>다양한 객체의 프로토타입</h4>

배열처럼 내장된 객체의 프로토타입은 각자 자신의 프로토타입을 따로 정의 하고 있다. 배열 객체는 프로토타입으로 Array.prototype 이란 고유 객체가 설정된다.

물론 Array.prototype의 상위는 Objetct.prototype이다.

---

<h3> 프로토타입과 생성자 함수 </h3>

모든 함수에는 **prototype** 프로퍼티가 존재함. new 키워드와 함께 생성자 함수로 사용할 경우에는 특별한 역할을 한다

여기서 구분해야 할 점은 객체의 [[Prototype]]과 함수의 prototype은 다르다는 점이다 함수의 prototype은 일반적인 객체의 프로퍼티이며, 프로토타입을 가리키는 참조링크는 아니다.

<h4>객체의 생성과 함수의 prototype 프로퍼티</h4>

생성자 함수로 생성된 객체는 '생성자 함수의 prototype 프로퍼티'가 프로토타입([[Prototype]])으로 설정 된다.

~~~
function Vehicle(type) {
  this.type = type;
}

const vehicle = new Vehicle('Car');
console.log(Vehicle.prototype === vehicle.__proto__); // true
~~~

vehicle 객체의 프로토타입은 Vehicle() 생성자 함수의 Vehicle.prototype을 가리키며 이것은 Object.prototype을 가리킨다.

생성자 함수를 통해 생성된 모든 객체는 이러한 매커니즘으로 상속을 구현함.

<h4> 함수의 prototype 프로퍼티와 프로토타입의 관계</h4>

함수의 prototype 프로퍼티는 constructor 프로퍼티 하나만을 가지는 객체이다. 이 프로퍼티는 자신과 연결된 생성자 함수를 가리키며, 이 프로퍼티를 통해 객체가 어떤 생성자 함수를 통해 생성되었는지 알 수 있다.

즉 생성자 함수와 생성자 함수의 prototype 프로퍼티는 서로 상호 참조 관계이다.

---

<h3> 프로토타입의 확장과 상속 </h3>

프로토타입에 메서드나 프로퍼티를 추가하는 방법도 Js의 객체이므로 일반 객체처럼 동적으로 프로퍼티나 메서드를 추가하거나 삭제할 수 있다. 이렇게 변경된 프로퍼티는 실시간으로 프로토타입 체인을 통한 검색에 반영이 된다.

~~~
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.stop = function() {
  console.log('stop!');
}

const vehicle = new Vehicle('car');
console.log(vehicle.stop()); // 'stop!'
~~~

단, 객체가 생성된 이후에 프로토타입을 수정하는 것은 지양해야한다.

<h4> 프로토타입을 사용한 상속 구현 </h4>

~~~
function inherit(Parent,child){
  function F() {};
  F.prototype = Parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
}
~~~

F의 프로토타입으로 부모의 프로토타입을 가리키게 하였고, 차일드의 프로토타입에 F()를 넣어 체이닝이 되게끔 하였다. 마지막으로 차일드 프로토타입의 constructor에 child를 넣어 줌.











