# Cloning Web [Schwaltz Media]

---

##### 원본 사이트

> Schwaltz Media: https://schwartzmedia.com.au/

## Important Points for making this site

> 1. Shrink Header on Scroll(스크롤에 따라 헤더 줄이기)

> 2. Hamburgre Button 만들기

> 3. JS로 배경 이미지 변경하기

> 4. 클릭하면 나타나는 Navigation(사이드바메뉴) 만들기

#### 1. Shrink Header on Scroll

마우스를 스크롤하면 Header의 크기가 줄어드는 것을 어떻게 구현할 수 있을까? 이것을 해결하기 위해서 나는 **두가지 포인트**가 필요했다.

1. **현재 위치**를 가져오기
2. **윈도우** 이벤트 리스너

##### 현재 위치 가져오기

```
// 현재 스크롤 위치를 가져오는 함수
function getCurrentScroll(){
  return window.pageYOffset || document.documentElement.scrollTop;
}
```

위의 함수를 통해서 현재 스크롤 위치를 가져오고 변수에 저장했다.

```
let scroll = getCurrentScroll();
```

현재 스크롤 위치를 알게 되었다면, 다음은 간단하다. 이벤트 리스너를 통해서 일정 스크롤 값 이상이되면 헤더의 default 스타일과 다른 스타일을 적용해주면 된다.

##### Window 이벤트 리스너 사용하기

```
window.addEventListener("scroll", handleButtonLocate);
```

이벤트 리스터너작성하고 리스터의 타입과 이벤트 발생 시 작동할 함수를 작성해준다.

```
function handleButtonLocate() {
  // 스타일이 변경될 scroll 값을 변수에 저장
  const shrinkHeader = 100;

  let scroll = getCurrentScroll();

  // scroll 값이 100이상이면 스타일 적용
  if(scroll >= shrinkHeader) {
    wrapper.classList.add(ACTIVE_BUTTON);
    header.classList.add(HEADER_SCROLLED);
    headerTitle[0].classList.add(HIDDEN);
    headerTitle[1].classList.add(HIDDEN);
    scrollTitle.classList.remove(HIDDEN);
  } else{
    wrapper.classList.remove(ACTIVE_BUTTON);
    header.classList.remove(HEADER_SCROLLED);
    headerTitle[0].classList.remove(HIDDEN);
    headerTitle[1].classList.remove(HIDDEN);
    scrollTitle.classList.add(HIDDEN);
  }
}
```

다음과 같이 작성할 수 있는데, 이 사이트의 경우 기본적으로 헤더에 logo가 두가지로 나뉘어져 있어서, _**querySelectorAll()**_ 을 통해서 요소에 접근했다.

```
const headerTitle = document.querySelectorAll(".header-title");
```

이런식으로 모든 요소를 가져온 후에 스크롤 값에 따라 클래스를 추가하거나 제거를 통해서 스크롤에 따라서 크기나 스타일이 변하는 헤더를 만들 수 있었다.

#### 2. Hamburgre Button 만들기

이 사이트의 좌측 상단에는 **햄버거 버튼**이라 불리는 버튼이 있다. 나는 이것이 그냥 이미지라고 생각하고 간단하게 생각했는데, 이 사이트를 만들면서 가장 힘쓴 부분 중에 하나가 되었다.

```
 <button id="wrapper">
     <span id="line-top" class="line init top-reverse"></span>
     <span id="line-mid" class="line init mid-reverse"></span>
     <span id="line-bot" class="line init bot-reverse"></span>
 </button>
```

html은 간단하게 구현할 수 있었다. 그리고 이것도 마찬가지로 클릭에 따라서 JavaScript를 통해 CSS의 클래스를 추가, 제거를 통해서 motion을 구현할 수 있었다. 정말 복잡한 부분은 CSS였다.

```
  .line {
    position: relative;
    display: block;
    background: rgb(78, 78, 78);
    margin-top: 6px;
    margin-bottom: 6px;
    width: 35px;
    height: 2px;
    border-radius: 1px;
    box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.5);
  }
```

