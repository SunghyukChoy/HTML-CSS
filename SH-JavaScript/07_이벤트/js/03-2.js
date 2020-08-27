
function loadEnd2() {
  alert('loadEnd2() 실행');
}

//window.onload = loadEnd2;

// 방법1 : 모던 브라우저
//  window.addEventListener('laod', loadEnd2);
      //자바에서의 쓰레드 개념.

// 방법2 : 구형 IE 대응 -> 조건문 이용
if(window.attachEvent) {
      //attachEvent : addEventListener와 같음. 익스플로러까지 호환 가능.
  window.attachEvent('onload', loadEnd2);
} else {
  window.addEventListener('load', loadEnd2);
}
