accordion('accordion');
function accordion(acc) {
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