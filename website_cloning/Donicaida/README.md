# Cloning Web [Donica Ida Design]

---

##### 원본 사이트

> Donica Ida Design: https://www.donicaida.com/

## Important Points for making this site

> 1. float 사용하기

> 2. 이미지 슬라이드 만들기

> 3. 문제점

#### 1. float 사용하기

이 사이트를 만들기는 굉장히 쉬워보였다. 뭐야, 30분이면 만들겠는데? 했지만 생각보다 만만치 않았고, 공을 들였지만 살짝 아쉬운 프로젝트가 되었다.
우선 이 사이트의 각 project들에는 오른쪽에 버튼을 가지고 있다. 이 버튼의 위치를 구현하기 위해 float: right을 사용해서 화면 오른쪽에 띄워지게 구현했다.

#### 2. 이미지 슬라이드 만들기

이 부분이 많이 힘들었는데, 우선 이미지 태그들을 박스안에 나열했다.

###### HTML

```
<div class="project-images">
  <div class="project-imgbox">
    <div class="left-btn left-arrow"></div>
    <div class="right-btn right-arrow"></div>
    <img
      class="project-img visible"
      src="https://source.unsplash.com/random/500*300"
      alt=""
    />
    <img
      class="project-img"
      src="https://source.unsplash.com/random/500*301"
      alt=""
    />
    <img
      class="project-img"
      src="https://source.unsplash.com/random/500*302"
      alt=""
    /><img
      class="project-img"
      src="https://source.unsplash.com/random/500*303"
      alt=""
    /><img
      class="project-img"
      src="https://source.unsplash.com/random/500*304"
      alt=""
    />
  </div>
  <ul class="img-list">
    <li class="list-btn selected"></li>
    <li class="list-btn"></li>
    <li class="list-btn"></li>
    <li class="list-btn"></li>
    <li class="list-btn"></li>
  </ul>
</div>
```

##### css: position 사용하기

원본 사이트를 보면 이미지의 왼쪽을 클릭하면 이미지가 왼쪽으로, 오른쪽을 클릭하면 오른쪽으로 넘어간다. 그것을 위해 왼쪽, 오른쪽을 차지하는 두개의 div를 만들었다. 그러나 이미지 태그가 차지하는 공간을 해결하는 것이 문제였다.
처음에는 css의 background-image를 img-box에 적용해서 사진을 보여주었다. 그러나 왼쪽, 오른쪽을 클릭함에 따라 넘어가는 이미지를 만드는 것에는 한계가 느껴졌고, 나는 img태그들을 작성할수 밖에 없었다.
img 태그들이 차지하는 공간을 해결하기 위해 position 속성을 사용했다. 누군가가 position 속성은 마치 레이어를 만드는 것과 같다고. 나는 이를 떠올렸고, 아래의 css를 통해 간단히 해결되었다.

```
.project-imgbox {
  position: relative;
  height: 100%;
  /* background-image: url("https://source.unsplash.com/random/500*300/");
  background-size: cover;
  background-repeat: no-repeat; */
  display: flex;
}

.project-img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
}
```

##### js: 이미지 슬라이드 구현하기

이미지 슬라이드를 만들기 위해서 css의 classList, display를 이용했다. 그리고 이미지들의 index num을 구하기 위해 변수를 하나 만들었다.

```
let currentIdx = 0;
const slideCount = imgList.length;
```

왼쪽을 클릭하면 왼쪽, 오른쪽을 클릭하면 오른쪽으로 넘어가게 하기 위해 이벤트리스너를 작성했다.

```
// 현재 index number가 0이 아니면(처음 이미지) 이전 이미지를 보여주는 함수
leftBtn.addEventListener("click", () => {
  if(currentIdx !== 0) {
    // 현재 index number보다 1 작은 수를 인자로 넘긴다.
    moveSlideLeft(currentIdx -1);
  }
})

// 현재 index number가 배열의 끝(4; 마지막 이미지)이 아니면 다음 이미지를 보여주는 함수
rightBtn.addEventListener("click", () => {
  if(currentIdx !== slideCount -1) {
    // 현재 index number보다 1 큰 수를 인자로 넘긴다.
    moveSlideRight(currentIdx + 1);
  }
});
```

