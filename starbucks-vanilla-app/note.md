## 강의 내용 공부

### logo 이미지 밑에 여백의 이유 ?

**starbucks logo**를 넣을 때 `img` 태그를 사용해서 넣었다, 이 img 태그는 인라인 요소로서, 가로 세로 값을 가질수 없고, 마진과 패딩의 위아래 값을 가질 수 없는 글자를 위한 요소이다, 이걸 바탕으로 생각해 보면 글자를 작성할 때 **baseline(기준선)** 이 존재하는데 이 선을 기준으로 약간의 공간을 가지는 특징을 가진다.

따라서 밑의 여백이 존재한다 ! 여백을 지울려면 밑의 코드를 작성하면 된다

```css
img {
  display: block;
}
```
### 자식 요소를 부모 요소 내부에서 수직 가운데 정렬 하는 법

먼저 부모 요소에 `position : relative` 를 선언해줘야한다, 그 후에 자식 요소에 `position : absolute` 를 해주고 `top: 0; bottom: 0;, margin : auto 0` 을 넣어주면 부모 요소를 기준으로 수직 정가운데 정렬이 된다.

- `position : absolute` : 위치 상의 부모 요소를 기준으로 함 
- `margin : auto 0` : 2개의 값을 띄어쓰기로 구분한다면 처음 값은 상하 여백, 다음 값은 좌우 여백을 지정함, auto로 자동으로 계산을 하려면 높이 값도 명시가 되어 있어야하고, top bottom의 시작을 0 으로 명시해주면 가운데에 배치를 해줌 


### link 주소의 준비가 되어 있지 않은 경우

밑의 방식으로 관리를 하면 된다.

```html
<a href = "javascript:void(0)">link</a>
```

- `javascript:void(0)` : js에 아무 기능이 동작하지 않겠다 라고 선언하는 것

---

#### position : absolute, fixed의 특징

- 자동으로 요소가 block 요소로 바뀐다

#### ::before 가상 선택자

content 속성과 같이 쓰이며, 요소 앞에 content를 추가 해준다

### top, bottom 속성 사용을 안하는 경우

top, bottom 속성을 사용하지 않아 수직 위치 값이 없다면, 요소의 원래 위치를 그대로 사용한다 만약 `position : absolute`, `position : fixed`를 사용했다면, 위치상 부모 요소를 기준으로 하므로 화면의 뷰포트 좌우 끝까지 늘어날 수 없게 된다. 

### 자식 선택자와 자손 선택자

- 자식 선택자 : 계층구조에서 바로 아래 오는 자식요소만을 선택함 아들만 선택한다고 보면 된다 표기법은 `>` 로 구분함

- 자손 선택자 : 계층구조에서 하위에 오는 모든 자손을 선택한다, 공백문자로 구분

### BEM(Block Element Modifier)

HTML 클래스 속성의 작명법

- 요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분을 표시
- 요소--상태 : Hyphen(Dash) 기호로 요소의 상태를 표시

예시
```html
<div class = "container__name"></div>
<div class = "btn btn--primary"></div>
``` 

### 스크롤에 기능을 추가하는 경우 

`lodash cdn`을 검색하여 scroll 이벤트에 기능을 추가해줄 js를 들고온다
애니메이션 효과를 주기위해 `gsap cdn` 도 같이 들고온다 

스크롤의 위치를 조건으로 받아서 요소를 사라지게 하는 예시
```js
//window는 하나의 창이라고 보면 된다
//throttle로 과부하를 막아줌
window.addEventListener('scroll', _.throttle(function (){  
  if (window.scrollY > 500){
    // 배치 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      display: 'none',
      opacity : 0
    });
  }
  else {
    gsap.to(badgeEl, .6, {
      display : 'block',
      opacity : 1
    });
  }
  // 300 0.3초단위 
},300));
```

opacity 속성처럼 값을 숫자로 입력하는 속성들은, 전환효과(transition 속성이나 GASP 라이브러리 등)를 통해 요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만, display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에, 자연스러운 전환 효과를 적용할 수 없다

### 순차적으로 요소를 나타내게 하는 경우

```js
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1) + .7,
    opacity : 1
  });
});
```

### inner 요소 안에 높이 값으로 부모요소도 같이 설정하는 방법

```css
.notice .notice-line {
  position: relative;

}

.notice .notice-line .inner {
  height: 62px;
}
```
부모요소인 notice-line이 높이 값이 없으므로 auto로 설정이 되어 세로너비가 줄어들려는 성질을 가지지만 inner에 높이값을 추가해주어서 이 높이값만큼만 줄어들기 때문에 부모요소도 같은 높이 값을 가진다

### 요소를 가운데에 배치하는 방법

```css
.notice .promotion .swiper-container{
  width: calc(819px * 3 + 20px);
  text-align: center;
  position: absolute;
  left : 50%;
  margin-left: -1238.5px;
}
```

결론은 요소의 가로너비의 절반을 `margin-left` 에 음수값으로 넣어주면 된다. 먼저 `left:50%`는 부모요소의 왼쪽에서 50% 부터 시작한다는 뜻인데, `margin-left`에 가로너비의 절반만큼 땡겨주면 위치가 정 가운데에 배치가 된다

### 다중 선택자

```css
.notice .promotion .swiper-prev,
.notice .promotion .swiper-next{
...
}
```

다중 선택자를 사용할 때 한줄을 띄워주는게 가독성이 좋다