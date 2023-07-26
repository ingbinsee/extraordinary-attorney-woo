# 🐋&nbsp;&nbsp;이상한 변호사 우영우 명대사

## 📢&nbsp;&nbsp;소개

<img alt="이상한 변호사 우영우 명대사 페이지" src="https://github.com/ingbinsee/extraordinary-attorney-woo/assets/140426866/33068372-bb06-4541-8051-eb6472a5bd4b"> <br/>

### [사이트 바로가기](https://extraordinary-attorney-woo.netlify.app/) <br/>

> 개발 기간: 2023년 7월 25일 ~ 2023년 7월 26일

<br/>

## ⚒️&nbsp;&nbsp;기술스택

<img src="https://skillicons.dev/icons?i=html,css,js,netlify"/>

<br/>

## 🏛️&nbsp;&nbsp;설계

- 드라마 속 명대사를 입체적으로 보여줄 수 있도록 한다. <br/>
- 이미지를 클릭 시 확대하여 볼 수 있도록 한다. <br/>
- 마우스, 키보드로 모두 조작할 수 있도록 한다. <br/>
- 드라마와 관련있는 이미지를 배경으로 하되 주요 내용이 잘 보일 수 있도록 한다.

<br/>

## 💻&nbsp;&nbsp;기능

### 1. CoverFlow Effect

- 커버플로우 효과를 활용하여 슬라이드 이동 시 입체적인 효과를 준다. <br/>
- 활성 슬라이스를 가운데에 배치하여 안정감을 준다.

### 2. Pagination

- 페이지네이션을 활용하여 슬라이스의 이동 흐름을 보여준다. <br/>
- 활성화된 페이지의 차별성을 위해 블릿 모양과 색상을 명시적인 것으로 변경한다.

### 3. MousewHeel, Keyboard

- 접근성을 고려하여 마우스, 키보드 조작이 가능하도록 한다. <br/>

- 마우스로 클릭 후 좌우로 이동하거나 페이지네이션을 클릭하여 이동하는 것 외에 다양한 방법으로 슬라이드를 조작할 수 있도록 한다. <br/>

- 마우스 휠을 움직였을 때 슬라이드가 이동하며, 키보드 좌우 방향키로 슬라이드를 이동이 가능하도록 한다.

### 4. Click Event

- 원하는 이미지 클릭 시 scale 속성을 활용하여 확대한다. <br/>
- 이벤트 위임을 활용하여 요소의 공통 조상에게 이벤트 핸들러를 할당하여 여러 요소를 한꺼번에 다룰 수 있도록 한다.

### 5. ::before

- &lt;body&gt;에 가상요소 선택자를 활용하여 배경 이미지를 넣는다. <br/>
- blur와 opacity를 활용하여 배경을 흐리게 처리한다. <br/>
- z-index를 음수로 처리하여 z축의 index 순서를 최하단으로 배치한다.

<br/>

## 💯&nbsp;&nbsp;평가

### 1. Swiper 활용

Swiper의 커버플로우, 페이지네이션, 마우스휠, 키보드 기능 등 다양한 기능을 활용하였다.

### 2. 접근성 고려

접근성을 고려하여 이미지마다 대체텍스트로 명대사를 입력하였으며, 마우스와 키보드 중 사용자의 편의에 맞게 선택하여 조작할 수 있도록 하였다.

### 3. 상속 없이 흐린 배경 이미지 구현

&lt;body&gt;에 직접적으로 blur와 opacity를 주는 경우 결과가 하위 요소에 모두 상속되어 투명도가 낮아지는 문제가 발생한다. 이에 따라 가상 요소 선택자, z-index 등을 활용하여 상속에 대한 문제를 해결하였다.

### 4. 클릭 이벤트를 Swiper로 구현하지 못함

이벤트 위임을 하는 과정에서 Swiper에 내장된 기능을 활용하려 하였으나 개별 요소에게 기능을 부여하는 데 어려움이 있어 바닐라 자바스크립트를 활용하여 구현하였다는 점에서 아쉬움이 있다.

<br/>