//maincontents js

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('cover');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'flex';

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function adjustImageSize() {
  let covers = document.querySelectorAll('.cover');
  covers.forEach(function (cover) {
    let img = cover.querySelector('.cover__img');
    let containerWidth = cover.clientWidth;
    let containerHeight = cover.clientHeight;
    let imgRatio = img.naturalWidth / img.naturalHeight;

    if (containerWidth / containerHeight > imgRatio) {
      img.style.width = '100%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  });
}
//메인 이미지 자동 변경 애니메이션

// window.addEventListener('scroll', handleScroll);

// function handleScroll() {
//   let text1Typing = document.querySelector('.text1_typing');
//   let bounding = text1Typing.getBoundingClientRect();
//   let viewportHeight = window.innerHeight;

//   // 스크롤 시 중간쯤 위치할 때 애니메이션 시작 / 1부분일딴 1로해놓고 중간읋 할떄 2로 변경필요
//   if (bounding.top < viewportHeight / 3) {
//     setTimeout(function () {
//       text1Typing.classList.add('show');
//       setTimeout(function () {
//         text1Typing.classList.add('animate-typing');
//       }, 500); // 0.5초(500밀리초) 지연 후 animate-typing 클래스 추가
//     }); // 0.5초(500밀리초) 지연 후 show 클래스 추가
//   }
// }

// window.addEventListener('scroll', handleScroll);

// function handleScroll() {
//   let text1Typing = document.querySelector('.text1_typing');
//   let bounding = text1Typing.getBoundingClientRect();

//   // 스크롤 시작 후 애니메이션 시작
//   if (window.scrollY > 0) {
//     setTimeout(function () {
//       text1Typing.classList.add('show');
//       setTimeout(function () {
//         text1Typing.classList.add('animate-typing');
//       }, 1000); // 0.5초(500밀리초) 지연 후 animate-typing 클래스 추가
//     }); // 0초 지연 후 show 클래스 추가
//   }
// }

window.addEventListener('DOMContentLoaded', function () {
  let text1Typing = document.querySelector('.text1_typing');

  let observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // 요소가 화면에 들어왔을 때
          // 이미 애니메이션이 진행 중이지 않다면 애니메이션을 실행
          if (!text1Typing.classList.contains('animate-typing')) {
            setTimeout(function () {
              text1Typing.classList.add('show');
              setTimeout(function () {
                text1Typing.classList.add('animate-typing'); // 타이핑 애니메이션 시작
              }, 1000); // 1초 지연 후 animate-typing 클래스 추가
            }, 0); // 즉시 show 클래스 추가
          }
        } else {
          // 화면 밖으로 나갔을 때 애니메이션을 초기화
          // 여기서 애니메이션을 중지하지 않고, 보이는 상태로 유지
        }
      });
    },
    { threshold: 0.5 }
  ); // 화면의 50%가 보일 때 트리거

  observer.observe(text1Typing); // text1_typing 요소를 관찰
});

//카드 뒤집는 효과
document.querySelectorAll('.flip-card').forEach(function (card) {
  card.addEventListener('click', function () {
    this.querySelector('.flip-card-inner').classList.toggle('is-flipped');
  });
});
