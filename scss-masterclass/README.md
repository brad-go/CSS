# SCSS

강의 번호: scss
복습: No
유형: 강의
작성일시: 2021년 8월 1일 오전 11:56

# What is SCSS?

: **CSS preprocessor** 중 하나이다.

sexy CSS를 compile해서 일반 CSS로 만든다.

브라우저는 SCSS를 이해하지 못한다. 

- **Sass**나 **Scss** 둘 다 같은 방식으로 사용되고, 거의 같은 것이라고 볼 수 있다.

    ⇒ Sass가 먼저 쓰였으나, Scss가 공식적인 syntax로 릴리즈 되었다. 

- stylus, less 등 다양한 preprocessor가 있다.
- SCSS는 CSS를 **programming language**처럼 만든다.

    ⇒ **compile**과 **build** 과정이 필요하다.

# How to use SCSS?

[Node.js](https://nodejs.org/ko/)

1. **Node.js** 설치하기

[GitHub - nomadcoders/scss-masterclass: (S)CSS Layout Masterclass: Flexbox & Grid](https://github.com/nomadcoders/scss-masterclass)

1. 위 링크의 파일 다운하기
2. **VS Code**에서 터미널 열기 `Cmd + ``
3. 2의 링크를 설치한 폴더로 이동하기
4. **npm** 설치하기 `npm install` 혹은 `npm i`
5. **npm** 실행하기 `npm run dev`

## What is gulp file?

: Node.js의 package로 **compile**하거나 **transform** 해주는 파일

- 새로운 코드를 오래된 코드로 바꾼다.
- SCSS, SASS를 평범한 CSS로 바꾼다.

```css
... 

sass.compiler = require("node-sass");

const routes = {
  css: {
    watch: "src/scss/*",
    src: "src/scss/styles.scss",
    dest: "dist/css"
  }
};

const styles = () =>
  gulp
    .src(routes.css.src)
	    .pipe(sass().on("error", sass.logError))
			... 
```

- 이 파일의 **src의 주소파일**에서 일어나는 모든 일은 **CSS로 compile** 된다.
- styles.scss에 적힌 코드를 real-time으로 CSS로 변경된다!

# Useful Syntax

: SCSS에서 유용하게 사용할 수 있는 syntax 몇가지를 알아보자.

# *Variable*

```css
$name-of-variable: value;
```

: 웹 사이트에서 가장 중요한 **Color** 혹은 **Styles**를 **저장**하고 싶을 때 사용한다.

- SCSS 폴더에서 "_name-of-variables.scss"로 파일을 만든다.

.scss 파일 앞의 underscore(_)의 의미는 CSS로 변하지 않았으면 하는 것들이라는 의미이다.

## For example

### _variables.scss

```scss
// bg라는 변수에 빨간색 저장하기
$bg: red;

// title이라는 변수에 32px 저장하기
$title: 32px;
```

### styles.scss

```scss
// 변수가 담겨있는 파일을 import 한다
@import "_variables";

 h1 {
		// 배경색을 변수 bg로 설정하기	
   background: $bg;
		// font-size를 변수 title로 설정하기
   font-size: $title;
 }
```

# *Nesting*

: 타겟하는 element를 더 정확하게 해준다.

- 읽기 쉽다.
- 네스트 중첩이 가능하다.

### styles.scss

```scss
.box {
  margin-top: 20px;
  // .box:hover {} 와 같은 역할. 
  &:hover {
    background-color: yellowgreen;
  }
  // .box h2{}, .box button {} 과 같은 역할
  h2 {
    color: blue;
		// nest 중첩 사용 가능!
    &:hover {
      color: violet;
    }
  }
  button {
    color: red;
  }
}
```

# *Mixins*

: SCSS functionality를 **재사용**할 수 있게 한다.

- 상황에 따라 다르게 코딩하고 싶을 때 사용한다.

### _mixins.scss

```scss
// mixin에 스타일 저장하기
@mixin sexyTitle {
  color: blue;
  font-size: 30px;
  margin-bottom: 12px;
}

// mixin 인자를 통해 a태그 색깔 바꾸기
@mixin link($color) {
  text-decoration: none;
  display: block;
  color: $color;
}

// mixin에서 조건문을 사용해 a태그 색깔 바꾸기
@mixin link($word) {
  text-decoration: none;
  display: block;
  @if $word == "odd" {
    color: blue;
  } @else {
    color: red;
  }
}
```

### styles.scss

```scss
@import "_mixins.scss";

// mixin을 이용해 여러 스타일 적용하기
h1 {
  @include sexyTitle();
}

// mixin 인자를 통해 a태그 색깔 바꾸기
a {
  margin-bottom: 10px;
  &:nth-child(odd) {
    @include link(yellow);
  }
  &:nth-child(even) {
    @include link(blue);
  }
}

// mixin 인자로 string을 줘서 a태그 색깔 바꾸기
a {
  margin-bottom: 10px;
  &:nth-child(odd) {
    @include link("odd");
  }
  &:nth-child(even) {
    @include link("even");
  }
}
```

어떤 종류의 argument를 mixin에 보내야할 때, 그것은 CSS의 결괏값을 바꿀 것이다.

# *extends*

: 다른 코드를 **확장**(extend)하거나 코드를 **재사용**하고 싶을 때 사용할 수 있다.

- 같은 코드를 중복하고 싶지 않을 때 쓴다.
- 두 요소가 많은 CSS properties를 공유하고 있을 때, 그 요소들이 공통으로 사용하는 property가 있으면서 다른 property를 추가로 가질 때 사용한다.

### index.html

```html
body {	
	<a href="#">Log In</a>
	<button>Log Out</button>
}
```

### _extends.scss

```scss
// '%'를 사용해 extend를 사용할 수 있게 한다.
%button {
  border-radius: 7px;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: coral;
  font-family: inherit;
  font-size: 12px;
  color: white;
  font-weight: 500;
}
```

### styles.scss

```scss
// extends를 통해 두 태그를 같게 만들기
@include "_extends.scss";

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
}
```

style을 분리할 수 있게 해준다.

extend에 공통적인 것을 넣고 각 태그에 다른 property 추가하기

# *Mixin Responsive*

### _mixins.scss

```scss
$minIphone: 500px;
$maxIphone: 690px;
$minTablet: $minIphone + 100;
$maxTablet: 1120px;

@mixin responsive($device) {
  @if $device == "iphone" {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
      @content;
    }
  } @else if $device == "tablet" {
    @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
      @content;
    }
  } @else if $device == "iphone-l" {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
      @content;
    }
  } @else if $device == "ipad-l" {
    @media screen and (min-width: $minTablet) and (max-width: $maxTalbet) and (orientation: landscape) {
      @content;
    }
  }
}
```

### styles.scss

```scss
h1 {
  color: red;
	// mixin의 @content가 된다.
  @include responsive("iphone") {
    color: yellow;
  }
  @include responsive("iphone-l") {
    font-size: 120px;
  }
  @include responsive("tablet") {
    color: green;
  }
  @include responsive("ipad-l") {
    font-size: 120px;
  }
}
```