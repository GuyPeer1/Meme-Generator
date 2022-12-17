function renderGallery() {
    var gallery = document.querySelector('.gallery')
    var strHTML = ''
    gImgs.forEach(img => {
        let id = img.id
        strHTML += `<img id="${id}" onclick="onImgSelect(this)" src="img/${id}.jpg"/>`
    })
    gallery.innerHTML = strHTML
}

function onImgSelect(img) {
    setImg(img)
    let currMeme = gMeme
    currMeme = {
        selectedImgId: img.id,
        selectedLineIdx: 0,
        font: 'impact',
        lines: [
            {
                txt: '',
                size: 40,
                align: 'center',
                color: 'white',
                stroke: 'black',
                height: 50
            }
        ]
    }
    gMeme = currMeme
    gTextPos = 50
    renderMeme()
    //show editor & hide most of the main-content
    document.querySelector('.editor').style.left ='0'
    document.querySelector('.editor').style.width ='100vw'
    document.querySelector('.search-area').style.display = 'none'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.main-footer').style.display = 'none'
    document.querySelector('.buttom-fotter').style.marginTop = '28.5em'
    document.querySelector('.buttom-fotter').style.width = '100vw'

}

