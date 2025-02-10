const track = document.querySelector('.reviewTrack');
const slides = Array.from(track.children)

const nextButton = document.querySelector('.rightButton')
const previousButton = document.querySelector('.leftButton')

const dotNavs = document.querySelector('.slideNav')
const dots = Array.from(dotNavs.children)

//click left to move slide left
//click right to move slide right
//click indicator to navigate to slides
