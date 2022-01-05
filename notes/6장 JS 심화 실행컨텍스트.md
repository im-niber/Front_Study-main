# 2022_01_05

<h2> 실행 컨텍스트란 무엇인가 ? </h2>

실행 컨텍스트(Execution Context)는 **JS 코드를 실행할 때 필요한 정보들을 저장하고 제공하는 환경**이다. 즉 스코프의 정보를 담은 환경을 의미함. 현재 실행되는 컨텍스트와 관련이 없는 코드가 실행이 된다면 새로운 컨텍스트가 생성이되고 제어권을 가져간다 실행이 종료된 이후 컨텍스트는 소멸되며, 소멸된 후 이전 실행 컨텍스트에 제어권을 넘겨준다. 전역 컨텍스트까지 실행이 완료가 되면 모든 실행이 완료된 것으로 볼 수 있다.

---

<h2> 실행 컨텍스트의 구성요소 </h2>

실행 컨텍스트는 Lexical Environment(LE), Variable Environment(VE) 두 가지 컴포넌트로 구성이 된다. 이 컴포넌트들은 Environment Records(ER)라 불리는 형태로 구성되어 있다.

<h3> Environment Records와 스코프체인 </h3>

**ER은 렉시컬 스코프를 기반으로 특정 변수와 함수에 대한 식별자의 연결 정보를 저장한다** 함수 선언, 블록문 또는 try, catch절과 같은 구문들이 평가될 때 식별자 바인딩을 위해 새로운 ER이 생성된다. **모든 ER에는 OuterEnv필드가 있으며, 이 필드는 상위 렉시컬 스코프에 대한 ER을 참조한다**

---

<h3> 다양한 Environment Records </h3>

<h4> declarative Environment Record </h4>

변수 상수 클래스 모듈 또는 함수 선언 등 렉시컬 스코프 내에 선언된 식별자들을 바인딩한다.
 
 - module Environment Record : 모듈의 외부 소코프를 나타내는 정보를 추가적으로 바인딩한다 다른 ER에 존재하는 식별자에 간접적으로 접근할 수 있는 가져오기(import) 바인딩 제공
 - function Environment REcord : 함수 내의 최상위 위치(top-level)에 선언한 식별자들을 바인딩한다. 함수에서 사용되는 this 값과 new, target(new를 사용하여 호출되었는지)에 대한 정보를 가진다. 화살표 함수가 아닌 경우에만 this를 바인딩하며, super로 상위 클래스에 대한 정보를 바인딩한다.

<h4> object Environment Record </h4>

binding object라는 객체의 프로퍼티들을 식별자로 바인딩한다. 객체 프로퍼티들은 부작용에 의해 동적으로 변경될 수 있다. with문 처럼 동적으로 스코프가 변경되는 경우에 binding object를 이용하여 this 값을 제공이 가능하다.

<h4> global Environment Record </h4>

최상위 전역 스코프에서 선언된 식별자와 전역 객체에 대한 바인딩을 한다. global ER은 declarative ER과 object ER을 합성한 형태이다. 

object ER은 내장 전역 객체와, var 변수, 함수 선언문 식별자에 대한 바인딩을 binding object로 가지고 있으며, 이 binding object가 우리가 window로 접근하는 **전역 객체**이다. 그 외의 나머지 식별자에 대한 바인딩은 declarative ER에서 저장하며, 이를 우리가 **전역 변수**라고 부른다

<h3> Lexical Environment와 Variable Environment </h3>

LE와 VE는 모두 ER에 바인딩된 정보를 찾을 수 있는 컴포넌트이다. 단 var 키워드로 선언된 변수의 바인딩은 VE를 통해 찾고, 이외 식별자는 LE를 통해 찾는다. 
~~~
function foo() {
  const a = 1;
  var b = 2;
  console.log(a,b);
}
foo();
~~~

LE,VE는 Foo ER과 동일한 형태이기 대문에 this 바인딩과 상위 ER에 대한 참조 정보도 함께 담고 있다. Foo ER은 함수 선언에 의해 생성된 ER이기 때문에 function ER의 구현체이다.

<h2> 실행 컨텍스트의 생성 과정 </h2>

~~~
function foo(){
  var a;
  function bar(){
    let b;
    b=2;
    console.log(a,b); // 1,2
  }
  a = 1;
  bar();
}
foo();
}
~~~

1. 전역 컨텍스트 생성과 바인딩

 먼저 전역 실행 컨텍스트가 생성되면 global ER이 생성이된다. this 바인딩과 OuterEnv 필드만 설정된 상태이며 식별자에 대한 어떠한 바인딩도 이뤄지지 않은 상태이다. 그리고 LE와 VE가 생성이 된다.

 이후 코드가 실행되며 Global ER에 foo() 함수 선언문을 바인딩한다.

2. foo 실행 컨텍스트 생성과 바인딩

 foo()함수를 호출하여  
