function renderGallery() {
    var gallery = document.querySelector('.gallery')
    var strHTML = ''
    gImgs.forEach(img => {
        let id = img.id
        strHTML += `<img id="${id}" class="gal-img" onclick="onImgSelect(this)" src="img/${id}.jpg"/>`
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
    document.querySelector('.editor').style.display ='block'
    document.querySelector('.grid-container').style.display = 'none'
    document.querySelector('.main-footer').style.display = 'none'
}

