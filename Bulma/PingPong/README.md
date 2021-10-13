# Bulma

## Point of this project

> Bulma를 사용한 간단한 CSS 적용하기

오늘은 새로운 CSS FrameWork를 공부해 보았다. 이름은 Bulma다. 아래의 사이트에서 Bulma에 대한 정보를 보고 배울 수 있다! 한 번 연습해보자.

- Bulma: "https://bulma.io/"

'Getting Started' 버튼을 누르고 메뉴를 보면 부트스트랩과 비슷하게 components, helper, form, layout 등이 있다.

#### 1. Layout 설정하기

```html
<!-- 약간의 여백을 주기 위해 section 클래스 사용-->
<section class="section">
  <!-- 화면 크기에 따라 일정한 크기로 만들어 주는 박스 -->
  <div class="container">
    <!-- 화면 여백을 조절하기 위해 column 사용 -->
    <div class="columns">
      <!-- column안에서 이 컬럼의 크기를 is-half로 -->
      <!-- column안에서 빈 컬럼의 크기를 is-offset으로 설정 -->
      <div class="column is-half is-offset-one-quarter"></div>
    </div>
  </div>
</section>
```

부트스트랩과 비슷하지만 사용법이 약간씩 다른 걸 알 수 있다. 조금 더 길게 써야하는 단점이 있지만, 부트스트랩을 한 번 공부해서 그런지는 모르겠지만 더 이해하기 쉬운 것 같다.

#### 2. Card만들기

Bulma의 카드를 그대로 복사해서 몇 가지를 내가 원하는 대로 수정했다.

```html
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Ping Pong Score Keeper</p>
  </header>
  <div class="card-content">
    <div class="content">
      <!-- Bulma Elements의 Title이나 Helper의 Typhography를 통해 큰 제목을 설정할 수 있다. -->
      <h1 class="title is-1">
        <span class="score" id="p1Display">0</span> to
        <span class="score" id="p2Display">0</span>
      </h1>
      <p class="subtitle">Use the buttons below to keep score.</p>
    </div>
  </div>

  <footer class="card-footer">
    <!-- button의 색깔과 크기를 조정해주었다. -->
    <button
      id="playerOneBtn"
      class="card-footer-item button is-success is-large"
    >
      +1 Player One
    </button>
    <button id="playerTwoBtn" class="card-footer-item button is-info is-large">
      +1 Player Two
    </button>
    <button id="resetBtn" class="card-footer-item button is-danger is-large">
      Reset
    </button>
  </footer>
</div>
```

#### 3. card 이미지 넣기

```html
<div class="card-image">
  <figure class="image is-2by1">
    <img
      src="https://media.istockphoto.com/photos/the-concept-of-sports-games-healthy-lifestyle-orange-ball-on-a-grid-picture-id1255844980?b=1&k=20&m=1255844980&s=170667a&w=0&h=HNIsSwVu2FJF0FOhUAVvxdUk2qP_QGV-c9uw9SdFbq0="
      alt=""
    />
  </figure>
</div>
```

Bulma에서는 img를 사용하기 위해서 figure태그를 사용해야 하는 것 같다. figure 태그에 image 클래스를 부여하고 크기를 조절한다(is-2by1 등).

#### 4. select

```html
<div class="select is-rounded">
  <select id="playto">
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
</div>
```

Bulma에서는 select를 사용하기 위해서는 div를 사용해야 하는 것 같다. select 클래스를 부여하고 나는 둥글게 만들기 위해서 is-rounded 클래스를 부여했다.

이렇게 몇 가지 Bulma의 기능을 이용해 CSS 하나 없이 깔끔하게 탁구 게임을 꾸며보았다. 나는 HTML이 지저분해지는 것 같아서 자꾸 사용을 꺼리게 되는데, 한번씩 CSS Framework를 사용하면 너무나 편리하고 기능도 좋다. 내 구닥다리같은 성격을 좀 고쳐야 할 것 같다. 더 연습하러 이만!
