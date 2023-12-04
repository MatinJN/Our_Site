const burgerIcon = document.querySelector('.burgerIcon');
const burgerMenu = document.querySelector('.burgerMenu');
const main = document.querySelector('main');
const show = document.querySelector('.show')
const vh = document.querySelector('vh')
const hide = Array.from(document.querySelectorAll('.hide'))
// console.log(hide);
const footer = document.querySelector('footer');
const scrolling = document.querySelector('[data-scrolling]')
// console.log(header);
burgerIcon.onclick = showMenu
 function showMenu() {
  console.log('sa');
  burgerMenu.style.display = 'block'
  main.classList.add('hidden');
  burgerIcon.setAttribute('src', 'assets/closeIcon.svg')
  show.style.display = 'block'
  burgerIcon.onclick = close
  hide.forEach((item) => {
    item.classList.add('hidden')
  })
  footer.classList.add('hidden');
  // console.log(header);
  header.style.minHeight = '100vh'
  // vh.classList.add('min-h-screen')
  document.body.classList.remove('overflow-x-hidden');
};
 function close() {
  hide.forEach((item) => {
    item.classList.remove('hidden')
  })
  show.style.display = 'none'
  burgerIcon.onclick = showMenu
  burgerIcon.setAttribute('src', 'assets/hamburger.svg')
  burgerMenu.style.display = 'none'
  burgerMenu.classList.add('opacity-0');
  main.classList.remove('hidden');
  footer.classList.remove('hidden');
  header.style.minHeight = ''
  document.body.classList.add('overflow-x-hidden');
};
console.log(html);
addEventListener('resize', () => {
  if (html.offsetWidth > 768) {
    close()
  }
})

scrolling.addEventListener('click', () => {
  html.style.scrollBehavior = 'smooth'
  html.scrollTop = html.offsetHeight
})

// Accordion

accordion('accordion');

function accordion(acc) {
  burgerIcon.setAttribute('src', 'assets/hamburger.svg')
  const accordions = document.querySelectorAll(`.${acc}`);
  accordions?.forEach((item) => {
    item.addEventListener('click', function () {
      let opened = document.querySelector(`.${acc}.active`);
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        opened?.classList.remove('active');
        this.classList.add('active');
      }
    });
  });
}

// Partnyor Ol
// toggle('elektron', 'furset');

// function toggle(target1, target2) {
//   const elektron = document.querySelector(`.${target1}`);
//   const furset = document.querySelector(`.${target2}`);
//   const elektronPage = document.querySelector(`.${target1}-page`);
//   const fursetPage = document.querySelector(`.${target2}-page`);

//   function target1Toggle() {
//     elektronPage.classList.add('d-none');
//     fursetPage.classList.remove('d-none');
//   }

//   function target2Toggle() {
//     elektronPage.classList.remove('d-none');
//     fursetPage.classList.add('d-none');
//   }

//   elektron.addEventListener('click', target2Toggle);
//   furset.addEventListener('click', target1Toggle);
// }
