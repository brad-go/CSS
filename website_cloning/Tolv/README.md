# Cloning Web [Schwaltz Media]

---

##### 원본 사이트

> Tolv: https://tolv.dk/

## Important Points for making this site

> 1. Allow only one side of the page to scroll(한쪽만 scroll 되게 하기)

> 2. Make text change when scrolling(scroll하면 텍스트 바뀌게 하기)

> 3. Scroll to give effect to footer(scroll시에 footer에 효과주기)

> 4. Create a Search Modal Window(검색 모달창 만들기)

#### 1. Allow only one side of the page to scroll(한쪽만 scroll 되게 하기)

이 사이트를 처음 봤을 때, 만들기 쉬울거라 생각했다. 그리드로 만들면 금방 만들겠는데? 생각하고 만들기 시작했는데, 바로 막히고 말았다. 화면이 한쪽만 스크롤 되는 것이었다. 어떻게 할 수 있을까?

1. **position: sticky** 이용하기

##### 화면 레이아웃 구성

###### HTML

```
<section class="slide-container">
  <div class="slide-left">
    <div class="slide-image"></div>
    <div class="slide-image"></div>
    <div class="slide-image"></div>
    <div class="slide-image"></div>
    <div class="slide-image"></div>
  </div>
  <div class="slide-right">
    <div class="slide-text">
      <h2>
        Eyes rest from an afternoon in the sun. Smooth textures feel cool
        on bare feet and skin.
      </h2>
      <h6>
        Featuring <a href=""><strong>Kitsune sofa</strong></a
        >, <a href="">armchair</a> and
        <a href=""><strong>I-O coffee table (steel base)</strong></a>
      </h6>
    </div>
    <div class="slide-text invisible">
      <h2>
        A sip of cocktail brings back memories of the beach.
      </h2>
      <h6>
        Featuring <a href="">Portobello armchair and foot stool (wood base)</a>
      </h6>
    </div>
    <div class="slide-text invisible">
      <h2>
        Sunset is a good time to gather. Evening light bathes the space in warm tones and colours.
      </h2>
      <h6>
        Featuring <a href="">Copal sofa</a> and <a href="">Fromage poufs</a>
      </h6>
    </div>
    <div class="slide-text invisible">
      <h2>
        The kitchen table is resplendent with local market treasures. Sit down together for a moment of escape.
      </h2>
      <h6>
        Featuring <a href=""><strong>Figura chairs</strong></a
        > and
        <a href=""><strong>Itamae table</strong></a>
      </h6>
    </div>
    <div class="slide-text invisible">
      <h2>
        Morning coffee with a tropical twist. Unusual tastes surprise the senses.
      </h2>
      <h6>
        Featuring <a href="">Nuef daybed</a>
      </h6>
    </div>
</section>
```

###### CSS

```
.slide-container {
  width: 100%;
  height: 100%;
  display: flex;
}

.slide-left,
.slide-right {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100vh;
  background-image: url("https://source.unsplash.com/random/800*600");
  background-repeat: none;
  background-size: cover;
}

.slide-image:nth-child(2) {
  background-image: url("https://source.unsplash.com/random/800*601");
}

.slide-image:nth-child(3) {
  background-image: url("https://source.unsplash.com/random/800*602");
}

.slide-image:nth-child(4) {
  background-image: url("https://source.unsplash.com/random/800*603");
}

.slide-image:nth-child(5) {
  background-image: url("https://source.unsplash.com/random/800*604");
}
```

그리드로 구성할까 했지만, 그냥 간단하게 flex로 구성하고 각 자식 아이템에게 width, height를 통해 화면의 반씩 차지하게 만들었다. 각 item 들을 미리 html로 만들어 두었다. 그리고 백그라운드 이미지로 속성으로 배경 이미지를 주었다.

##### position: sticky 사용하기

```
/* position sticky로 왼쪽이미지가 슬라이드 될 동안 붙어있게! */
  .slide-right {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
```

생각보다 간단하게 구현할 수 있었다. **_position: sticky_**를 통해서 오른쪽 슬라이드는 화면에 고정되고, 왼쪽의 img는 스크롤 될 수 있게 만들었다.

