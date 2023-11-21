const x = document.querySelector('.x');
const card = document.querySelectorAll('.card');
const pop = document.querySelector('.pop');
function ac() {
  pop.classList.remove('hidden');
  pop.classList.add('flex');
}
card.forEach((item) => {
  item.addEventListener('click', ac);
});

function bagla() {
  pop.classList.remove('flex');
  pop.classList.add('hidden');
  let opened = document.querySelector('.accordion.active-m');
  opened.classList.remove('active-m');
  opened.classList.remove('active');
}

x.addEventListener('click', bagla);