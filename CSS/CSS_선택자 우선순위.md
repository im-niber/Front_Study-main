# 선택자 우선순위

우선순위란, 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법

1. 점수가 높은 선언이 우선함 !
2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선함 !

~~~
html

<div
 id = "color_yellow"
 class = "color_green"
 style = "color: orange;"> // 1000점
 Hello world!
</div>

css
div {color : red !important;} // 제일 높은 점수.
#colr_yellow {color : yellow;} // 100점 
.color_green { color : green;} // 10점
div {color : blue;} // 1점
* {color : darkblue;} // 0점
body {color : violet;} // 상속 x, 점수로 별도로 계산 x

// 따라서 red로 색상이 적용이 된다.
~~~

css 우선순위의 점수를 계산하는 것은 **명시도** 라고 함

**important** 키워드를 사용하는 것을 **중요도**라고 부름 

**선언순서**(코드가 해석된 순서)에 따라 우선한다고 표현한다.

**점수 연습하기**
- .list li.item의 선택자의 경우 21점이다(.list 10점, li 1점, .item 10점)
- .list li:hover의 경우 21점 (:hover 가상 클래스 선택자, 클래스 선택자와 동일)
- .box::before => 11점( :: 요소, 태그와 거의 비슷하다고 보면 된다)
- #submit span => 101점
- header .menu li:nth-child(2) => 22점 (태그, 클래스, 태그, :으로 시작하는 클래스)
- :not(.box) => 10점 (not 같은 경우는 부정 선택자 이므로 계산을 안하기 때문에 10점이다)

