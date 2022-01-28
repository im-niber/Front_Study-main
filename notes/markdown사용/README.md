# MARKDOWN 

어느정도 알고 있으니 몰랐던 부분만 기록하려고 한다

## 링크(Links)

```html
<a href ="https://google.com"> GOOGLE

<!--markdown-->
[GOOGLE](https://google.com)

<!-- target = "_blank" 는 새탭에서 연다는 의미 -->
<a href ="https://google.com" title = "google로 이동 !" target = "_blank" >GOOGLE</a>
```
## 이미지(Images)

```bash
# 이미지를 바로 보이는 법 
![HEROPY](https://heropy.blog/css/images/logo.png)

#이미지 클릭시 해당 url로 연결
[![HEROPY](https://heropy.blog/css/images/logo.png)](https://heropy.blog/)
```

## 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> (네이버 국어 사전)

> 중첩된 인용문
>> 중첩된 인용문 1
>>> 중첩된 인용문 2
>>>> 중첩된 인용문 3

## 표(Table)

position 속성

값 | 의미 | 기본 값
--|--|-- 
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X

```
값 | 의미 | 기본 값
--|--|-- 
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X
```

2행에 --|:--:|-- 로 설정하면 가운데 정렬을 할 수 있다  
맨 오른쪽 하나에만 콜론을 붙이면 오른쪽 정렬도 가능