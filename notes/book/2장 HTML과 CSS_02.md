## 2021_12_08 

<h2> CSS </h2> 

작성방법은 매우 간단하다. `A의 B를 C로 하겠다` 이 문장에 맞춰 작성하면 된다.

여기서 A는 대상을 가리키는 선택자, B는 그 대상의 프로퍼티를 의미하며 C는 프로퍼티를 어떻게 바꿀지 정하는 값이다.

~~~
선택자(A) {
  프로퍼티(B) : 값(C);
}
~~~


외부 CSS 파일에 작성된 스타일을 HTML페이지에 연결할 때는 link 태그를 이용한다. href속성을 통해 CSS 파일의 위치를 지정하고 rel로 관계를 표현한다. CSS 는 stylesheet로 값을 넣는다.

~~~
<!DOCTYPE html>
<html>
<head>
  <link rel = "stylesheet" href = "./main.css" type = "text/css"/> 
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>...</body>
</html>
~~~


`<style>` 태그로 작성도 가능하며, 작성시에는 style 속성을 사용하고 중괄호 없이 사용하면 된다.   
`<h2 style = "color : skyblue; font-size = 14px;">Hello</h2>`


<h4> 상속 </h4>

CSS의 프로퍼티 중에는 상위 요소(부모,조상)에서 적용 되었지만 자식 요소에도 영향을 미치는 프로퍼티들이 있다. 대표적으로는 font 관련 프로퍼티들이 그 예이다.

반대로 width, height, margin, display, border 처럼 상속되지 않는 프로퍼티도 존재.

또 상속되어야 하는 프로퍼티지만 HTML의 요소의 종류에 따라 상속되지 않기도 한다. 대표적으로 `<button>`요소이다.

만약 프로퍼티와 요소의 종류에 영향받지 않고 부모 요소의 프로퍼티를 상속받고 싶다면 명시적으로 **inherit** 값을 사용한다.

`<button style = "font-size = inherit"/>`


<h3> 선택자 </h3> 

전체 선택자는 `*`와일드 카드라 불리는 별표 문자를 사용해 스타일을 지정함. 브라우저의 기본 스타일을 초기화하는 reset css나 normalize css 등의 스타일에서 주로 사용한다.

타입 선택자는 HTML 요소의 이름을 사용하고 해당하는 모든 요소들이 영향을 받는다. 

id 선택자는 id 속성에 지정한 값을 이용해 스타일을 지정한다. 다른 HTML 속성을 지정하는 방식과 동일하게 open tag 에서 id 속성에 값을 넣어 지정한다. id는 페이지당 하나만 가지는 단일값으로 정확하게 일치하는 단일 요소에만 지정하고 싶을 때 사용한다. 앞에 `#` 을 붙여서 사용한다. 만약 id-name 요소에 설정하고 싶다면 다음과 같다.


~~~
<style>
#id-name {
  padding : 10px;
}
</style>
~~~
---
class 선택자는 요소에 스타일을 지정하는 가장 일반적인 방법이다. id 속성과 거의 동일하며 여러 요소에 같은 class 값을 지정해 동일한 스타일을 지정하는 것이 가능하다. class명 앞에 `.`을 붙여 작성한다. class-name 요소에 설정하고 싶다면 다음과 같다.


~~~
<style>
.class-name {
  padding : 10px;
}
</style>

~~~
---

속성 선택자는 html 속성의 값들을 비교한 결과로 스타일을 지정한다. 선택자는 `"요소 이름[속성명(연산자)값]"`의 형태를 가진다.

연산자가 속성명이라면, 해당 속성을 갖는 요소를 모두 선택함.
~~~
<style>
/* id 속성을 갖는 span 요소에 스타일 지정 */
span[id] {
  color : skyblue;
}
~~~
연산자가 `=` 라면, 값이 정확하게 일치할 때 선택한다.
~~~
<style>
/* a 요소에 href 속성의 값이 밑과 같다면 지정.*/
a[href="https://example.com"]  {
  color : skyblue;
}
~~~
연산자가 `~=` 라면, 값이 정확하게 일치할 때 선택한다. `=`와 다르게 띄어쓰기로 여러 값이 지정된 요소일 때도 찾아서 선택한다.

