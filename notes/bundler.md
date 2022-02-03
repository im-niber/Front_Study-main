# Bundler

웹 애플리케이션을 동작시키기 위한 서로 연관 관계가 있는 웹 구성 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이들의 의존성을 묶고 조합해서 합쳐진 하나의 결과물(static한 자원)을 만드는 도구

간단히 설명하자면, 여러개의 파일을 하나의 파일로 묶어주는 역할을 한다

## Parcel

### 프로젝트 생성

```bash
$ npm init -y
$ npm i -D parcel-bundler
```
```json
 "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```
### 정적 파일(img,pavicon,...) 연결

> ICO converter : 이미지의 픽셀과 사이즈 등을 변경해주는 사이트
> parcel plugin static files copy : 개발서버를 열거나 제품화 시킬때 dist폴더에 자동으로 파일들을 복사해주는 패키지

```json
"staticFiles" : {
  "staticPath": "static"
}
```

json 설정을 위와 같이 해주면 된다

### autoprefixer

접두사를 자동으로 붙여주는 패키지

> $ npm i -D postcss autoprefixer 두가지 패키지를 설치함
```json
"browserslist":[
  "> 1%", //  전 세계 점유율 1퍼센트 이상
  "last 2 versions" // 마지막 2개 버전
]
```

browserslist 옵션은 현재 NPM 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다, 그 명시를 Autoprefixer 패키지가 활용하게 된다

.postcssrc.js 생성(. 을 붙인 js는 숨김파일이거나, 구성옵션을 의미한다)
```js
// .postcssrc.js
// import autoprefixer from 'autoprefixer' 와 동일
const autoprefixer = require('autoprefixer')

// export {
//  plugins: [
//      autoprefixer
//  ]  
//} 와 동일 
module.exports = {
  plugins: [
    autoprefixer // 간소화 하려면 이 자리에 require('autoprefixer')로 입력하면 된다
  ]
}
```

#### autoprefixer 다운그레이드

> $ npm i -D autoprefixer@9

9 버전의 autoprefixer로 다운그레이드가 가능하다. 충돌하는 에러가 발생한 경우 자주 있는 문제이므로 에러내용을 보면 쉽게 확인이 가능하다

### Babel

Babel은 ECMAScript 2015+ 코드를 이전 JS엔진에서 실행할 수 있는 이전 버전과 호환되는 JS 버전으로 변환하는 데 주로 사용되는 무료 오픈소스 JS 트랜스 컴파일러이다

> $ npm i -D @babel/core @babel/preset-env

async await 문법 적용
> $ npm i -D @babel/plugin-transform-runtime

.babelrc.js 생성
```js
//.bablerc.js
module.exports = {
  presets : ['@babel/preset-env'],
  //async await 문법 적용
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}
```

### CLI, 커맨드 라인 인터페이스

#### Serve

개발용 서버를 시작함, 앱이 수정되면 자동으로 다시 빌드하고, 빠른 개발을 위해 빠른 모듈 교체를 지원함

> parcel index.html

#### Build

에셋을 한 번 빌드함 이 과정에서 코드 최소화가 활성화되고 환경변수가 NODE_ENV = production으로 설정된다

> parcel build index.html

---

## Webpack

### 프로젝트 생성

```bash
$ npm init -y
$ npm i -D webpack webpack -cli webpack-dev-server@next
```
```json
"scripts": {
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
```

### entry, output
#### webpack.config.js 생성
```js
//import
const path = require('path') // 절대경로를 가져올 변수

//exports
module.exports = {
  // parcel.main.js 와 같은 개념
  // 파일을 읽어들이기 시작하는 진입점 설정, 기본적으로 webpack은 js로 설정함
  entry: './js/main.js',
  //결과물(번들)을 반환하는 설정
  output: {
    //__dirname : 해당하는 파일의 실제경로를 나타내는 nodejs의 전역변수
    path: path.resolve(__dirname, 'dist') // 절대경로가 필요함
    filename: 'main.js',
    clean: true // 필요없는 부분을 삭제해주는 옵션
  }
}
```
### plugins

#### index.html를 삽입 해 개발서버를 오픈하는 과정 

> $ npm i -D html-webpack-plugin 패키지 설치

```js
//webpack.config.js
// import 하는 부분 밑에 입력해줌
const HtmlPlugin = require('html-webpack-plugin')

// 번들링 후 결과물의 처리 방식 등 다양한  플러그인들을 설정
plugins: [
  new HtmlPlugin({
    template:'./index.html'
  })
]
devServer: {
  host: 'localhost'
}
// 두 옵션은 module.exports 안에 입력해준다
```
### 정적 파일 연결

> $ npm i -D copy-webpack-plugin 패키지 설치
```js
//webpack.config.js
plgins: [
  new HtmlPlugin({
    template :'./index.html'
  }),
  new CopyPlugin({
    patterns: [
      {from:'static'}
    ]
  })
], // static안의 파일을 복사를해서 dist에 넣어줌
```
### module

```js
//main.js
import './css/main.css'
//webpack은 main.js 부터 읽기때문에 css를 import해주면 적용이 된다
//하지만 webpack은 css를 읽을 수 없기 때문에 패키지를 하나 설치해준다  
```
> $ npm i -D css-loader style-loader

```js
//webpack.config.js
module: {
  rules: [
    {
      // .css로 끝나는 파일을 찾음
      test:'/\.css$/',
      use:[
        'style-loader', // 순서 중요 !
        'css-loader' 
      ]
    }
  ]
}, // plugins와 module.exports 사이에 타이핑 해줌
```
### SCSS로 적용하기

> $ npm i -D sass-loader sass 패키지 설치

```js
//webpack.config.js
// scss, css 둘다 찾음
 test:'/\.s?css$/',
      use:[
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
```
### Autoprefixer(PostCSS)

> $ npm i -D postcss autoprefixer postcss-loader 패키지 설치

```js
//webpack.config.js
use:[
    'style-loader',
    'css-loader',
    'postcss-loader'
    'sass-loader'
]
```
```json
"browserslist": [
  "> 1%",
  "last 2 versions"
]
```
로 입력을 마친 후 .postcssrc.js 생성
```js
//.postcssrc.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```
### babel

> $ npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime 패키지 설치

.babelrc.js 생성
```js
//.babelrc.js
module.exports = {
  presets : ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}

module :{
  rules:[
    {test:...,
    use:[
      ...
    ]
    },
    {
      // js로 끝나는 확장자 
      test: /\.js$/,
      use: [
        'babel-loader' // $ npm i -D babel-loader 설치하면 구성이 완료된다
      ]
    }
  ]
}
```
### NPX Degit

> $ npx degit 깃허브경로
> 원격저장소의 파일을 현재경로로 다운로드 해준다

- npx : degit을 설치하지 않아도 사용하게끔 해주는 역할을 한다