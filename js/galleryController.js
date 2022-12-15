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
        lines: [
            {
                txt: 'k',
                size: 40,
                align: 'left',
                color: 'white',
                height: 50
            }
        ]
    }
    gMeme = currMeme
    gTextPos = 50
    renderMeme()
    //show editor & hide the gallery
    document.querySelector('.editor').style.display ='block'
    document.querySelector('.main-content').style.display ='none'

}
