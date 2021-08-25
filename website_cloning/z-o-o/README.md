# Cloning Web [z-o-o]

---

##### 원본 사이트

> zoo: http://www.z-o-o.fr/en

## Key of style

#### _**:hover**_

z-o-o의 website의 navigation에 마우스를 hover 해보자. 마우스 위치에 따라 navigation 목록의 색깔이 달라진다. 이것을 해결하기 위해 **한 요소에 hover 시에 다른 요소에 다른 효과를 적용할 수 있어야 했다.**

```
.main-nav:hover > .nav-li:nth-child(2) {
  color: white;
}

```

*main-nav*에 **hover** 시에 그 자식 요소에 글자색을 흰색으로 변경하는 코드이다. *nav-li*가 *main-nav*의 자식 요소에 해당하기 때문에 '**>**' 부등호 기호를 통해서 효과를 줄 수 있었다.

```
.nav-li:first-child:hover ~ .nav-li:nth-child(2) {
  color: black;
}
```

이 경우에는 *nav-li*의 첫번째 요소와 두번째 요소가 형제 요소이기 때문에 '**~**' 물결 기호를 통해서 효과를 줄 수 있었다.

#### Random image

이번 Cloning에는 많은 이미지가 필요했는데, 이 필요한 이미지들에 하나하나 src값을 줄 필요를 느끼지 못했다. 그래서 https://source.unsplash.com/random/ 이 url을 통해서 각 img 태그에 random img를 부여했다.