~~~
<style>
/* 클래스로 class1을 갖는 요소 지정 */
span[class ~= "class1"] {
  color : skyblue;
}
~~~

연산자가 `|=` 라면, 값이 일치하거나 값 뒤 -(하이픈)을 작성할 때 또한 선택함.

연산자가 `^=` 라면, 접두사로 값을 가질 때 선택함.

연산자가 `$=` 라면, 접미사로 값을 가질 때 선택함.

연산자가 `*=` 라면, 값이 포함된 모든 요소를 선택한다. 

지금까지 소개한 선택자 외에 자손 관계, 인접한 자손에게 스타일을 지정하는 >, ~ 결합자 등 여러가지가 존재한다.

---
여러 선택자를 이용해 동시에 스타일을 지정하려면 `,`를 이용한다.
~~~
<style>
#id-name,
.class-name,
button {
  color : skyblue;
}
</style>
~~~
---

<h4>우선순위와 명시도(Specificity) </h4>

한 요소를 가리키는 여러 선택자의 스타일이 한 번에 적용되는 경우가 종종 일어난다. 각 스타일이 한 요소에 중첩되는 상황에서 어떤 스타일이 우선순위로 적용되는지 알아보자.

1. **마지막에 작성된 스타일이 적용된다** : 제일 마지막에 작성된 스타일이 우선순위로 적용된다.
2. **명시도(Specificity)가 높은 선택자의 스타일이 적용된다** : 명시도는 포커의 승리 조건과 비슷함, 명시도가 같으면 더 많이(구체적으로) 작성된 선택자의 스타일이 적용되며, 상위 명시도를 가진 선택자가 하나라도 있으면 아무리 하위 선택자의 개수가 많더라도 상위 명시도를 가진 스타일이 적용된다.
(A,B,C) 순으로 명시도를 설명하자면, A는 id , B는 class,속성,의사 클래스 선택자, C는 요소, 의사 요소 선택자가 해당된다.

지금까지 살펴본 특성을 모두 무시하는 두가지 강력한 방법이 존재한다. 
1. 인라인 스타일(stlye = "") : id를 부여하는 방식보다 더 높은 명시도를 가짐.
2. !important : 모든 특성을 무시하고 적용함. 나중에 디버깅을 어렵게 하므로 안티패턴으로 여겨진다.
---
<h4>박스 모델과 여백 상쇄</h4>

브라우저의 렌더링 엔진은 각 요소를 나타낼 때 CSS 박스 모델에 맞춰 그립니다. 박스 모델은 네가지 영역으로 이뤄집니다.
**content 영역**, **padding 영역**, **border 영역**, **margin 영역**으로 구분됩니다. content 영역은 텍스트나 하위 박스 모델 등을 나타내며, padding, border, margin은 순서대로 content 영역을 둘러싸는 영역입니다. 둘러싼 영역들은 margin, padding, border CSS 프로퍼티로 너비를 지정합니다.

박스 모델을 이해하기 위해 반드시 알아야 하는 프로퍼티가 존재합니다. 바로 **box-sizing**입니다. box-sizing 프로퍼티는 요소의 너비와 높이를 계산하는 방식을 지정합니다. 두가지 값이 가능하며 다음과 같습니다.
1. content-box : content 영역만을 기준으로 계산됩니다. 해당 요소에 width를 100px 준다면 content 영역의 너비만 100px가 되며, padding, border는 별개로 계산이 됩니다. 브라우저의 디폴트 값입니다.
2. border-box : padding, border, content 영역을 합한 영역을 기준으로 계산이 됩니다. 만약 해당 요소에 width를 100px 준다면, padding, border, content 영역의 너비를 모두 합한 값이 100px 입니다.

