const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');

let menuTL = gsap.timeline({ paused: true, reversed: true });



hamburger.addEventListener('click', () => {
	menuTL.reversed() ? menuTL.play() : menuTL.reverse();
});
