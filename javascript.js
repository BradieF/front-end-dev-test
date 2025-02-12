
// ------------------ Review Slideshow --------------------------
const track = document.querySelector('.review__track');
const slides = Array.from(track.children)

const nextButton = document.querySelector('.review__button--next')
const prevButton = document.querySelector('.review__button--prev')

const dotsNav = document.querySelector('.slideNav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to eachother 
const setSlidePosition = ((slide, index)=> {
  slide.style.left = slideWidth * index + 'px';
})

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  currentSlide.classList.remove('current__slide');
  targetSlide.classList.add('current__slide')
  track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
  track.style.transition = 'transform 0.5s ease';
}

const updateDots = (currentDot, targetDot) =>{
  currentDot.classList.remove('current__slide');
  targetDot.classList.add('current__slide');
}

hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if(targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
    else if(targetIndex === slides.length - 1) {
      prevButton.classList.remove('is-hidden')
      nextButton.classList.add('is-hidden')
    }
    else {
      prevButton.classList.remove('is-hidden')
      nextButton.classList.remove('is-hidden');
    }
}

//click left to move slide left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current__slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current__slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide)


  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot)
  hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

//click right to move slide right
nextButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.current__slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current__slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);

})

//click indicator to navigate to slides
dotsNav.addEventListener('click', e => {
  //what indicator was selected
  targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current__slide');
  const currentDot = dotsNav.querySelector('.current__slide')
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];
  
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot)
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// -------------------- Header -------------------------

const headerButton = document.querySelector('.button--primary');
const secondRow = document.querySelector('#secondRow');

headerButton.addEventListener('click', () =>{
  secondRow.scrollIntoView({ behavior: 'smooth' });
})


window.addEventListener('load', function() {
  const headerTitle = document.querySelector('#header__welcome');
  if (headerTitle) {
    headerTitle.style.opacity = '1'; 
    headerTitle.style.transform = 'translateY(-2rem)';
  }
});



// -------------------- Fifth Row -------------------------

const callButton = document.querySelector('.callButton');

callButton.addEventListener('click', ()=>{
  callButton.style.transition = '0.5s';
  callButton.style.backgroundColor = 'grey';

})

