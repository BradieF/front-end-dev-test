
// ------------------ Review Slideshow --------------------------
const track = document.querySelector('.reviewTrack');
const slides = Array.from(track.children)

const nextButton = document.querySelector('.rightButton')
const prevButton = document.querySelector('.leftButton')

const dotsNav = document.querySelector('.slideNav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to eachother 
const setSlidePosition = ((slide, index)=> {
  slide.style.left = slideWidth * index + 'px';
})

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  currentSlide.classList.remove('currentSlide');
  targetSlide.classList.add('currentSlide')
  track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';
  track.style.transition = 'transform 0.5s ease';
}

const updateDots = (currentDot, targetDot) =>{
  currentDot.classList.remove('currentSlide');
  targetDot.classList.add('currentSlide');
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
  const currentSlide = track.querySelector('.currentSlide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.currentSlide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide)


  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot)
  hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

//click right to move slide right
nextButton.addEventListener('click', e =>{
  const currentSlide = track.querySelector('.currentSlide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.currentSlide');
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

  const currentSlide = track.querySelector('.currentSlide');
  const currentDot = dotsNav.querySelector('.currentSlide')
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex];
  
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot)
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// -------------------- Header -------------------------

const headerButton = document.querySelector('.headerButton');
const secondRow = document.querySelector('#secondRow');

headerButton.addEventListener('click', () =>{
  secondRow.scrollIntoView({ behavior: 'smooth' });
})