# Front-End Interview

## 이벤트 루프(Event-Loop)

이벤트, 메시지를 기다리는 디자인 패턴

자바스크립트는 싱글 쓰레드 언어, 하나의 호출스택만 쓴다. 동시성을 구현하기 위해 이벤트 루프를 사용함

동시성 : 서로 다른 사건이 동시에 일어나는것

블로킹 I/O : 동시성을 위해 멀티스레드를 열고 작업 완료시 까지 스레드의 실행을 차단 하는 방법

논블로킹의 이벤트 디멀티플렉싱매커니즘 : 멀티플렉서가 요청을 하나로 묶고, 디 멀티플렉서가 **요청을 싱글스레드에 나눔** 요청이 완료되기전까지 블로킹, 완료되면 이벤트 큐에 푸시

```js
// 이벤트루프 의사코드
while(queue.waitForMessage()){
  queue.processNextMessage()
}
// Js는 I/O요청, 타이머 관련 작업 등은 이벤트루프를 통해 처리
```

### Node.js의 I/O
Libuv(Nodejs의 I/O 엔진)를 거쳐 OS커널을 사용 또는 자체 쓰레드풀을 통해 처리

### 브라우저의 I/O
WEB APIs의 백그라운드 공간으로 들어가 처리

---

## SEO(검색엔진 최적화, Search Engine Optimization)

구글, 네이버와 같은 검색엔진으로 웹사이트를 검색했을 때 그 결과를 페이지 상단에 노출시켜 많은 사람들이 볼 수 있도록 최적화 하는 방법

### 캐노니컬 태그 설정
```html
<link rel="canonical" href="url" />
```
### 태그와 메타 설정 
이미지 태그에 alt, head에 메타데이터는 필수, title도 페이지마다 달라야 하며 link에 alt도 붙여야 한다

**apple의 예**
```html
<meta property="analytics-track" content="Apple - Index/Tab">
<meta property="analytics-s-channel" content="homepage">
<meta name="Description" content="Apple이 제시하는 혁신적인 세상을 만나고, iPhone, iPad, Apple Watch, Mac, Apple TV 등을 구입하는 것은 물론, Apple 액세서리, 엔터테인먼트, 전문가 기기 지원에 대해서도 살펴볼 수 있습니다.">
```
### 페이지 속도 개선

페이지의 속도는 빨라야 한다, 구글의 PageSpeedInsights로 가서 웹페이지 속도 개선에 대해 리포팅을 받아 볼 수 있다, 이를 통해 사이트 내 이미지 타입 개선, 이미지 로딩 속도 개선 등을 해야 한다는 사실을 알 수 있다

### 구조화

각각의 태그들이 HTML5의 기본에 맞춰 설계되어야 한다.

### 사이트맵 정기적인 관리

사이트맵(sitemap.xml)을 정기적으로 관리하자, 사이트맵 제너레이터를 사용하거나 직접 코드를 통해 구축해도 된다

> 사이트맵이란 웹사이트 내 모든 페이지 목록을 나열한 파일로 목차 같은 역할을 한다

**사이트맵의 예시**
```xml
<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  <url> 
    <loc>https://7942yongdae.tistory.com/78</loc> <lastmod>2021-05-14T10:00:54+09:00</lastmod> 
    <changefreq>monthly</changefreq> 
    <priority>0.8</priority> 
  </url>
 </urlset>
```
