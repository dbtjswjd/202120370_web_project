$(window).on('load', function () {
  // 로딩 화면을 페이드 아웃 후 메인 콘텐츠를 페이드 인
  $('#loadingScreen').fadeOut(500, function () {
    $('#mainContent').fadeIn(1000); // 1초 동안 페이드 인 애니메이션 적용
    $(this).remove(); // 페이드 아웃 후 요소를 DOM에서 제거
  });

  // // h1 요소를 페이드 인 처리
  // setTimeout(function () {
  //   var h1Element = document.querySelector('h1.start_title');
  //   h1Element.classList.add('fade-in');
  // }, 500); // 500ms 후에 실행 (로딩 애니메이션에 맞춰 조정)

  // // h3 요소를 페이드 인 처리
  // setTimeout(function () {
  //   var h3Element = document.querySelector('h3.start_subtitle');
  //   h3Element.classList.add('fade-in');
  // }, 500); // 500ms 후에 실행 (로딩 애니메이션에 맞춰 조정)
});
