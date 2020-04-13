const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const navItem = Array.from(document.querySelectorAll('.nav-list li'));
const navBox = document.querySelector('.nav__box');
const navLinks = document.querySelector('.nav-links');
const navBrand = document.querySelector('.nav-brand');
const works = document.querySelectorAll('.featured__work');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const headingSix = document.querySelector('.works .heading-6');

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
	if (hamburger.classList.contains('invert')) {
		[lineOne, lineTwo].forEach((item) => item.classList.add('black-fill'));
	} else {
		[lineOne, lineTwo].forEach((item) => item.classList.remove('black-fill'));
	}
});

const options = {
	threshold: 0.5,
};

const navHeaderArr = [nav, header];

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navHeaderArr.forEach((item) => item.classList.remove('black'));

			[navBrand, hamburger].forEach((item) => item.classList.remove('invert'));
		} else {
			navHeaderArr.forEach((item) => item.classList.add('black'));

			[navBrand, hamburger].forEach((item) => item.classList.add('invert'));
			entry.target.classList.add('appear');
			// appearOnScroll.unobserve(entry.target);
		}
	});
}, options);

works.forEach((work) => appearOnScroll.observe(work));
appearOnScroll.observe(headingSix);
