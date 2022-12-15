let gElCanvas
let gCtx
let gTextPos = 50
// let gCurrLinePicked = 0

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
    addMouseListeners()
}

function renderMeme(y) {
    const currMeme = getMeme()
    const elImg = new Image()
    elImg.src = 'img/' + currMeme.selectedImgId + '.jpg';
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        if (y) highLightText(y)
        currMeme.lines.forEach(line => {
            drawText(line)
        })
    }
}

function drawText(line) {
    const { txt: text, color: color, size: size, align: align, height: height } = line
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color || white
    gCtx.font = size + 'px impact'
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, gElCanvas.width / 2, height)
    gCtx.strokeText(text, gElCanvas.width / 2, height)
}


function highLightText(y) {
    let startY
    let height = gElCanvas.height
    // if (y < 70) {
    //     startY = 10
    //     y = 90
    // }
    // else {
    //     startY = 260
    //     y = 320
    // }
    switch (true) {
        case y < height / 4:
            startY = 10;
            y = 90;
            break
        case y < height / 1.8:
            startY = 110;
            y = 120;
            break
            default: 
            startY = 260;
            y = 320;
            break
    }
    gCtx.beginPath()
    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, startY, gElCanvas.width, y)
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(0, startY, gElCanvas.width, y)
}

function restorePlaceHolder() {
    document.getElementsByName('meme-text')[0].placeholder = 'meme text comes here';
}