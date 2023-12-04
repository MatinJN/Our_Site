let card = document.querySelectorAll(`.cardAll`)
let cardbtn = document.querySelectorAll(`.cardbtn`)

function openCard() {
    let index = Array.from(card).indexOf(this.closest('.cardAll'));
    let currentElement = card[index];
    let txt = currentElement.querySelector(".txt")
    let img = currentElement.querySelector(".cardbtn img")
    if (currentElement.querySelector(".card").classList.contains('hidden')) {
        currentElement.querySelector(".card").classList.remove('hidden')
        txt.innerHTML = 'Daha az gör'
        img.classList.add('cevir')
        asdasd
    }
    else {
        currentElement.querySelector(".card").classList.add('hidden')
        txt.innerHTML = 'Daha çox gör'
        img.classList.remove('cevir')
    }
}

card.forEach(c => {
    c.querySelector('.card').addEventListener('click', openCard)
    c.querySelector(".cardbtn").addEventListener('click', openCard)
})
