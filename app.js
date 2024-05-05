// const text = document.querySelector('.text');
// text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

// const letters = document.querySelectorAll('span');
// for (let i = 0; i < letters.length; i++) {
//   letters[i].setAttribute(`data-id`, i);
//   letters[i].addEventListener('mouseover', () => {
//     letters[i].classList.add(`active`);
//   });
// }

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelector('.text');
const tx = new SplitType(splitTypes, { types: 'chars' });

console.log(tx.chars);
const tl = tx.chars.forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 30%',
      scrub: true,
      markers: true,
      toggleClass: 'active',
    },
    stagger: 0.25,
  });
});
