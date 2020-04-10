const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const navItem = Array.from(document.querySelectorAll('.nav-list li'));
const navBox = document.querySelector('.nav__box');
const navLinks = document.querySelector('.nav-links');
const navBrand = document.querySelector('.nav-brand');

let menuTL = gsap.timeline({ paused: true, reversed: true });

menuTL
	.to(navBox, {
		css: { display: 'flex' },
	})
	.to(navBox, {
		opacity: 1,
	})
	.to([lineOne, lineTwo], {
		css: { stroke: '#fff' },
	})
	.to('.nav-brand', { css: { filter: 'invert(100%)' } })
	.to(lineOne, {
		y: -10,
		duration: 0.25,
	})
	.to(lineOne, {
		rotation: 45,
		transformOrigin: '50% 50%',
		duration: 0.2,
	})
	.to(lineTwo, {
		rotation: -45,
		transformOrigin: '50% 50%',
		duration: 0.2,
		delay: -0.2,
	})
	.from(navItem, {
		y: 100,
		opacity: 0,
		duration: 0.5,
		stagger: 0.2,
		ease: Power2.easeInOut,
		delay: -0.1,
	})
	.from(navLinks, {
		y: 100,
		opacity: 0,
		duration: 0.4,
		delay: -0.2,
	});

hamburger.addEventListener('click', () => {
	menuTL.reversed() ? menuTL.play() : menuTL.reverse();
});
