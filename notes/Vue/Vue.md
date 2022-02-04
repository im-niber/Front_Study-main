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
