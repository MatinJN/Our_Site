            const x = document.querySelector('.x');
            const pop = document.querySelector('.pop');
            const stoppropa = document.querySelector('.stoppropa');
            const html = document.querySelector('html');
    
            Array.from(document.querySelectorAll('.cards > div')).forEach( item => {
                item.addEventListener('click', ac);
                item.classList.add('card');
            })
    
            stoppropa.addEventListener('click', e => { e.stopPropagation() });
    
            pop.addEventListener('click', bagla);
    
            x.addEventListener('click', bagla);
    
    
            function ac() {
                pop.classList.remove('hidden');
                pop.classList.add('flex');
                html.style.overflowY = 'hidden';
                OkuCarusel()
            }
    
            addEventListener('resize', OkuCarusel)
            addEventListener('resize', () => {
                // if (html.offsetWidth <= 1024) {
                //     if (html.offsetWidth <=)
                // }
                document.querySelector('.paragraph')
            })
    
            function OkuCarusel() {
                const carusel = document.querySelector('[data-type="carusel"]') // Carusel
                const main = document.querySelector('[data-type="main"]') // Top main box
                const bottom = document.querySelector('[data-type="bottom"]') // Bottom main box
                bottom.innerHTML = ''
                const slider = document.querySelector('[data-type="slider"]') // Bottom main box
                slider.innerHTML = ''
                const boxes = 3 // How many box in the bottom side
                let topImgHeight
                let bottomImgHeight
                let errorNum = 0
                let autoPos = 0
                let pos = 0
                let t
    //          Changable Zone
                const url = [ 'assets/board.jpg', 'assets/computer.jpg', 'assets/site3.jpg', 'assets/site4.jpg', 'assets/site5.jpg' ]
                const boxToBox = 300 // box to box scrolling with (ms)
                const autoScrolling = 3000 // box to box scrolling timeout with (ms)
                let w = 692
    
                if (html.offsetWidth <= 764) {
                    w = 412
                    if (html.offsetWidth <= 425) {
                        w = 270
                    }
                }
    
                const topHeight = 447
                const bottomHeight =  119
                const topGap = 4 // The gap of the top the between boxes with (px)
                const bottomGap = 4 // The gap of the top the between boxes with (px)
                const betweenGap = 20 // The gap of between top and bottom with (px)
                const bottomBorderRadius = 20 // The border radius of the bottom assets with (px)
                const topBorderRadius = 20 // The border radius of the bottom assets with (px)
                const timer = 3000
                const createShadow = document.createElement('div')
                const createMarginFirst = document.createElement('div')
                const createMarginLast = document.createElement('div')
                createMarginFirst.setAttribute('data-item', 'margin')
                createMarginLast.setAttribute('data-item', 'margin')
                createShadow.setAttribute('data-shadow', '')
    
                bottom.append(createShadow)
                bottom.append(createMarginFirst)
                url.forEach((item) => {
                    let newElement = document.createElement('div')
                    newImg = document.createElement('img')
                    newElement.setAttribute('data-item', 'bottom')
                    newImg.setAttribute('src', item)
                    newElement.append(newImg)
                    bottom.append(newElement)
                })
                bottom.append(createMarginLast)
                
    
                url.forEach((item) => {
                    let newElement = document.createElement('div')
                    newImg = document.createElement('img')
                    newElement.setAttribute('data-item', 'top')
                    newImg.setAttribute('src', item)
                    newElement.append(newImg)
    
                    slider.append(newElement)
                })
    
                const bottomItems = Array.from(document.querySelectorAll('[data-item="bottom"]')) // Bottom items
                const shadow = document.querySelector('[data-shadow]') // The shadow of the bottom box
                shadow.classList.add('shadow-okuCarusel')
                const margin = Array.from(document.querySelectorAll('[data-item="margin"]')) // Margins 
                const topItems = Array.from(document.querySelectorAll('[data-item="top"]')) // Bottom items
    
                carusel.style.gap = betweenGap + 'px'
                shadow.style.right = 0 + 'px'
                main.style.width = w + 'px'
                main.style.borderRadius = topBorderRadius + 'px'
                slider.style.gap = topGap + 'px'
                bottom.style.gap = bottomGap + 'px'
                bottom.style.borderRadius = bottomBorderRadius + 'px'
                bottom.style.width = w + 'px'
    
                const boxW = ((bottom.offsetWidth - ((boxes - 1) * bottomGap)) / boxes)
                
                bottom.addEventListener('scroll', scrolling)
                t = setInterval(scrolling, timer, 'auto')
    
                topItems.forEach((item) => {
                    const img = item.querySelector('img')
                    item.style.minHeight = topHeight + 'px'
                    item.style.maxHeight = topHeight + 'px'
                    img.style.minWidth = `${w}px`
                    img.style.maxWidth = `${w}px`
                    img.style.minHeight = topHeight + 'px'
                    img.style.maxHeight = topHeight + 'px'
                    img.style.objectFit = 'cover'
                    img.style.borderRadius = topBorderRadius + 'px'
                    topImgHeight = img.offsetHeight
                })
                bottomItems.forEach((item) => {
                    const img = item.querySelector('img')
                    img.style.minWidth = `${boxW}px`
                    img.style.maxHeight = bottomHeight + 'px'
                    img.style.minHeight = bottomHeight + 'px'
                    item.style.minHeight = bottomHeight + 'px'
                    item.style.maxHeight = bottomHeight + 'px'
                    img.style.objectFit = 'cover'
                    img.style.borderRadius = bottomBorderRadius + 'px'
                    item.classList.add('snap-always', 'snap-center') 
                    bottomImgHeight = img.offsetHeight
                })
                margin.forEach((item) => {
                    item.style.minWidth = `${boxW}px`
                    item.classList.add('snap-always', 'snap-center') 
                })
    
    
                function scrolling(auto) {
                    if (auto != 'auto') {
                        clearInterval(t)
                        bottom.style.scrollBehavior = null
                        if ( (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) && Math.trunc(bottom.scrollLeft) % 2 == 1 ) {
                        errorNum = 0.5
                        }
                        else if ( (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) && Math.trunc(bottom.scrollLeft) % 2 == 0 ) {
                            errorNum = -0.5
                        }
                        pos = (bottom.scrollLeft - Math.trunc(bottom.scrollLeft)) ? (bottom.scrollLeft * (((w + topGap ) / (boxW + bottomGap)) * -1)) + errorNum : bottom.scrollLeft * (((w + topGap ) / (boxW + bottomGap)) * -1)
                        slider.style.left = pos + 'px'
                        shadow.style.right = (bottom.scrollLeft * -1) + 'px'
                        autoPos = bottom.scrollLeft
                        t = setInterval(scrolling, timer, 'auto')
                    }
                    else {
    
                        bottom.style.scrollBehavior = 'smooth'
                        if (autoPos >= ((Array.from(document.querySelectorAll('[data-item="bottom"]')).length - 1) * boxW) - 4) {
                            autoPos = 0
                        }
                        else autoPos += boxW
                        bottom.scrollLeft = autoPos
    
                    }
                }
    
                // function IntervalAuto() {
                //     bottom.scrollTo(autoPos, 0)
                // }
    
                carusel.style.width = 100 + '%'
                main.style.width = w
                main.style.height = topImgHeight + 'px'
                slider.style.position = 'absolute'
                }
                function bagla() {
                    pop.classList.remove('flex');
                    pop.classList.add('hidden');
                    html.style.overflowY = 'inherit';
                }