#### 2. Make text change when scrolling(scroll하면 텍스트 바뀌게 하기)

원하는 대로 화면을 구성하고 고정시켰으니, 이제 문제는 화면이 스크롤 됨에 따라 고정되있는 오른쪽 화면의 글씨만 바꾸는 것이었다. 이 사이트를 만드는데, 가장 힘을 쏟은 부분이라고 생각한다.

우선 화면의 스크롤 값을 가져오기 위해 아래의 함수를 통해 스크롤 값을 가져왔다.

```
function getCurrentScroll() {
 return window.pageYOffset || document.documentElement.scrollTop;
}
```

그리고 화면의 스크롤에 따라 글씨가 바뀌는 것을, 조건문을 통해서 만들려고 했다. 그러나조건문을 써서 만드니 if문의 특성대로 한 조건이 성립되면 그 부분의 코드만 실행하고 다른 코드를 실행할 수 없어서, 구현하기 어려웠다 그래서 처음에는 각 if문을 만들어서 장황한 코드를 작성했다. 이 때, JS가 가지고 있는 함수 하나가 생각났다.

**forEach()**

이 함수를 사용하면 배열이 가지고 있는 각 item들에게 원하는 함수를 배열의 index만큼 실행할 수 있었다. _slideTextBox_ 들을 보이지 않게 만들 수 있었다. 이렇게 하나를 해결했으니, 이제 문제는 간단했다.

```
if(currentScroll > absoluteScroll[0]) {
    slideTextBox.forEach( (item) => {
      item.classList.add("invisible");
    })
    slideTextBox[0].classList.remove("invisible");
  }
if(currentScroll > absoluteScroll[1]) {
  slideTextBox.forEach( (item) => {
    item.classList.add("invisible");
  })
  slideTextBox[1].classList.remove("invisible");
}

if(currentScroll > absoluteScroll[2]) {
  slideTextBox.forEach( (item) => {
    item.classList.add("invisible");
  })
  slideTextBox[2].classList.remove("invisible");
}

if(currentScroll > absoluteScroll[3]) {
  slideTextBox.forEach( (item) => {
    item.classList.add("invisible");
  })
  slideTextBox[3].classList.remove("invisible");
}

if(currentScroll > absoluteScroll[4]) {
  slideTextBox.forEach( (item) => {
    item.classList.add("invisible");
  })
  slideTextBox[4].classList.remove("invisible");
}
```

이렇게 코드를 작성하니 원하는대로 화면은 동작했다. 그러나 코드가 너무 비효율적이었고, 맘에 들지 않았다. 그래서 어떻게 하면 더 효율적으로 만들 수 있을까 생각하다가, 위의 코드는 같은 코드가 반복되고 있는 것이 보였다.
그래서 반복문을 사용했고, 위의 코드를 아주 간단하게 만들 수 있었다.

```
function handleTextWithScroll() {
  const absoluteScroll = [0, 750, 1500, 2250, 3000];
  let currentScroll = getCurrentScroll();

  for(let i =0; i<5; i++) {
    if(currentScroll > absoluteScroll[i]) {
      slideTextBox.forEach( (item) => {
        item.classList.add(INVISIBLE);
      })
      slideTextBox[i].classList.remove(INVISIBLE);
    }
  }
}
```

#### 3. Scroll to give effect to footer(scroll시에 footer에 효과주기)

이것도 정말 어려웠다. 저 위의 것을 해결하고 나니, 다했다! 하고 있는데, 손을 대니 footer가 화면을 가득채우며 fade-in, fade-out 효과를 어떻게 주어야할지 도저히 생각이 안났다.
다행히 저번에 만들었던, 왼쪽에서 나오는 navigaition 을 만들던 게 생각이 났다. fade-in, fade-out 효과는 css animation을 통해 만들고, js를 통해서 클래스를 추가, 제거하는 걸로 해결했다.

