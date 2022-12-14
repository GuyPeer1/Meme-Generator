function renderGallery() {
    var gallery = document.querySelector('.gallery')
    var id = 'img/1.jpg'
    var id2 = 'img/2.jpg'
    gallery.innerHTML = `<img id="1" onclick="onImgSelect(this)" src="` + id +`"/>`
    gallery.innerHTML += `<img id="2" onclick="onImgSelect(this)" src="` + id2 +`"/>`
}

function onImgSelect(img){
    setImg(img) 
    renderMeme() 
}
