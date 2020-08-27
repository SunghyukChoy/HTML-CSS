/* js/quick.js */

$(function() {

  var $win = $(window);         //브라우저
  var $qm = $('#qm');           //퀵메뉴 ul
  var $qma = $('#qm > li > a'); //퀵메뉴 내부 a
  var delay = 300;              //대기시간(ms)

  // (1) 스크롤 발생 시 퀵메뉴 상단 배치
  // $win.scroll(function() {
  //   var pos =  $(this).scrollTop();
  //   $qm.stop().animate({top: pos}, delay);
  // });

  // (2) 스크롤 발생 시 퀵메뉴 가운데 배치
  // 최초 로딩 시 퀵메뉴를 세로 가운데 배치
  var mpos = $win.height() / 2 - $qm.height() / 2;
  $qm.css('top', mpos);

  $win.scroll(function() {
    var pos = $(this).scrollTop() + mpos;
    $qm.stop().animate({top: pos}, delay);
  });

  //퀵메뉴 클릭 시 페이지 이동
  $qma.click(function() {

    var go = $(this).attr('href');  //내부링크 아이디
    var speed = 1000;               //이동속도(ms)

    //페이지 이동 애니메이션
    $('html, body').animate({
      scrollTop: $(go).offset().top
    }, speed);

    //퀵메뉴 클릭시 .on 추가/제거
    if($qma.target) {
      $($qma.target).removeClass('on'); //이전 선택된 .on 제거
      $(this).addClass('on');
    } else {
      $(this).addClass('on');
    }

    $qma.target = this;

    return false;

  });

  // 새로고침 시 맨 위로 강제 이동
  $qma[0].click();

  //브라우저 높이 계산 후 높이 적용 - 최초 로딩시
  function fit () {
    var wh = $win.height();
    $('#page1').css('height', wh);
  }

  fit();

  //브라우저 크기 변경시 높이 적용
  $win.resize(function() {fit();});
  
});