이제 moveSlide 함수를 살펴보자.

```
// 이전 이미지를 보여주는 함수.
function moveSlideLeft(num) {
  // 현재 이미지를 지우고, 이전 이미지를 보여준다.
  imgList[num+1].classList.remove(VISIBLE);
  imgList[num].classList.add(VISIBLE);

  listBtn[num+1].classList.remove(SELECTED);
  listBtn[num].classList.add(SELECTED);

  // 변경된 index 번호(원래의 -1)를 저장한다.
  currentIdx =num;
}

// 다음 이미지를 보여주는 함수
function moveSlideRight( num ) {
  // 현재 이미지를 지우고, 다음 이미지를 보여준다.
  imgList[num-1].classList.remove(VISIBLE);
  imgList[num].classList.add(VISIBLE);

  listBtn[num-1].classList.remove(SELECTED);
  listBtn[num].classList.add(SELECTED);

  // 변경된 index 번호(원래의 +1)를 저장한다.
  currentIdx = num;
}
```

이렇게 클래스리스트를 이용해서 이미지 슬라이드를 간단히 구현할 수 있었다. 추가적으로 보자면 밑의 list들을 통해 이미지의 위치를 알려주는데, 아래의 코드를 살펴보자.

```
// 버튼을 클릭해도 이미지가 바뀔 수 있도록 구현하기

// 선택된 이미지를 보여주는 함수
function moveSlide(num) {
  imgList.forEach( (item) => {
    item.classList.remove(VISIBLE);
  })
  imgList[num].classList.add(VISIBLE);
}

// list의 selected class를 모두 지우고 선택된 list에 selected 클래스를 추가하는 함수
function listSelect(event) {
  listBtn.forEach( (item) => {
    item.classList.remove("selected");
  })
  // 선택된 버튼이 뭔지 알기 위해서 event의 target을 이용했다.
  const currentList = event.target;

  for(let i =0; i<listBtn.length; i++) {
    if(listBtn[i] === currentList) {
      currentIdx = i;
    }
  }
  moveSlide(currentIdx);
  currentList.classList.add("selected");
}

// listBtn이 배열이기 때문에 반복문을 통해 이벤트리스너 추가
for(let i =0; i<listBtn.length; i++) {
  listBtn[i].addEventListener("click", listSelect);
}
```

우선 버튼(list)을 클릭하면 버튼의 색상이 변경된 채로 유지되도록 만들었다. 그리고 반복문을 통해서 선택된 버튼의 index number를 찾았다. 그리고 이 번호를 이용해서 imgList의 index값을 주어서 선택된 버튼에 맞게 이미지도 변경되게 만들었다.

#### 3. 문제점

정말 잘 만들었다고 생각했다. project 하나를 만들고 복사 붙여넣기로 해서 이제 다 해결했다! 하고 확인을 하는데, 이게 무슨 일인가. 첫번째 것을 제외한 곳에서 이미지 슬라이드가 작동하지 않았다.
이미지 슬라이드를 만들 수 있게 돼서 정말 기뻐했는데, 작동하지 않는다니, 문제는 js에서 DOM 요소 때문이었다. querySelector를 통해서 html요소를 가져와 변수에 저장했는데, 이것이 문제였다. 그래서 querySelectorAll을 통해서 해결하려고 했다.
그러나 문제가 또 발생했다. **imgBox의 imgList들은 이미 내가 querySelectorAll을 통해서 배열을 가져와서 구현했었다. 각 프로젝트의 이미지박스에는 이미지들이 있는데, 각 프로젝트의 이미지 박스들은 가져올 수 있다. 그러나 이미지들은 첫번째 것을 제외하고는 가져올 수가 없었다.**
각각의 img list들에 클래스를 주어서 가져올까도 했지만, 너무나 코드가 비효율적일 것 같았다. 그래서 아쉽지만, 여기서는 이정도만 하고 다음 프로젝트를 통해 경험을 더 쌓은 후에 다시 코드를 작성할 것이다. 오늘도 화이팅!
