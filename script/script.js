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
  element.classList.add('moveLeft');
}, 1830);

setTimeout(function () {
  var element = document.querySelector('.screen_start');
  element.classList.add('shrinkAnimation');
}, 5000);
