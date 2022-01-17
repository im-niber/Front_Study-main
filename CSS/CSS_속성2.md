# CSS 속성 part 2

## 배치 

### position

요소의 위치 지정 기준

- static(default) : 기준 없음 
- relative : 요소 자신을 기준
- absolute : **위치 상** 부모 요소를 기준 
- fixed : 뷰포트(브라우저)를 기준 
> sticky : 스크롤 영역 기준

음수도 사용 가능

absolute 속성을 사용해서 배치를 지정한다면 구조상의 부모 요소의 position 값이 있어야 한다 relative가 제일 무난함  

### top, bottom, left, right

요소의 각 방향별 거리 지정 

- auto(default) : 브라우저가 계산
- 단위 : px, em, rem 등 단위로 지정

### 요소 쌓임 순서(Stack order)

어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정

1. 요소에 position 속성 값이 있는 경우 위에 쌓임 (기본값 static 제외)
2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
3. 1번과 2번 조건까지 같은 경우, HTML의 작성이 나중에 작성했다면 위에 쌓임

### z-index

요소의 쌓임 정도를 지정

- auto(default) : 부모 요소와 동일한 쌓임 정도
- 숫자 : 숫자가 높을 수록 위에 쌓임

### 요소의 display가 변경됨

position 속성의 값으로 absolute, fixed가 지정딘 요소는, display 속성이 block으로 변경이 된다.

## flex(정렬)

1차원 레이아웃을 만드는 개념이 flex라고 한다 

부모 요소의 display가 flex라면 flex container라고 부르고 그 자식 요소들은 flex items 라고 부른다

### display

Flex Container의 화면 출력(보여짐) 특성

- flex : 블록 요소와 같이 Flex Container 정의
- inline-flex : 인라인 요소와 같이 Flex Container 정의

### flex-direction

주 축(Main-axis, 교차 축 : Cross-axis)을 설정

- row(default) : 행 축(좌 -> 우)
- row-reverse : 행 축(우 -> 좌)
- column : 열 축 (위 -> 아래)
- column-reverse : 열축(아래 -> 위)

### flex-wrap

Flex Items 묶음(줄 바꿈) 여부

- nowrap(default) : 묶음(줄 바꿈) 없음(한 줄에 모든 요소를 표현하려고 함)
- wrap : 여러 줄로 묶음(공간이 부족한 요소부터 다음 줄에 표현)
> wrap-reverse : wrap의 반대 방향으로 묶음

### justify-content

주 축의 정렬 방법

- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- center : Flex Items를 가운데 정렬
> space-between : 각 Flex item 사이를 균등하게 정렬
> space-around : 각 flex item의 외부 여백을 균등하게 정렬

### align-content

교차 축의 **여러 줄** 정렬 방법

- stretch(default) : Flex Items를 시작점으로 정렬(요소를 늘려서 정렬하려고 하는 성질이 있음)
- flex-start : Flex Items를 시작점으로 정렬
- flex-end : Flex Items를 끝점으로 정렬
- center : Flex Items를 가운데 정렬
> space-between : 각 Flex item 사이를 균등하게 정렬
> space-around : 각 flex item의 외부 여백을 균등하게 정렬

### align-items

교차 축의 **한 줄** 정렬 방법

- stretch(default) : Flex Items를 교차 축으로 늘림
- flex-start : Flex Items를 각 줄의 시작점으로 정렬
- flex-end : Flex Items를 각 줄의 끝점으로 정렬
- center : Flex Items를 각 줄의 가운데 정렬
> baseline : Flex Items를 각 줄의 문자 기준선에 정렬

### order

Flex item 순서

- 0(default) : 순서 없음
- 숫자 : 숫자가 작을수록 먼저

### flex-grow 

Flex Item의 증가 너비 비율

- 0(default) : 증가 비율 x
- 숫자 : 증가 비율

### flex-shrink

Flex item의 감소 너비 비율

- 1(default) : Flex Container 너비에 따라 감소 비율 적용
- 숫자 : 감소 비율

### flex-basis

Flex item의 공간 배분 전 기본 너비

- auto(default) : 요소의 content 너비
- 단위 : px, em, rem 등 단위로 지정

## 전환

어떤 요소를 전 상태와 후 상태를 자연스럽게 만들어 주는 것을 전환 이라고 한다

### transition

요소의 전환(시작과 끝)효과를 지정하는 단축 속성

- transition : 속성명, **지속시간(단축형으로 작성할 때 필수 포함 속성)**, 타이밍 함수, 대기 시간;

### transition-property

전환 효과를 사용할 속성 이름을 지정 

- all(default) : 모든 속성에 적용
- 속성이름 : 전환 효과를 사용할 속성 이름 명시

### transition-duration

전환 효과의 지속 시간 지정 

- 0s(default) : 전환 효과 없음
- 시간 : 지속시간(s)을 지정

### transition-timing-function

전환 효과의 타이밍(Easing) 함수를 지정

- ease(default) : 느리게 - 빠르게 - 느리게 
- linear : 일정하게
- ease-in : 느리게 - 빠르게
- ease-out : 빠르게 - 느리게
- ease-in-out : 느리게 - 빠르게 - 느리게
> cubic-bezier(n,n,n,n) : 자신만의 값을 정의(0~1)
> steps(n) : n번 분할된 애니메이션

> 참고 사이트 : tweenmax easing, easing functions, easing functions mdn

### transition-delay

전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정

- 0s(default) : 대기시간 없음
- 시간 : 대기시간(s)을 지정


