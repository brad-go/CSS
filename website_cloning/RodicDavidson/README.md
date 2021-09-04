# Cloning Web [Rodic Davidson]

---

##### 원본 사이트

> Rodic Davidson: https://rodicdavidson.co.uk/

## Important Points for making this site

> 1. grid와 flex

> 2. CSS Selector

> 3. hiding scroll-bar

이 사이트는 쉽게 구현할 수 있었다. 간단한 flex, grid만으로 만들 수 있었다. 그래도 만들 때 중요하게 생각했던 점을 간단하게 리뷰해보고자 한다.

#### 1. grid와 flex

이 사이트에서는 item들을 가운데 정렬하는데, 말고는 flex를 쓸 필요없다고 생각했다. 그래서 전부 grid로 만들려고 했는데, 생각보다 잘되지 않았다. header를 만들고, main 부분에 grid를 적용했다.

###### HTML

```
<main>
  <section class="item-side"></section>
  <section class="item-grid">
  ...
</main>
```

###### CSS

```
main {
  width: 100vw;
  height: 100%;
  padding: 0 10px;
  display: grid;
  grid-template-column: 1fr 3fr;
}
```

이렇게 구현하면 간단히 화면이 딱 나누어질거라고 생각했다. 그러나 내가 1fr이라는 속성을 간과했던 것 같다. _"item-side" section_ 에 요소를 가지고 있지 않으니, 채울게 없어서 1fr이 작용하지 않았다. 그래서 화면에 계속 _item-grid_ 의 요소들만 가득차게 되었다.

물론 grid-column을 픽셀값으로 지정해서 간단하게 해결할 수 있었지만, 화면 사이즈가 변경되어도 비율이 유지되길 원했기 때문에 _display: flex_ 를 이용했다.

_display: flex_ 를 이용하고 각 자식들에게 width값을 부여함으로써 같은 효과를 낼 수 있었다.

```
main {
  width: 100vw;
  height: 100%;
  padding: 0 10px;
  display: flex;
}

.item-side {
  width: 25%;
}

.item-grid {
  width: 75%;
  ...
}
```

#### 2. CSS Selector

그 다음으로 해결해야 할 것은 _header_ 에 있는 사이트 title 부분이었다. 기본적으로 검은색과 회색으로 설정되어있는데, 나는 이를 _h2 태그_ 두개를 이용해서 만들었다. 그리고 h2의 두번째 요소에 회색을 부여했다.
그리고 *hover*시에 글자색이 파란색으로 바뀌게 만들려고 css를 이용했다.

###### HTML

```
<section class="header-side">
  <a id="title" href="">
    <h2>Rodic Davidson</h2>
    <h2>Architects</h2>
  </a>
</section>
```

###### CSS

```
.header-side {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: blue;
}

h2 {
  display: inline-block;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

h2:last-child {
  color: gray;
}
```

쉽네. 하면서 확인을 해보는데 이게 무슨일인가. 작동되지 않았다. h2의 색이 회색에서 파란색으로 변경되지 않았다. 그래서 _!important_ 를 작성하고 다시 확인했는데도, 작동되지 않았다. 어째서인지는 아직도 모르겠다. 이유가 있다면 알려주면 감사하겠다.
이는 id 선택자를 이용해서 해결할 수 있었다.

```
#title h2:hover {
  color: blue;
}
```

이렇게 하니 간단하게 해결되었다. CSS선택자와 !important(별로 사용하지 않는게 좋다고 알고있지만)에 대해서 조금 더 공부가 필요할 것 같다.

#### 3. hiding scroll-bar

이제 마무리를 하려는데, 사이트의 스크롤바가 보이지 않는다는 것을 알게 되었다. 그리고 내 사이트가 가로로 스크롤이 된다는 것을 알았다. 이를 해결하기 위해 두가지 CSS를 설정했다.

```
body {
  margin: 0;
}
```

이 코드를 통해서 사이트가 가로로 스크롤 되는 것을 막을 수 있었다. 사이트를 만들 때 항상 기본적으로 하던 것인데, 까먹고 있었다. html에서 기본적으로 body는 약간의 margin을 가지고 있다. 필요하지 않다면 없애주자.

```
::-webkit-scrollbar {
  display: none;
}
```

그리고 두번째로 스크롤바를 없애기 위해 이를 사용했다. 검색을 통해서 알게되었든데, 이 코드를 입력하니 스크롤바가 짠하고 보이지 않게 되었다. 특정한 요소에 스크롤바를 없애고 싶다면 _가상 클래스 선택자 기호(::)_ 앞에 원하는 요소를 입력하면 된다.
