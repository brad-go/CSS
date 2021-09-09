# Cloning Web [Beige]

---

##### 원본 사이트

> Beige: https://beige.de/

## Important Points for making this site

> 1. ::before 이용해서 list-style 만들기

> 2. 검색창 만들기, 키보드 입력 이벤트 ("keyup")

> 3. 버튼을 누르면 draw되는 창 만들기

> 4. gird를 이용해서 화면 만들기

#### 1. ::before 이용해서 list-style 만들기

li에 css를 이용해서 html 요소 없이 화면에 보이는 동그라미를 만들었다. html을 이용해서 예를들어 span태그 등을 이용해서도 만들 수 있지만 **::before**를 이용해서 깔끔하게 만들고 싶었다.

```
.nav-li::before {
  display: block;
  content: "";
  position: absolute;
  left: -0.2em;
  top: 0.3em;
  width: 0.7em;
  height: 0.7em;
  border-radius: 50%;
  background-color: #e1d4b7;
}
```

각 동그라미는 각 태그들에게 배경색을 따로 주어서 색깔을 다르게 했다.

#### 2. 검색창 만들기, 키보드 입력 이벤트 ("keyup")

이 사이트에 재밌는 점은 검색 버튼을 클릭하면 화면 전체가 검색창으로 변경되면서 검색어와 관련된 요소들만 화면에 보여진다. 여기서 나는 검색어와 관련된 요소들을 화면에 노출시키는 것은 구현하지 못했고, 간단히 검색창을 만들기만 했다.
addEventListener를 사용하면서 대부분 click이나 mouse 관련 이벤트만을 사용해보았는데, 이번에는 키보드 관련 이벤트를 사용해볼 수 있었다. 키보드 관련해서는 keyup, keypress, keydown 등이 있었는데, keyup을 사용해서 화면에 입력한 값을 따로 출력해서 바로 다른 요소로 보여줄 수 있었다.

###### HTML

```
<section class="search-page hidden">
   <form class="search-form">
     <input class="search-box" type="text" placeholder="Suchen..." />
   </form>
   <h2 class="search-help"></h2>
 </section>
```

이 요소는 classlist를 이용해서 간단히 화면에 보여지고 안보여지고를 사용했다. 그러나 새로운 방법을 알았는데, 이 정도의 동작은 js없이 css hover를 이용해서 구현가능하다는 것을 알았다.

```
.search-page {
   display: none;
}
// 이 상태라면 아래의 코드를 통해 화면에 보여지게 할 수 있다.

.search-page:hover {
  display: block;
}
```

###### JS

아래는 검색창에 입력하면 바로 화면에 다른 요소의 innerText를 변경해서 보여주는 코드이다. 이것을 구현하기 위해 **keyup**을 사용했고, input의 값을 가져오기 위해 input.value를 변수에 저장했다.

```
 const input = document.querySelector(".search-box");
 const helper = document.querySelector(".search-help");

 input.addEventListener("keyup", () => {
 const value = input.value;
 helper.innerText = `Nichts gefunden für "${value}".`
})
```

처음에는 keydown을 사용해서 이를 구현하려고 했는데, keydown을 사용하니 이유는 알 수 없지만 한 글자씩 밀려서 값이 저장되어 마지막 글자는 볼수가 없었다. 그래서 여러가지를 시도하다가 **keyup** 이벤트를 사용해서 해결할 수 있다는 것을 알았다.

#### 3. 버튼을 누르면 draw되는 창 만들기

```
.header-drawer {
  position: absolute;
  top: -13rem;
  width: 100vw;
  height: 16rem;
  background-color: #f3f3f3;
  z-index: 1;
  margin: 0;
  transition: margin-top 0.5s ease;
}

.draw {
  margin-top: 16rem;
}
```

이렇게 _margin_ 값을 이용해서 화면에 보여지고 안보여지고를 결정하게 했다. 좋은 방법인지는 모르겠지만 구현하기는 참 쉽다. *addEventListener*를 이용해서 클릭시 _.draw_ 클래스 하나만 토글하게 해주면 된다.
부드럽게 구현하기 위해 처음에는 _animation_ 을 사용하려고 했지만, 이것이 훨씬 간단하게 그리고 원하는 정도로 부드럽게 구현이 가능하다는 것을 알고 _transition_ 에 값을 주어서 구현했다.

#### 4. gird를 이용해서 화면 만들기

그리드를 이용해서 간단히 구현했다. 별로 어렵지는 않았다. 조금 특별한 것이 있다면 카드들 중에서 몇가지는 마우스를 올릴 때 숨겨진 글자가 보이는 것이 아니라 사진을 크게 보여준다던가, 이메일을 입력하는 카드라던가, 사진이 없는 글자만 있는 카드가 있다던가 등이 있었다. 이것들이 있기에 단조롭지 않고 재밌는 작업이 아니었나 싶다.
코드가 많이 효율적으로 보이지는 않지만, 점점 더 웹사이트 만들기에 익숙해져 가고 있는 것 같다. 화이팅!!
