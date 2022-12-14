let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()
    renderGallery()
    
}

function renderMeme(color = 'black', fontSize = '30px') {
    let currMeme = getMeme()
    const elImg = new Image() 
    elImg.src = 'img/' + currMeme.selectedImgId + '.jpg';
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(currMeme)
    }
}

//Called from renderMeme, draw the user text on the pic
function drawText(currMeme) {
    var text = currMeme.lines[0].txt
    var color = currMeme.lines[0].color
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font =  '39px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, gElCanvas.width / 2, 50) 
    gCtx.strokeText(text, gElCanvas.width / 2, 50) 
}

