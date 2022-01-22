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