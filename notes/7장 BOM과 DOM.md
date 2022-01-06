# 2022_01_06

<h1> BOM과 DOM </h1>

우리는 브라우저를 통해 컨텐츠를 볼 수 있고 필요한 정보를 검색 할 수 있다. 그리고 프론트엔드 개발자는 DOM과 다양한 이벤트를 사용하여 브라우저 내에 인터랙션(interaction)을 할 수 있도록 만든다. 이번 장은 화면 요소에 접근할 수 있는 DOM API와 브라우저 정보를 제공하는 BOM API에 대해 살펴보고, 이를 이용해 페이지를 구성하고 사용자에게 정보를 제공하는 방식에 대해 알아보자.

<h2> 문서 객체 모델 </h2>

DOM(Document Object Model)은 XHTML, HTML 문서용 API 이다. DOM은 일종의 인터페이스로 해당 요소를 나타내는 노드, 노드의 속성을 나타내는 프로퍼티, 이를 조작할 수 있는 여러 메서드를 담아 구조화한 객체로 표현한다. DOM API는 Document를 통해 사용할 수 있다. Document는 DOM 트리의 진입점이자 브라우저가 불러온 웹 페이지를 의미하는 Document 인터페이스를 의미함.

<h3> DOM 트리 </h3>

DOM은 문서를 노드의 계층적(hierarchical)인 트리 구조로 나타낸다. 노드는 서로 다른 특징, 데이터, 메서드를 가지며 다른 노드와의 관계가 있을 수 있다. 이런 관계는 계층을 생성하고 특정 노드에 뿌리를 둔 트리 노드로 표현된다. 노드 트리의 최상위 노드를 root라 하며 일반적으로 HTML 문서의 `<html>` 이 root 노드가 된다.

트리의 시작점은 Document 이며 각각 노드의 타입에 따라 Element 노드, Text 노드, Attr 등으로 분류하여 계층 구조를 가진다.

Text 노드는 각 트리 노드의 리프 노드가 되며 BODY 요소 안에 개행(\n, enter)이나 띄어쓰기가 존재하는 경우 Text노드가 만들어진다. 주석 또한 노드로 만들어져 DOM 트리에 포함이 된다.

<h3> Node </h3>

노드 인터페이스는 전체 문서 요소들에 대한 객체 형태의 기본 데이터 타입이다. DOM 트리의 구성 요소를 나타내며 자식노드와, 형제 노드에 대한 관계등 여러 정보를 가지고, 조작 메서드 등을 사용 할 수 있다.

노드 인터페이스는 트리 형태의 계층구조이다. 제일 꼭대기에는 **EventTarget**이 존재하며 이 EventTarget 추상 클래스는 이벤트가 발생시 대상이 되는 타깃을 의미한다. Node는 EventTarget을 상속받은 추상 클래스로 DOM 노드의 기초가 되며, DOM 노드 관계를 나타내는 기능들이 포함이 된다. 

**Element**는 DOM 요소 생성의 가장 기본이 되는 클래스로 요소 탐색부터 이벤트 리스너 관리 등 여러 메서드를 제공한다. **HTMLElement**는 Element를 상속받아 HTML 요소를 구현한 기본 클래스이며 이걸 상속받아 HTMLDivElement,HTMLInputElement 등 다양한 요소를 구현함

<h4> nodeType, nodeName, nodeValue </h4>

노드는 nodeType(12개의 노드타입을 정수로 나타냄), nodeName, nodeValue 등 여러 프로퍼티를 가진다. 대표적으로 사용되는 몇 가지 타입들과 프로퍼티에 대해 알아보자.

1. ELEMENT_NODE
    - nodeType : 1
    - nodeName : 요소 태그이름 ("DIV", "SPAN", "INPUT", ...)
    - nodeValue : null
    - `<div>, <span>` 같은 HTML 요소 노드

2. TEXT_NODE
    - nodeType : 3
    - nodeName : #text
    - nodeValue : 포함된 텍스트
    - Element나 Attr 노드에 담긴 실제 Text노드

3. COMMENT_NODE
    - nodeType : 8
    - nodeName : #comment
    - nodeValue : 주석 컨텐츠
    - `<!-- -->`로 작성된 Comment 노드
4. DOCUMENT_NODE
    - nodeType : 9
    - nodeName : #document
    - nodeValue : null
    - Document 노드
5. DOCUMENT_TYPE_NODE
    - nodeType : 10
    - nodeName : Doctype 이름("html"...)
    - nodeValue : null
    - `<!DOCTYPE html>` 같은 Doctype을 반환한다.
6. DOCUMENT_FRAGMENT_NODE
    - nodeType : 11
    - nodeName : null
    - nodeValue : null
    - DocumentFragment 노드 