우선 CSS를 통해서 햄버거 버튼이 될 세 개의 line을 그려준다.

```
  .line-top {
    /* animation을 두 개이상 작성하면 첫번째로 지정된 animation이
    실행되고 그 다음 animation이 실행된다.  */
    animation: line-top 0.5s forwards ease-out,
      line-top-rotate 0.3s 0.5s forwards ease-out;
    background: white;
  }

  @keyframes line-top {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(8px);
  }

  /* 겹쳐지고 난 후에 회전 시키기 */
  /* rotate 사용시에는 translateY를 써주어야 .line이 있던 초기 위치에서 animation이 동작하는 것을 방지할 수 있다. */
  @keyframes line-top-rotate {
    0% {
      transform: translateY(8px) rotateZ(0deg);
    }
    100% {
      transform: translateY(8px) rotateZ(45deg);
    }
  }
  }
```

각 line마다 클릭하면 실행될 클래스를 생성하고, 스타일을 작성해준다. 이것을 만들면서 알게된 것은 **animation에 클래스를 적을 때 한 개 이상이면 앞에 것부터 순서대로 실행된다는 것을 알게 되었다.** 전부 작성해주었으면, 이제 다시 클릭했을 때 원래 상태로 자연스레 돌아갈 수 있도록 스타일을 적용해주어야 한다.

```
  .top-reverse {
    animation: line-top-rotate-reverse 0.3s forwards ease-out,
      line-top-reverse 0.5s 0.3s forwards ease-out;
  }

  @keyframes line-top-reverse {
    0% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes line-top-rotate-reverse {
    0% {
      transform: translateY(8px) rotateZ(45deg);
    }
    100% {
      transform: translateY(8px) rotateZ(0deg);
    }
  }

```

#### 3. JS로 배경 이미지 변경하기

랜덤 이미지를 사용하기 위해 unsplash의 random 이미지를 사용했다.

[unsplash] : https://source.unsplash.com/random

```
 function showImage() {
   const random = Math.floor(Math.random() * 400);
   img.src = `https://source.unsplash.com/random/400*${random}`;
 }

 showImage();
 setInterval(showImage, 4000);
```

unsplash의 random 이미지는 새로고침할 때마다 새로운 랜덤 이미지를 우리에게 보여준다. 그러나 나는 일정 시간마다 이미지가 바뀌는 기능이 필요했고, 그래서 **Math() 메소드**를 이용해서 이미지 url에 random한 숫자를 집어넣었다. 그리고 **setInterval()**을 통해서 일정 시간마다 다른 이미지를 화면에 출력하도록 했다.

#### 4. 클릭하면 나타나는 Navigation(사이드바메뉴) 만들기

어떻게 하면 클릭하면 navigation이 화면에 나오게 할 수 있을까? 이것도 JS의 ClassList를 이용해서 할 수 있을 것 같았다. 아까 만들었던 햄버거 버튼을 클릭하면 Navigation이 왼쪽에서 나타나게 만들면 된다. 그렇다면 CSS를 어떻게 구현하는지가 관건이었다.
이 경우 point는 이거였다.

```
#menu {
  background-color: #212020;
  color: white;
  position: fixed;
  top: 0;
  left: -35vw;
  width: 35vw;
  height: 100%;
  z-index: 1;
  transition: all 0.5s ease;
}
```

기본값으로 position을 fixed 값을 주고, **left를 navigation의 크기만큼 음숫값을 지정해서 화면에서 안보이게 해두면 되는거였다.**

```
.active {
 left: 0 !important;
}
```

그 다음 햄버거 버튼을 클릭하면 left 값을 0으로 만들어서 화면에 나타나게 만들면 된다. 이렇게 간단한 거를 한참이나 고민하고 있었다니, 그래도 해결할 수 있어서 만족스럽다.
