const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

//window는 하나의 창이라고 보면 된다
window.addEventListener('scroll', _.throttle(function (){  
  if (window.scrollY > 500){
    // 배치 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      display: 'none',
      opacity : 0
    });
  }
  else {
    gsap.to(badgeEl, .6, {
      display : 'block',
      opacity : 1
    });
  }
  // 300 0.3초단위 
},300));


//순차적으로 요소가 나오게 하는 경우
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index + 1) + .7,
    opacity : 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper',{
  loop : true,
  autoplay: {
    delay: 5000
  }, 
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween:10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데에 배치
  pagination:{
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable:true // 사용자의 페이지 번호 요소 제어 가능 여부

  },
  navigation : {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }
  else {
    promotionEl.classList.remove('hide');
  }
})