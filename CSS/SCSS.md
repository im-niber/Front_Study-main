# Sass(SCSS)

## 개요

CSS 전처리기 중 하나

변수를 만들어서 재활용 가능하게 해줌, `SCSS`와 `Sass` 두 가지 문법이 존재한다

- SCSS : 중괄호와, 세미콜론으로 문장의 시작과 끝을 표기함
- Sass : 들여쓰기 형식으로, 중괄호 세미콜론 사용을 하지않음

> parcel-bundler와 같이 사용한다

### 주석
```scss
.container {
  h1 {
    color : red;
    /*background-color: orange*/
    // font-size : 60px; 
    // js에서 사용하던 주석도 가능하다 !
  }
}
```
### 중첩기능
```scss
.container{
  ul {
  li {
      font-size: 40px;
      .name{
        color: royalblue
      }
      .age{
        color:orange;
      }
    }
  }
}
// 만약 자식 요소만 사용하고 싶다면 > 기호 붙여주면 된다
.container {
  > ul {...}
}
```
### & - 상위 선택자 참조 
```scss
// 변환된 css 내용을 보면, btn.active {color: red} 로 명시가 된다
.btn{
    position: absolute;
    &.active {
        color: red;
    }
}
// 마찬가지로, li:last-child
.list {
    li{
        &:last-child{
            margin-right:0;
        }
    }
}
```
### 중첩된 속성
```scss
.box{
  // font 안의 속성들을 묶어서 입력 가능, 네임스페이스가 같기 때문
  // 네임스페이스란 이름을 통해 구분 가능한 범위를 만들어 내는 것으로 일종의 유효범위를 지정하는 방법이다
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  // margin도 마찬가지
  margin: {
    top: 10px;
    left: 20px;
  }
}
```
### 변수(variable)
```scss
$size: 100px; // 전역범위
.container {
  $size2: 200px; // 중괄호 안에서만 사용가능
  position: fixed;
  top: $size;
  .item {
    $size = 150px; // 재할당 가능
    width: $size;
    height: $size;
    transform: translateX($size2);
  }
}
```
### 산술 연산
```scss
div {
  width: 20px + 20px;
  height: 40px - 10px;
  font-size: 10px * 2;
  margin: (30px / 2); // 괄호를 이용하거나, 변수로 나눠야만 결과가 제대로 출력
  padding: 20px % 7;
}
.container{
  width: calc(100% - 200px); // calc를 이용해야하는 경우
}
```
### 재활용(Mixins)
```scss
// 가운데 정렬하는 코드를 재활용해서 사용한다 
@mixin center{
  display: flex;
  justify-content: center;
  align-items: cener;
}
// 인자도 사용 가능하다, 기본값 설정도 가능 
@mixin box($size: 100px){
  width: $size;
  height: $size;
}
.container {
  @include center;
  .item{
    @include center;
    @include box(200px);
  }
  .box{
    @include box; // 100px
  }
}

// 키워드 인수 사용, 인자를 하나만 입력해야하는 경우 주로 사용한다
@mixin keywordbox($size: 80px, $color: tomato){
  width: $size;
  height: $size;
  background-color: $color;
}
.box{
  @include box($color: green); // 80px, green
}
```
### 반복문
```scss
// .box{width:100px;} 항목을 10개 추가하는 모습
@for $i from i through 10 {
  // 보간 문법 사용
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}
```
### 함수
```scss
@function ratio($size, $ratio) {
  @return $size * $ratio
}
.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 9/16);
}
```
### 색상 내장 함수
```scss
.box {
  $color: royalblue;
  background-color: mix($color, red); // 색을 섞어줌
  background-color: lighten($color, 10%); // 10% 밝게 해주는 함수
  background-color: darken($color, 10%); // 10% 어둡게 해주는 함수
  background-color: saturate($color, 40%); // 채도를 40% 증가하는 함수
  background-color: desaturate($color, 40%); // 채도를 40% 감소하는 함수
  background-color: grayscale($color); // 회색으로 만들어줌
  background-color: inverte($color); // 반전 효과
  background-color: rgba($color, .5); // 투명도 설정 함수
}
```
### 가져오기
```scss
// main.scss
@import "./sub" // 로 다른 scss파일을 가져올 수 있다 쉼표를 사용해서 여러 파일 가져오기도 가능하다
```
### 데이터 종류
```scss
$number : 1; // .5, 100p, 1em 단위요소 할당 가능
$string : bold;
$color : red;
$boolean : true;
$null : null;
$list : orange, red, yellow;
$map: ( // 소괄호에 주의
  o: orange,
  r: red,
  y: yellow
)
```
### 반복문 @each
```scss
// .box{color: orange}, .box{color: red}...
@each $c in $list {
  .box {
    color: $c;
  }
}
// .box-o {color: orange}, .box-r{color:red}...
@each $k, $v in $map {
  .box-#{$k}{
    color: $v;
  }
}
```
### 재활용 @content
```scss
// content로 적어주면 사용시에 중괄호로 더 추가내용을 적을 수 있다
@mixin left-top{
  position: absolute;
  top: 0;
  left: 0;
  @content;
}
.box{
  width:200px;
  height:300px;
  @include left-top{
    bottom: 0;
    right: 0;
    margin : auto;
  }
}
```