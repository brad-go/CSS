# Cloning Web [Canal Street Market]

---

##### 원본 사이트

> Canal Street Market: https://canalstreet.market//

## Important Points for making this site

> 1. animation

> 2. linear-gradient

이 사이트는 그리드와 flex를 이용해서 레이아웃은 쉽게 만들 수 있었다. 그러나 이 사이트는 시각적인 효과가 중요했다고 생각한다. 사이트에 접속하면 오른쪽에 nav들이 하나씩 순차대로 내려오며, 메인 페이지는 어느정도 시간을 가진 후에 fade-in된다. 그리고 아래로 내려보면 몇 박스들의 테두리가 굉장히 신기하다. 어떻게 효과를 적용했는지 너무 궁금했다. 작은 선들이 이리저리 움직이는 것이 사용자의 눈을 사로잡았다.
js 없이 이 사이트를 만들었는데, 생각보다 맘에 들게 잘 된것 같다.

#### 1. animation

오른쪽의 nav들이 화면아래로 내려오는 효과를 가지기 위해서 animation을 사용했다.

###### HTML

```
<a class="single-page food" href="">
  <p>餐饮</p>
  <span>Food</span>
</a>
<a class="single-page retail" href="">
  <p>購物</p>
  <span>Retail</span>
</a>
<a class="single-page commnuity" href="">
  <p>文化</p>
  <span>Community</span>
</a>
```

본래의 사이트는 이 nav들을 클릭하면 화면이 열리면서 새로운 html이 호출되기 때문에, a 태그를 이용해서 만들었다.

###### CSS

```
.single-page {
  position: fixed;
  top: -100vh;
  right: 0;
  width: 60px;
  height: 100vh;
  text-decoration: none;
  color: black;
  text-align: center;
}

.food {
  margin-right: 120px;
  background-color: #5da3ec;
  z-index: 2;
}

.retail {
  margin-right: 60px;
  background-color: #f64444;
  z-index: 3;
}

.commnuity {
  background-color: #feb400;
  z-index: 4;
}
```

각 nav들에게 position: fixed와 margin 값을 통해서 위치를 지정했다. 그리고 기본 우선 animation을 적용하기 위해 기본 위칫값을 top: -100vh를 주어서 보이지 않게 만들었다.

```
.single-page p {
  margin: 0 auto;
  padding: 100px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.single-page span {
  position: absolute;
  writing-mode: vertical-lr;
  font-family: "Space mono", monospace;
  font-size: 1.2rem;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}
```

각 nav들의 p태그와 span태그에도 스타일을 적용했는데, span태그들의 오른쪽으로 회전해 있는 글자를 위해 writing-mode 속성을 사용했다. 다른 방법으로는 transform: rotateX(90deg)를 사용해도 될 것 같다.

```
@keyframes slidein {
  0% {
    top: -100vh;
  }
  100% {
    top: 0;
  }
}
```

적용할 animation은 간단했다. 위에 있는 nav들을 그냥 밑으로 내리기만 하면됬다. 그러나 하나씩 순서대로 내려오는 nav들을 적용시키기 위해선 어떻게 해야할까? 한 번 보자.

```
.food {
  ...
  animation: slidein 0.6s forwards 0.6s;
}

.retail {
  ...
  animation: slidein 0.6s forwards 0.4s;
}

.commnuity {
  ...
  animation: slidein 0.6s forwards 0.2s;
```

각 nav 들에게 slidein 이라는 animation을 적용했고, 동작하는 시간은 0.6s로 동일하게 만들었다. 그리고 animation이 동작한 후 지속된 상태로 있게 하기 위해 forwards값을 사용했다. 그리고 delay 시간을 각각 다르게 줘서 순서대로 내려오게 만들었다.
너무나 쉽지 않은가! 내가 animation을 제대로 이해하지 못하고 있어서 고전했던 것 같다. 그리고 메인 페이지가 백지 상태에서 nav들의 animation이 다 적용된 후에 나타나는데, 그것 또한 간단했다.

```
.page {
  opacity: 0;
  animation: fade-in 1.5s forwards 1s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
```

기본 페이지의 opacity 값을 0으로 주고 animation을 통해서 나타내면 됐다. delay 시간을 아까 animation들보다 더 느리게 줘서 원하는 효과를 만들 수 있었다. 참 재미있는 사이트인 것 같다.

#### 2. linear-gradient

linear-gradient 말그대로 그냥 그라디언트 효과라고 생각만 하고 있었다. 한 색깔에서 다른 색깔로 부드럽게 이어지게 해주는 속성이라고 생각했다. 그러나 이 사이트의 제작자는 이 linear-gradient를 다르게 해석한 것 같다. 이 효과로 움직이는 선들의 테두리르 만들어내다니 정말 대단하다!!

###### HTML

```
<section class="home-address">
  <div class="home-address__text">
    <h3>265 Canal St. New York, NY</h3>
  </div>
  <div class="home-address__map">
    <img
      src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
      alt=""
    />
  </div>
</section>
```

###### CSS

```
.home-address {
  width: 100%;
  padding: 0 60px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 60px;
  grid-template-rows: minmax(300px, 340px);
}
```

우선 감싸고 있는 태그에 grid를 적용했다. 정말 간단하다. 대단한 건 이제부터이다.

```
.home-address__text {
  ...
  background-image: linear-gradient(90deg, #000 50%, transparent 0),
    linear-gradient(180deg, #000 50%, transparent 0),
    linear-gradient(270deg, #000 50%, transparent 0),
    linear-gradient(0deg, #000 50%, transparent 0);
  ...
}
```

우선 네 개의 배경을 만든다. linear-gradient를 적용해서 수평과 수직을 정해주고( 90deg, 180deg 등; 사실 두가지로만 해도 된다. ), 그 다음 색상값을 부여한다. _#000 50%_ 반은 검은색, _transparent 0_ 반은 투명이다.

```
.home-address__text {
  ...
  background-position: 0 0, 100% 0, 0 100%, 0 100%;
  background-size: 30px 1px, 1px 30px, 30px 1px, 1px 30px;
  ...
}
```

그리고 네 개의 배경의 위치를 지정해준다. 그리고 중요한 것은 크기이다. 각 background의 크기를 보자. 그냥 30px 1px 혹은 1px 30px의 검은색과 투명이 반복되는 작은 선일 뿐이다. 그런데 이것이 반복을 통해서 아름다운 선이 된다.

```
.home-address__text {
  ...
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
  ...
}
```

각 선들에게 반복을 부여해서 선을 만든다.

```
animation: rotateWalk 0.4s infinite normal;
animation-timing-function: linear;
animation-play-state: paused;
```

그리고 animation을 무한히 반복되게 부여하고, 같은 속도로 움직이게 만들고 멈춘 상태로 둔다.

```
home-address__text:hover {
  animation-play-state: running;
}
```

이렇게 해서 마우스를 올리면 점선들이 움직이는 animation이 완성된다. 정말 대단하다. 이 사이트를 cloning 해보길 정말 잘한 것 같다. animation에 대해서 조금 더 확실히 알게 되었고, linear-gradient를 사용하는 새로운 방법을 알게 되었다!!
