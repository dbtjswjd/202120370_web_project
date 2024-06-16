setTimeout(function () {
  document.getElementById('odometer0').innerHTML = '2';
}, 1000);

setTimeout(function () {
  document.getElementById('odometer1').innerHTML = '4';
}, 1500);

setTimeout(function () {
  document.getElementById('odometer3').innerHTML = '8';
}, 2000);

setTimeout(function () {
  document.getElementById('odometer4').innerHTML = '1';
}, 1000);

setTimeout(function () {
  var element = document.getElementById('odometer5');
  element.innerHTML = '6';
  // element.classList.add('moveLeft');
}, 1830);

setTimeout(function () {
  var element = document.querySelector('.screen_start');
  element.classList.add('shrinkAnimation');
}, 5000);

setTimeout(function () {
  var element = document.querySelector('.screen_start');
  element.classList.add('shrinkAnimation');

  // 애니메이션이 끝난 후 h1 요소를 페이드인 처리
  setTimeout(function () {
    var h1Element = document.querySelector('h1');
    h1Element.classList.add('fade-in');
  }, 500); // 500ms 후에 실행 (애니메이션 duration에 맞게 조정)

  setTimeout(function () {
    var h1Element = document.querySelector('h3');
    h1Element.classList.add('fade-in');
  }, 500);
}, 4000);

$(window).on('load', function () {
  // h1 요소를 페이드 인 처리
  setTimeout(function () {
    var h1Element = document.querySelector('h1.start_title');
    h1Element.classList.add('fade-in');
  }, 500); // 500ms 후에 실행 (로딩 애니메이션에 맞춰 조정)

  // h3 요소를 페이드 인 처리
  setTimeout(function () {
    var h3Element = document.querySelector('h3.start_subtitle');
    h3Element.classList.add('fade-in');
  }, 500); // 500ms 후에 실행 (로딩 애니메이션에 맞춰 조정)

  // 로딩 화면을 페이드 아웃 후 완전히 제거
  setTimeout(function () {
    $('#loadingScreen').fadeOut(1000, function () {
      $('#loadingScreen').css('pointer-events', 'none'); // 이벤트 차단
      $('#loadingScreen').remove(); // 페이드 아웃 후 요소를 DOM에서 제거

      // 메인 콘텐츠를 부드럽게 표시 (페이드 인 애니메이션)
      $('#mainContent').fadeIn(1000); // 1초 동안 페이드 인 애니메이션 적용
    });
  }, 4000); // 총 4.5초 후에 실행 (초기 애니메이션 시간 포함)
});
