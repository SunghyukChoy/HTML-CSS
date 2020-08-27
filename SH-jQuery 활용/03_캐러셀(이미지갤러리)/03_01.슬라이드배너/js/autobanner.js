/* js/autobanner.js */

$(function() {

  var $btn = $('.banner-wrap input');
  var btnCount = $btn.length;     //input 태그 개수
  var speed = 2000;               //슬라이드 시간(ms)
  var i = 0;                      //index

  function check() {

    if(i < btnCount) {
      i++;
      $btn.eq(i).click();
    } else {
      i = 0;
      $btn.eq(i).click();
    }
  }

  //speed ms마다 check 실행
  var slide = setInterval(check, speed);
});