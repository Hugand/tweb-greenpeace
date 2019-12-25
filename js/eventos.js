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
const mobileLeftBtn = $('#navigate-left-mobile')
const mobileRightBtn = $('#navigate-right-mobile')

let navElements = createBottomNav()
console.log(navElements)
setNewGalleryImage(galleryElement, currPos)
setInterval(()=>{
    navigateRight()
}, timing)

leftBtn.click(function(){
    navigateLeft()
})

rightBtn.click(function(){
    navigateRight()
})

mobileLeftBtn.click(function(){
    navigateLeft()
})

mobileRightBtn.click(function(){
    navigateRight()
})

function navigateLeft(){
    navElements[currPos].classList.remove("selected")
    if(currPos > 0)
        currPos--
    else
        currPos = gallery.length-1
    navElements[currPos].classList.add("selected")
    setNewGalleryImage(galleryElement, currPos)
}

function navigateRight(){
    navElements[currPos].classList.remove("selected")
    if(currPos < gallery.length-1)
        currPos++
    else
        currPos = 0
    navElements[currPos].classList.add("selected")
    setNewGalleryImage(galleryElement, currPos)
}

function setNewGalleryImage(galleryElement, index){
    galleryElement.animate({
        opacity: 0
    }, ()=>{
        galleryElement.attr('src', gallery[index])
        galleryElement.animate({
            opacity: 1
        })
    })
}

function createBottomNav(){
    for(let i = 0; i < gallery.length; i++){
        $("#bottom-nav").append(`
            <div `+((i == 0) ? `class="selected"` : "")+`></div>
        `)
        $($("#bottom-nav").children()[i]).click(function(){
            $("#bottom-nav").children()[currPos].classList.remove("selected")
            currPos = i
            $("#bottom-nav").children()[currPos].classList.add("selected")
            setNewGalleryImage(galleryElement, currPos)
        })
    }
    return $('#bottom-nav').children()
}
