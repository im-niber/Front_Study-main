# Vue

## 설치

### CLI
```bash
$ yarn global add @vue/cli
# or 
$ npm install -g @vue/cli
```

### webpack template에 vue 적용하기

```bash
$ npx degit webpack_template
$ npm i vue@next 
$ npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
```

설치한후에 webpack.config.js 내부 설정도 변경해주어야한다
```js
const {VueLoaderPlugin} = require('vue-loader')
entry: './src/main.js',
rules: [
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },

use: [
      // 순서 중요!
      'vue-style-loader',
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
new VueLoaderPlugin() // plugin 내부에 추가 
```

#### file-loader 설치

>$ npm i -D file-loader

```js
//webpack.config.js
test : /\.(png|jpe?g|gif|webp)$/,
use: 'file-loader'
```

### eslint 적용

ESLint는 코딩 스타일 가이드를 따르지 않거나 문제가 있는 코드 또는 안티 패턴을 찾기 위해 사용하는 Javascript linter

> 린터 또는 린트는 소스코드를 분석하여 프로그램의 오류, 버그, 스타일 오류, 의심스러운 구조체에 표시를 달아놓기 위한 도구를 가리킨다

> $ npm i -D eslint eslint-plugin-vue babel-eslint

.eslintrc.js 생성
```js
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
  }
}
```

#### settings.json 옵션 추가하기 
```json
"editor.codeActionsOnSave" : {
  "source.fixAll.eslint": true
}
```

---
## vue 작성형식

```html
// html 형식
<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <HelloWorld />
</template>

// js 형식
<script>
import HelloWorld from '~/components/HelloWorld'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 0
    }
  },
  methods:  {
    increase() {
      this.count += 1
    }
  }
}
</script>

// css(scss) 형식 
<style>
  h1{
    font-size: 50px;
    color: blue;
  }
</style>
```

### 조건문/반복문

```html 
<div v-if = "count > 4"> 
  4보다 크다
</div>
// count 변수가 4보다 크면 화면에 보여주게 함
// v- 으로 시작하는 속성을 디렉티브라고 한다

<ul>
  <li v-for = "fruit in fruits" :key = "fruit">
    {{fruit}}
  </li>
</ul>
// 반복문 사용 방식
```

### style scoped

스타일을 해당 컴포넌트에만 적용하는 방식
```html
// scoped라고 명시를 해준다
<style scoped lang = "scss">
  h1{
    color : red !important;
  }
</style>
```

## Vue 문법

### 인스턴스, 라이프사이클

모든 Vue 어플리케이션은 `createApp` 함수를 사용하여 새로운 **어플리케이션 인스턴스**를 생성하여 시작함

```js
const app = Vue.createApp({})

// 마운트 하는 과정
app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalePlugin)
```
#### 라이프사이클 다이어그램

![life cycle](https://v3.ko.vuejs.org/images/lifecycle.svg)

### 템플릿 문법

#### 보간법(Interpolation)

데이터 바인딩의 가장 기본 형태는 "Mustache"(이중 중괄호 구문)기법을 사용한 문자열 보간법이다
```html
<span> 메시지 : {{ msg }} </span>

// v-once 디렉티브를 사용하여 데이터가 변경 되어도 갱신되지 않는 일회성 보간을 수행 가능 
// 다만, 이런 경우 같은 노드의 바인딩에도 영향을 미친다
<span v-once> 불변 : {{ msg }}  </span>

// 실제 HTML을 출력할 때 사용하는 v-html
<p>v-html 디렉티브 사용 :<span v-html = "rawHtml"></span></p>

//이중 중괄호 구문은 HTML 속성에 사용할수없다 v-bind 디렉티브를 사용해야함
<div v-bind:id="dynamicId"></div>
// 약어로 사용 가능 
<div :id="dynamicId"></div>
// 큰따옴표 안의 작은따옴표로 작성하면 하나의 문자열로 받음,(active라는 클래스명을 가짐)
<h1 class ="'active'"></h1>
```

### Getter, Setter

```js 
// 캐싱을 활용해서 연산횟수를 줄임
computed : {
  reversedMessage : {
    get() {
      return this.msg.split('').reverse().join('')
    }
    set(value) {
      console.log(value)
    }
  }
}
```

### watch

```js
// 감시할 해당 변수명으로 작성을 해줌, 변경이 감지가 되면 실행
watch: {
  msg() {
    console.log('msg: ', this.msg)
  },
  reversedMessage() {
    console.log('reversedMessage: ', this.reversedMessage)
  }
}
```

