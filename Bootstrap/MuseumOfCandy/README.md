# BootStrap

## Point of this project

> 1. 화면 사이즈가 변경됨에 따른 레이아웃의 변경

> 2. media query 이용하기

#### 1. 화면 사이즈가 변경됨에 따른 레이아웃의 변경

화면 사이즈에 따라 변경되는 것은 몇 가지가 있다.

- 첫 번째 **section**의 **#headingGroup**이 사라진다.
- 두 번째 **section**의 각 row들이 화면이 작아지면 순서에 상관없이, 텍스트 박스를 위쪽으로 위치 시킨다.
- 텍스트 박스의 icon이 사라진다.
- 텍스트 박스의 문단의 여백이 화면 크기가 커지면 줄어든다.

여기서 사라지는 것들은 bootstrap으로 display 속성을 이용하면 된다. 기본 적으로 d-none으로 보이지 않게 하다가 d-lg-block, d-md-inline 등으로 화면 사이즈가 충분히 커지면 나타나게 할 수 있다.

```
<!-- 1. 화면이 작아지면 headingGroup 사라지게 하기 -->
<section class="container-fluid px-0">
  <!-- flex 설정은 row에 해주기! -->
  <div class="row align-items-center">
    <div class="col-lg-6">
      <!-- 화면의 크기가 작아지면 보이지 않고 커지면 보이게 설정 -->
      <div
        id="headingGroup"
        class="text-center text-white d-none d-lg-block mt-5"
      >
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
        <h1 class="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
      </div>
    </div>
    <div class="col-lg-6">
      <!-- img-fluid를 사용하면 현재 레이아웃의 흐름에 맞게 이미지 설정 가능 -->
      <img class="img-fluid" src="imgs/hand2.png" alt="" />
    </div>
  </div>
</section>

<!-- 2. 화면이 작아지면 img 태그(lolli_icon) 사라지게 하기 -->
<div class="row justify-content-center">
  <div class="blurb col-10 col-lg-8 mb-5 mb-md-0">
    <h2>MUSEUM OF CANDY</h2>
    <img
      src="imgs/lolli_icon.png"
      alt=""
      class="d-none d-lg-inline"
    />
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto aliquid debitis nostrum nam expedita perferendis
      quibusdam ipsa, esse velit iure incidunt necessitatibus
      accusamus iste eligendi, eum excepturi! Ad, pariatur!
      Voluptatibus. Maiores debitis aliquam doloribus, saepe
      molestias, quasi nulla sapiente excepturi eum aliquid voluptas
      quod possimus ipsa voluptatem!
    </p>
  </div>
</div>
```

화면 크기에 따른 텍스트 박스와 이미지의 순서 변경은 order를 이용하면 된다. 화면의 특정 중단점에서 order 속성으로 순서를 변경하면 된다.

```
<div class="row align-items-center content">
  <div class="col-md-6 order-2 order-md-1">
    <img src="imgs/milk.png" alt="" class="img-fluid" />
  </div>
  <div class="col-md-6 text-center order-1 order-md-2">
    <div class="row justify-content-center">
      <div class="blurb col-10 col-lg-8 mb-5 mb-md-0">
        <h2>MUSEUM OF CANDY</h2>
        <img
          src="imgs/lolli_icon.png"
          alt=""
          class="d-none d-lg-inline"
        />
        <p class="lead">
          ...
        </p>
      </div>
    </div>
  </div>
</div>
```

위의 코드를 통해서 텍스트 박스 여백의 크기 조절도 볼 수 있는데, 위의 코드는 한 row안에서 두 개의 column이 6칸씩 사용하고 있는 구조이다(한 row당 총 12units). 여기서 조금 더 문단의 여백을 잘 사용하기 위해 column 안에 새로운 row를 만들고 새로운 column을 생성했다. 그리고 flex utilities를 이용해 가운데 배치시켰다.

#### 2. media query 사용하기

```
@media (max-width: 1200px) {
  #headingGroup h1 {
    font-size: 2.5rem;
  }
}
```

아주 간단한 미디어 쿼리이다. 사이즈가 1200이하가 되면 font-size를 줄여서 화면이 깨지는 것을 막아준다. 그러나 나는 아직 media query에 대해 무지한 것 같다. max-width를 생각을 못해서 다시 찾아보다니... 조금 더 공부하자.

js로 헤더를 만드는 것은 매일 하던 짓이라 다른 글을 봐주면 좋을 것 같다!!
