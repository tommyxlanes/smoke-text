const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

const letters = document.querySelectorAll('span');
for (let i = 0; i < letters.length; i++) {
  letters[i].setAttribute(`data-id`, i);
  letters[i].addEventListener('mouseover', () => {
    letters[i].classList.add(`active`);
  });
}
// gsap.registerPlugin(ScrollTrigger);

// const splitTypes = document.querySelector('.text');
// const tx = new SplitType(splitTypes, { types: 'chars' });

// console.log(tx.chars);

// tx.chars.forEach((element) => {
//   console.log(element.char);
// });

// gsap.from('.box', {
//   opacity: 0,
//   x: 400,
//   scrollTrigger: {
//     trigger: '.box',
//     scrub: true,
//     markers: true,
//   },
// });

console.log(document.querySelector('.text-div').offsetHeight);

gsap.from(tx.chars, {
  scrollTrigger: {
    trigger: '.text',
    start: 'top 10%',
    end: () => `+=${document.querySelector('.text-div').offsetHeight}`,
    toggleClass: 'smoke-active',
    scrub: true,
    markers: true,
  },
});
