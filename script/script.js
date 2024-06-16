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
