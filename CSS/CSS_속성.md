# CSS 속성

코드를 기억 하는 것도 중요하지만, 코드가 화면에 어떻게 적용되는지 상상하면서 학습하는 것이 좋습니다

**기본적으로 HTML 요소는 가로너비와 세로너비를 가지고 있는 사각형이다**

Keyword : 박스 모델, 글꼴, 문자, 배경, 배치, 플렉스(정렬), 전환, 변환, 띄움, 애니메이션, 그리드, 다단, 필터

## 박스 모델

#### 너비(width, height)
 - width, height : 요소의 가로/세로 너비 
 - auto(기본값, 요소에 이미 들어있는 속성 값) : 브라우저가 너비를 계산
 - 단위 : px, em, vw 등 단위로 지정

> 어떠한 속성이 기본적인 값을 이미 가지고 있는지를 확인 해야 함

```html
<span>Hello</span>
<span>World</span>
```

대표 인라인 요소(가로 세로 너비를 조절 불가) , 본질적으로 아무것도 나타내지 않는, 콘텐츠 영역을 설정하는 용도, **포함된 콘텐츠 크기만큼 자동으로 줄어듬 (가로/세로 동일 적용)!**

```html
<div>Hello</div>
<div>World</div>
```

대표 블록 요소, 본질적으로 아무것도 나타내지않는, 콘텐츠 영역을 설정하는 용도, **가로 너비는 부모 요소의 크기만큼 자동으로 늘어남, 세로 너비는 포함된 콘텐츠 크기만큼 자동으로 줄어듬**

#### max-width, max-height
 - 요소가 커질 수 있는 최대 가로 세로 너비
 - none : 최대 너비 제한 x
 - 단위 : px em vw 등 단위 지정
 
 > auto : 브라우저가 너비 계산 (잘 사용 x)


#### min-width, min-height
 - 요소가 작아질 수 있는 최소 가로 세로 너비
 - 0 : 최소 너비 제한 x
 - 단위 : px em vw 등 단위 지정
 
 > auto : 브라우저가 너비 계산 (잘 사용 x)

---

## CSS 단위 

### 단위

- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기
- rem : 루트 요소(html)의 글꼴 크기
- vw : 뷰포트 가로 너비의 백분율
- vh : 뷰포트 세로 너비의 백분율 

---

## margin

요소의 외부 여백(공간)을 지정하는 단축 속성, 음수를 사용 가능 !

- 0(기본 값) : 외부 여백없음
- auto : 브라우저가 여백을 계산, 가로(세로)너비가 있는 요소의 가운데 정렬에 활용
- 단위 : px, em, vw 등 단위로 지정
> % : 부모 요소의 가로 너비에 대한 비율로 지정

margin-bottom : 20px, 이런 식으로 원하는 곳만 여백을 추가도 가능하다. (top, right, left 가 있음)

만약 띄어쓰기로 값을 두 개를 작성을 하면 위, 아래가 처음 값, 왼쪽, 오른쪽이 두번째 값으로 적용이 된다. 

세 개로 작성을 하면 (위), (왼쪽,오른쪽), (아래) 로 적용한다.

네 개로 작성 하면 시게방향으로 위 오른쪽 아래 왼쪽 으로 적용이 된다

## padding

요소의 내부 여백(공간)을 지정하는 단축 속성, 요소가 커진다고 생각하면 된다.

- 0(기본 값) : 내부 여백 x
- 단위 : px, em, vw 등 단위로 지정
- % : 부모 요소의 가로 너비에 대한 비율로 지정

margin과 마찬가지로 padding도 띄어쓰기로 값을 구분해서 적용이 가능하다 물론 padding-top 으로 하이픈을 이용해서 개별 속성에 접근도 가능

---

## border

요소의 테두리 선을 지정하는 단축 속성, 요소의 크기가 커짐

**border : 선-두께(border-width) 선-종류(border-style) 선-색상(border-color)**

기본값은 `border: medium none black;` 이고, none이라 출력이 되지 않음.

### border-width 

요소 테두리 선의 두께

> medium : 중간 두께
> thin : 얇은 두께
> thick : 두꺼운 두께
- 단위 : px, em, % 등 단위로 지정

### border-style

요소 테두리 선의 종류

- none : 선 없음
- solid : 실선 (일반 선)
- dashed : 파 선(줄이 끊어져있는 점선)
> dotted : 점 선(줄이 말 그대로 점으로 이루어져 있음)

### border-color

요소 테두리 선의 색상을 지정하는 단축 속성

- black : 검정색
- 색상 : 선의 색상
- transparent : 투명

띄어쓰기로 구분해서 적용이 가능하다. (margin 과 적용방식이 같다)

**색상표현**

- 색상이름 : 브라우저에서 제공하는 색상 이름, red, tomato, royalblue
- Hex 색상코드 : 16진수 색상(Hexadecimal Colors) #000, #FFFFFF
- RGB : 빛의 삼원색, rgb(255, 255, 255)
- RGBA : 빛의 삼원색 + 투명도 , rgba(0, 0, 0, 0.5)

**요소의 테두리 선을 지정하는 개별 속성들**

border-top : 두께 종류 색상;
border-top-width : 두께;
border-top-style : 종류;
border-top-color : 색상;

중간의 방향만 바꿔주면 개별적으로 적용이 가능

### border-radius

요소의 모서리를 둥글게 깎음

