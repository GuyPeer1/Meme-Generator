var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'cat'] },

];

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'first line',
            size: 40,
            align: 'center',
            color: 'yellow',
            height: 50
        },
        {
            txt: 'Second line',
            size: 40,
            align: 'center',
            color: 'blue',
            height: 300
        }
    ]

}

function getMeme() {
    return gMeme
}

function setImg(img) {
    let currMeme = gMeme
    currMeme.selectedImgId = img.id
    currMeme.lines[0].txt = ''
    currMeme.lines[1].txt = ''
    gMeme = currMeme
}

function onTextChange(text) {
    let currMeme = gMeme
    currMeme.lines[gCurrLinePicked].txt = text.value
    gMeme = currMeme
    renderMeme()
}

function onTextSubmit() {
    let currMeme = gMeme
    currMeme.lines.push({
        txt: '',
        size: 40,
        align: 'center',
        color: 'white',
        height: 300
    })
    gTextfPos = (gTextPos === 50) ? 300 : 150;
    gMeme = currMeme
    gCurrLinePicked++
    restorePlaceHolder()
}

function setLineColor(userColor) {
    let currMeme = gMeme
    currMeme.lines[gCurrLinePicked].color = userColor.value
    renderMeme()
}

function setFontSize(lowerOrBigger) {
    var diffrance = lowerOrBigger ? 1 : -1
    let currMeme = gMeme
    currMeme.lines[gCurrLinePicked].size += diffrance
    gMeme = currMeme
    renderMeme()
}

function onSwitchLine() {
    gCurrLinePicked = (gCurrLinePicked === 0) ? 1 : 0;
    gTextPos = (gTextPos === 50) ? 150 : 50;
}

function onSwitchAlign(userAlign) {
    currMeme = gMeme
    currMeme.lines.forEach(meme => {
        meme.align = userAlign
    })
    gMeme = currMeme
    renderMeme()
}

function onDeleteRow() {
    currMeme = gMeme
    currMeme.lines[gCurrLinePicked].txt = ''
    renderMeme()
    onSwitchLine()
}

function onMoveLine(upOrDown) {
    currMeme = gMeme
    let movement = (!upOrDown) ? 1 : -1
    let pos = currMeme.lines[gCurrLinePicked].height
    pos += movement
    currMeme.lines[gCurrLinePicked].height = pos
    renderMeme()
}