---
**여백 상쇄**

여백은 단순하게 너비나 높이에 더하여 계산될 것 같지만 실제로는 그렇지가 않습니다. 여백상쇄 때문인데, 인접한 같은 레벨의 블록 요소에 상하 여백이 겹치면 여백이 하나로 합쳐지는 현상을 여백상쇄 라고 합니다. 이때 여백은 인접한 여백 중 큰 여백으로 상쇄 됩니다. 여백 상쇄는 display 프로퍼티 값이 flex, grid일 때나 position 프로퍼티가 absolute일 때, float인 상태일 때는 적용되지 않습니다.

---
<h4>flex를 이용한 레이아웃 만들어보기 </h4>

flex는 디바이스나 디스플레이의 크기에 따라 컨테이너에 들어 있는 콘텐츠의 너비, 높이, 순서를 변경해 컨테이너 공간을 가장 효율적으로 채우는 방법을 추구합니다. 따라서 여유 공간을 채우도록 너비나 높이를 늘이거나 줄입니다.


**flex container와 flex items**

display 프로퍼티에 flex 나 inline-flex를 갖는 HTML 요소를 flex container라고 합니다. 또 그 안에 있는 자식 요소들을 flex items라고 부릅니다. flex container는 flex-flow, flex-direction을 기준으로 배치됩니다.

---
**주축(main axis)과 교차 축(cross axis)**