- 0(기본 값) : 둥글게 x
- 단위 : px, em, vw 등 단위로 지정

마찬가지로 띄어쓰기로 특정한 모서리에만 적용이 가능하다

---

### box-sizing

요소의 크기 계산 기준을 지정

- content-box(기본 값) : 요소의 내용(content)으로 크기 계산
- border-box : 요소의 내용 + padding + border 로 크기 계산

padding, border로 요소가 커지는 것을 막고 싶다면 border-box로 설정 해주면 된다

border-box는 padding, border를 합친 만큼을 width, height로 계산 해줌

---

### overflow

요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성

- visible(기본 값) : 넘친 내용을 그대로 보여줌
- hidden : 넘친 내용을 잘라냄
- auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성 
> scroll : 넘친 내용을 잘라냄, 스크롤바 생성

부모 요소보다 자식 요소가 큰 경우도 넘쳤다라고 표현함 이 경우 부모 요소에서 hidden 설정을 해주면 잘라서 보여준다 

#### overflow 개별 속성

- overflow-x : x축으로만 체크하는 경우
- overflow-y : y축으로만 체크하는 경우 

---

### display

요소의 화면 출력(보여짐) 특성

- block(기본값) : 상자(레이아웃) 요소
- inline(기본값) : 글자 요소
- inline-block(기본값) : 글자 + 상자 요소
- flex : 플렉스 박스 (1차원 레이아웃, x축이나 y축으로 하나의 축만 사용함)
- grid : 그리드 (2차원 레이아웃)
- none : 보여짐 특성 없음, 화면에서 사라짐
- 기타 : table, table-row, table-cell 등...

span 태그의 인라인 요소를 display:block 으로 바꿔 사용도 가능하다

---

### opacity

요소 투명도 

- 1(기본 값) : 불투명
- 0 ~ 1 : 0 부터 1 사이의 소수점 숫자

---

## 글꼴

### font-style

글자의 기울기

- normal(기본값) : 기울기 없음
- italic : 이탤릭체(기울어짐)
> oblique : 기울어진 글자 

### font-weight

글자의 두께(가중치)

- normal,400(기본값) : 기본 두께
- bold,700 : 두껍게
- 100~900 : 100단위의 숫자 9개, normal과 bold 이외 두께

### font-size

- 16px(기본 값) : 기본 크기
- 단위 : px, em, rem 등 단위로 지정

### line-height

한 줄의 높이, 행간과 유사

- normal(기본 값) : 브라우저의 기본 정의를 사용
- 숫자 : 요소의 글꼴 크기의 배수로 지정
- 단위 : px, em, rem 등의 단위로 지정 

한 줄의 높이 가운데에 글자를 위치하게 만들어줌

### font-family

글꼴(서체 지정)

font-family : 글꼴1, "글꼴2", ... , 글꼴계열(필수작성!);

띄어쓰기 등 특수문자가 포함된 글꼴 이름은 큰 따옴표로 묶어야 한다.

브라우저에서 사용할 수 있는 글꼴을 왼쪽부터 차례대로 사용을 하려고 시도 한다 사용이 불가하면 다음 명시된 글꼴을 적용하려고 시도함

- serif : 바탕체 계열
- sans-serif : 고딕체 계열
- monospace : 고정너비(가로폭이 동등) 글꼴 계열
- cursive : 필기체 계열
- fantasy : 장식 글꼴 계열

---

## 문자

### color

글자의 색상

- rgb(0,0,0)(기본 값) : 검정색
- 색상 : 기타 지정 가능한 색상

### text-align

문자의 정렬 방식

- left(기본 값) : 왼쪽 정렬
- right : 오른쪽 정렬
- center : 가운데 정렬
> justify : 양쪽 정렬

### text-decoration

문자의 장식(선)

- none(default) : 장식 x
- underline : 밑줄
- line-through : 중앙 선
> overline : 윗줄

### text-indent

문자 첫 줄의 들여쓰기/내어쓰기

- 0(default) : 들여쓰기 x
- 단위 : px, em, rem 등 단위 지정(음수 사용 가능, 내어쓰기)

---

## 배경

### background-color

요소의 배경 색상

- transparent(default) : 투명함
- 색상 : 지정 가능한 색상

### background-image

요소의 배경 이미지 삽입

- none(default) : 이미지 x
- url("경로") : 이미지 경로

### background-repeat

요소의 배경 이미지 반복

- repeat(default) : 이미지를 수직, 수평 반복
- repeat-x : 이미지 수평 반복
- repeat-y : 이미지 수직 반복
- no-repeat : 반복 x

### background-position

요소의 배경이미지 위치

- 0% 0%(default) : 0% ~ 100% 사이의 값
- 방향 : top, bottom, left, right, center 방향
- 단위 : px, em, rem 등 단위로 지정(x축 y축)

### background-size

요소의 배경 이미지 크기

- auto(default) : 이미지 실제 크기
- 단위 : px, em, rem 등 단위로 지정
- cover : 비율을 유지, 요소의 더 넓은 너비에 맞춤
- contain : 비율을 유지, 요소의 더 짧은 너비에 맞춤

### background-attachment

요소의 배경 이미지 스크롤 특성

- scroll(default) : 이미지가 요소를 따라서 같이 스크롤
- fixed : 이미지가 뷰포트에 고정, 스크롤 x
> local : 요소 내 스크롤시 이미지가 같이 스크롤
















