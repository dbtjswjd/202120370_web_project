setTimeout(function () {
  document.getElementById('odometer0').innerHTML = '2';
}, 1500);

setTimeout(function () {
  var element = document.getElementById('odometer1');
  element.innerHTML = '4';
  element.classList.add('moveLeft2');
}, 1700);

setTimeout(function () {
  var element = document.getElementById('odometer3');
  element.innerHTML = '8';
  element.classList.add('moveLeft2');
}, 1900);

setTimeout(function () {
  document.getElementById('odometer4').innerHTML = '1';
}, 1000);

setTimeout(function () {
  var element = document.getElementById('odometer5');
  element.innerHTML = '6';
  element.classList.add('moveLeft1');
  // 클래스 추가를 0.5초 지연
}, 1930);

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

setTimeout(function () {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.classList.add('fade-out');
  setTimeout(function () {
    var mainContent = document.getElementById('mainContent');
    mainContent.style.display = 'block'; // 요소를 보이도록 설정
    setTimeout(function () {
      mainContent.classList.add('visible');
    }, 50); // 50밀리초 후에 visible 클래스 추가
  }, 1000); // 1초 후에 요소를 보이게 하고 fade-in 애니메이션 시작
}, 6000);

// $(window).on('load', function () {
//   // 로딩 화면을 페이드 아웃 후 메인 콘텐츠를 페이드 인
//   setTimeout(function () {
//     $('#loadingScreen').fadeOut(1000, function () {
//       $('#loadingScreen').css('pointer-events', 'none'); // 이벤트 차단
//       $('#loadingScreen').remove(); // 페이드 아웃 후 요소를 DOM에서 제거

//       // 메인 콘텐츠를 부드럽게 표시 (페이드 인 애니메이션)
//       $('#mainContent').fadeIn(1000); // 1초 동안 페이드 인 애니메이션 적용
//     });
//   }, 4000); // 4초 후에 실행
// });

// setTimeout(function () {
//   $('#loadingScreen').fadeOut(9000, function () {
//     $('#loadingScreen').css('pointer-events', 'none'); // 이벤트 차단
//     $('#loadingScreen').remove(); // 페이드 아웃 후 요소를 DOM에서 제거

//     // 메인 콘텐츠를 부드럽게 표시 (페이드 인 애니메이션)
//     $('#mainContent').fadeIn(1000); // 1초 동안 페이드 인 애니메이션 적용
//   });
// }, 6500); // 총 6.5초 후에 실행 (초기 애니메이션 시간 포함)