![flex](https://postfiles.pstatic.net/MjAxODA0MTBfNTIg/MDAxNTIzMjkzODI2OTAx.WfdlaB1ua9S5FKwztrPs0EJ1seT_ymG0l-AKxQGHHtkg.VSQ9YJNAqGY85xDG8TtaROhoyDaNPV_iRWmf-U2ZurUg.PNG.pts4779/flex_terms.png?type=w773)

주축(main axis)은 flex items가 배치되는 기본축을 의미한다. 주축의 시작 지점을 main-start, 끝 지점을 main-end, 이 크기를 main-size라고 함. 만약 평행으로 진행한다면 main-size는 flex container의 너비이다.

교차 축(cross axis)은 주축에 수직인 방향을 의미한다. 주축과 마찬가지로 start,end,size가 존재하며 주축의 방향이 수평이라면, 교차 축의 방향은 수직이므로 flex container의 높이이다.

---

<h3>flex container</h3>
flex 레이아웃을 만드려면 해당 요소를 flex container로 만들어야 한다. HTML 요소의 display 프로퍼티에 flex나 inline-flex 값을 지정하면 해당 요소는 flex container이다. 


<h4>flex-direction</h4>
flex container에서는 flex-direction을 통해 주축의 방향을 지정하며, 방향은 row, column이 존재한다. row-reverse로 지정시 오른쪽에서 왼쪽으로 진행하며 column도 reverse가 존재한다.



<h4>flex-wrap</h4>
기본적으로 flex container는 한 줄에 맞춰진다. 하지만 flex-wrap 프로퍼티를 사용하면 여러 행으로 표현 가능하다. 기본값은 nowrap이며 wrap으로 사용하면 위에서부터 아래로 사용된다. reverse 존재.

다음으로 소개할 프로퍼티는 flex container 내부의 아이템을 어떻게 배치할지 결정하는 프로퍼티이다.


<h4>justify-content</h4>
주축의 item을 어떻게 배치할지 결정함. 

~~~
.container{
  justify-content : flex-start | flex-end | start | end | center | left | right | space-between | 
  space-around | space-evenly ... + safe | unsafe;
}
~~~

가장 많이 사용하는 몇 가지 프로퍼티 값들은 아래와 같은 특징을 가짐.
* flex-start : 아이템을 main-start 기준으로 나열한다.
* flex-end : 아이템을 main-end 기준으로 나열한다.
* space-between : 첫 아이템을 main-start, 마지막 아이템을 main-end에 배치하고 여백을 공평하게 분배
* space-around : 양끝 아이템의 좌우에 여백을 둔 뒤 아이템 간 여백을 배분한다. 양끝 아이템의 여백 단위가 1이라면 아이템 간 간격은 2이다.
* sapce-evenly : main-start에 처음 아이템, main-end에 마지막 아이템, 나머지 아이템의 간격을 공평하게 분배

justify-content 프로퍼티는 브라우저에 따라 지원하는 값들이 제한되므로, 미리 확인 후 사용하여야 한다.


<h4>align-items</h4>
교차 축에 대해 item을 어떻게 배치할지 결정 한다. 교차 축에 대한 justify-content라고 볼 수 있다.

~~~
.container{
  align-items : stretch | baseline | flex-start | flex-end | start | end | center 
  | first baseline | space-between | space-around | space-evenly ... + safe | unsafe;
}
~~~


<h4>align-content</h4>
교차 축과 아이템 간 공간이 있으면 공간을 어떻게 분배할지 정합니다. flex item이 여러 줄로 작성될 때 영향을 준다.

~~~
.container{
  align-content : stretch | baseline | flex-start | flex-end | start | end | center 
  | first baseline | space-between | space-around | space-evenly ... + safe | unsafe;
}
~~~

---
<h3>flex items</h3>
부모 요소가 flex containe이면 자식 요소들은 자동으로 flex items이다. flex items 요소들은 flex container처럼 flex 관련 프로퍼티를 통해 flex items를 다룹니다.


<h4>order</h4>
flex items의 순서를 지정한다. 기본값은 0이며 음수와 양수 모두 가능. order값이 존재하면 order가 작은 요소부터 정렬된다.


<h4>flex-grow</h4>
item이 차지하는 비율을 정함. 이 값은 양수만 가능하며 이 프로퍼티를 가진 다른 자식 요소들과 균등 분배함.

<h4>align-self</h4>
flex container에서 정의된 align-items의 프로퍼티를 오버라이딩한다. 프로퍼티 값과 동작은 align-items와 동일하다.

~~~
.item{
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
~~~

---
<h3> 반응형 웹을 위한 미디어 쿼리 </h3>
미디어 쿼리를 사용하면 콘텐츠 자체를 변경하지 않고 장치의 해상도, 뷰포트의 너비, 미디어의 유형 같은 조건에 따라 스타일을 지정할 수 있다. 데스크톱과 모바일, 태블릿 등 화면의 크기에 따라 다른 스타일을 지정하거나 인쇄, 음성 장치 등의 조건에 따라 다른 스타일을 적용 가능하다.

각 스타일은 media 속성에 작성된 조건에 해당될 때 적용되는데, css 파일(스타일 시트)은 조건과 상관없이 다운로드 되는걸 주의 해야한다.

미디어 쿼리는 미디어 타입과 미디어 기능을 기준으로 동작한다. 두 조건이 모두 일치할 때 해당 코드가 동작함. 미디어 타입에는 **모든 장치(all), 인쇄 미디어(print), 화면(screen)** 등이 존재한다.

미디어 기능(feature)은 width나 height 등 장치의 환경 및 특성을 나타낸다. 이 값은 미디어 타입과 다르게 괄호로 묶어서 나타내며, min-과 max-를 이용해 최소, 최대 조건을 명시할 수도 있다. max이면 "이하" 일 때, min이면 "이상" 일 때 스타일을 적용함.

---

<h2>접근성(Accessibility, a11y) </h2>
웹 접근성은 모든 신체적,환경적 한계를 고려해 개발하는 것을 의미한다. 우리나라의 장애인 차별 금지법에도 웹 접근성과 관련된 내용이 있으므로 의무적으로 지켜야한다.

<h3> 웹 접근성 지침 </h3>
지침은 W3C에서 설립한 WAI(Web Accessibility Initiative)에서 전문적으로 연구하며 가이드라인을 제공함. 여기에서는 WCAG(Web Content Accessibility) 기반으로 설명할 것이다.

<h4> 속어, 약어 사용을 지양하라 </h4>
불필요한 전문 용어나 속어, 약어를 사용하는 것은 지양해야 한다. 

<h4> 콘텐츠의 제목과 단락을 명확하게 구분하자. </h4>
스크린 리더는 컴퓨터의 화면을 읽어 주는 프로그램이다. 시각적으로 정보를 획득하기 어려운 사람들을 위해 화면에 나타나는 정보를 기계가 음성으로 읽어준다. 콘텐츠의 제목과 단락을 구분하는 것은 스크린 리더가 글의 내용을 파악할 때 도움을 준다. 

<h4> 키보드 동작을 제공하자 </h4>

`<button>, <input>, <select>`요소 등을 사용하지 않고 `<div>`와 CSS를 이용해 비슷하게 구현해 사용할 때도 있습니다. 이때 기본 요소들이 제공하는 키보드 동작들을 모두 사용하지는 못합니다.
그런데도`<div>`요소를 반드시 사용해야 한다면 몇 가지 추가적인 코드 작성으로 사용 목적과 유사하게 만들어야 합니다.
* role : 해당 요소의 원래 목적을 작성합니다. `<div>`를 `<button>`의 목적으로 사용할 때 role = button 으로 작성하면 스크린 리더 등 기계에서 해당 요소를 버튼으로 인식함.
* tab-index : 해당 요소를 탭 키로 도달하게 하는 속성이다. 해당 속성을 통해 탭 키로 이동할 다음 키보드 위치를 지정한다.
* 키보드 이벤트 리스터 추가하기 : 버튼 동자깅 엔터나 스페이스로 동작하게끔 자바스크립트를 이용해 이벤트를 추가하는 것이 좋다.

<h4> Focus하는 지점을 명확하게 하자 </h4>
웹 사이트는 키보드만으로 모든 기능이 동작해야 한다. 항목에 Focus가 된다면 시력이 있는 사용자를 위해 윤곽선이 나타나야 한다. outline CSS 프로퍼티를 0이나 none으로 지정할 경우 Focus가 된 요소인지 화면에서 식별할 수 없게 된다. 하지만 윤곽선을 지우는 것은 마우스를 사용할 수 없는 사람들에게 현재 포커스 지점을 알려 줄 수 없어 지양해야 하며, 지우게 된다면 현재 어떤 요소를 Focus하는지 추가로 나타내야 한다.

<h4>멀티미디어 요소에 접근성을 부여하자 </h4>
스크린 리더는 이미지나 동영상, 오디오에 접근하기가 힘들다. 하지만 다행히도, 이러한 요소들이 어떠한 의미인지 전달해주는 속성들이 존재한다.

`<img src = "coffe.png" alt = "컵에 담긴 따듯한 아메리카노" title = "아메리카노"/>`

위 예제 코드처럼 alt와 title속성을 작성한다면, 스크린 리더가 읽고 전달이 가능하다. alt를 지정하면 마우스를 올릴 때 해당 이미지에 대한 title이 노출된다. 


이 외에 해당 이미지가 문서에서 특별한 의미가 없다면 background 이미지로 작성하거나 alt 속성에 빈 문자열을 지정하는 것을 권장함.

---
여기서 작성한 방법 외에 애니메이션이나 깜빡이는 효과, 색상 선택에도 주의를 기울여야 하며 ARIA(Accessible Rich internet Applications) 등 더 살펴보고 주의해야 하는 부분이 존재한다. 웹 접근성 가이드라인을 모두 맞추는 것은 사실상 불가능하지만, 가이드라인을 준수하는 것은 더 많은 사람이 편견 없이 사이트를 이용하는 데에 굉장히 중요한 부분임을 명심하자.
