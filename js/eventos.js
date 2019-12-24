const gallery = [
    "../img/galeria/soy_deforestation.jpg",
    "../img/galeria/jesus.jpg",
    "../img/galeria/stop_nucler.jpg",
    "../img/galeria/stop_shell.jpg",
    "../img/galeria/eiffel_tower.jpg"
]
const galleryElement = $('#curr-img')
let currPos = 0;
const timing = 5000

const leftBtn = $('#navigate-left')
const rightBtn = $('#navigate-right')

createBottomNav()
setNewGalleryImage(galleryElement, currPos)

setInterval(()=>{
    currPos++
    setNewGalleryImage(galleryElement, currPos)
}, timing)

leftBtn.click(function(){
    if(currPos > 0)
        currPos--
    else
        currPos = gallery.length-1
    setNewGalleryImage(galleryElement, currPos)
})

rightBtn.click(function(){
    if(currPos < gallery.length-1)
        currPos++
    else
        currPos = 0
    setNewGalleryImage(galleryElement, currPos)
})

function setNewGalleryImage(galleryElement, index){
    galleryElement.attr('src', gallery[index])
}

function createBottomNav(){
    for(i = 0; i < gallery.length; i++){
        $("#bottom-nav").append(`
            <div style="width: 10px; height: 10px;
            background-color: #999; border-radius: 100%;
            margin: 5px 2px"></div>
        `)
    }
}