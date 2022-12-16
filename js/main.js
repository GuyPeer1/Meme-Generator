const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function addMouseListeners() {
    // gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function onDown(ev) {
    let height = gElCanvas.height
    const pos = getEvPos(ev)
    console.log('pos.y', pos.y)
    if ((pos.y < height/4) || (pos.y > height/1.4 && pos.y < height-30) || (pos.y > height/2.3 && pos.y < height/1.8))
    renderMeme(pos.y)
    else (renderMeme())
}

function getEvPos(ev) {
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    if (TOUCH_EVS.includes(ev.type)) {
        console.log('ev:', ev)
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}