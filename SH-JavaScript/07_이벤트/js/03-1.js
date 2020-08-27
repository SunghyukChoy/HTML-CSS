
function loadEnd1() {
  alert('loadEnd1() 실행');
}

//window.onload = loadEnd1;
window.addEventListener('load', loadEnd1);
                    //('이벤트종류', 실행할 함수명)
    //addEventListener : 이벤트를 더해라. 듣는 사람 = 감지기.