```
@keyframes special {
0% {
  opacity: 0;
  z-index: -1;
}
100% {
  opacity: 100%;
  z-index: 2;
}
}

@keyframes special-reverse {
from {
  opacity: 100%;
  z-index: 2;
}
to {
  opacity: 0;
  z-index: -1;
}
}
```

```
function handleFooter() {
const growFooter = 6100;
let currentScroll = getCurrentScroll();

if(currentScroll > growFooter) {
  footer.classList.add("special");
  footer.classList.remove("special-reverse");
} else if(currentScroll < 5800) {
  footer.classList.remove("special");
  footer.classList.add("special-reverse");
}
}
```

그러나 자꾸 화면이 footer의 높이가 너무 커서 화면이 가려지는 것을 어떻게 해결해야 할 지 모르겠었다. 생각보다 문제는 간단했다. position 속성을 이용하고 음숫값을 통해서 쉽게 해결할 수 있었다.

```
footer {
 position: absolute;
 bottom: -15%;
 width: 100%;
 height: 300vh;
 z-index: -1;
 color: white;
 display: flex;
 align-items: flex-end;
 transition: all 0.5s ease;
}
```

#### 4. Create a Search Modal Window(검색 모달창 만들기)

모달창 만들기는 쉬웠다. JS를 통해서 버튼을 클릭하면 창이 화면에 보여지게만 하면 되었다. 간단히 html을 만들었다.

```
<section class="modal hidden">
  <h4 class="modal-title">Search</h4>
  <button class="modal-close">&#215;</button>
  <div class="modal-inner">
    <form id="search-form" action="https://tolv.dk/">
      <input type="text" placeholder="Type anything" id="s" name="s" />
      <button id="search" class="close">
        <img
          src="https://www.toptal.com/designers/htmlarrows/assets/images/search-button-c0042ed6.svg"
          alt=""
        />
      </button>
    </form>
  </div>
</section>
```

그리고 CSS를 통해서 레이아웃을 잡아주었고 화면이 뛰어지면 뒤 배경에 blur효과를 주는 클래스를 만들었다. 그리고 부드럽게 화면이 보여지게 하기 위해 animation을 통해서 화면을 보여주었다.

```
.modal {
  width: 80vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 20px rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  animation: modal 0.3s forwards ease-in-out;
}

@keyframes modal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}

.modal-title {
  position: absolute;
  top: 3%;
  left: 5%;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 3%;
  background: none;
  border: none;
  padding: 0;
  font-size: 5rem;
}

.modal-inner {
  padding: 23% 19%;
}

#search-form {
  width: 90vh;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}

#search-form input {
  border: none;
  width: 100%;
  outline: none;
  text-align: center;
  color: blue;
  font-size: 1.1rem;
  font-weight: 100;
}

.blur {
  animation: blur 0.3s forwards ease-in-out;
}

@keyframes blur {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(20px);
  }
}
```

그리고 js를 통해서 클래스를 추가, 제거하게 만들었다.

```
const modal = document.querySelector(".modal");
const main = document.querySelector("main");
const searchBtn = document.querySelector(".search");
const closeBtn = document.querySelector(".modal-close");
const searchInput = document.querySelector("#search-form input")

const HIDDEN = "hidden"

function searchModalOpen() {
  modal.classList.remove(HIDDEN);
  main.classList.add("blur");
  setInterval( () => {
    searchInput.focus();
  }, 1000);
  }

function searchModalClose() {
  modal.classList.add(HIDDEN);
  main.classList.remove("blur");
}

searchBtn.addEventListener("click", searchModalOpen);
closeBtn.addEventListener("click", searchModalClose);

```

여기서 재밌었던 것은 이렇게 event를 통해서 화면을 보여주면, form에 autofocus 속성이 적용되지 않는 것이었다. 이를 해결하기 위해 고민이 필요했다. 그래서 찾아보던 중 _focus()_ 함수가 있다는 것을 알게 되었다. autofocus와 비슷한 역할을 하는데, autofocus처럼 커서가 깜빡이지 않고 집중만 되는 것이었다.
그래서 _setInterval()_ 을 통해서 1초마다 focus 되게 만들어서 비슷한 효과를 보이게 만들었다.
