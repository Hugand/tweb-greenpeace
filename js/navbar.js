initNavbar() // IMPORTANTE: Executar esta funcao no início do codigo para os event listeners funcionarem
initFooter()

const navbar = document.getElementById("navbar")
const toggleMenuBtn = navbar.children[1]
const menuItems = navbar.children[2]
let menuItemsState = false
let quemSomosSubmenuState = false
const toggleQuemSomos = document.getElementById("toggle-quem-somos")

console.log($("html").width())


if($("html").width() >= 740){
    toggleQuemSomos.parentElement.parentElement.addEventListener('mouseover', ()=>{
    
        const submenu = toggleQuemSomos.parentElement.nextElementSibling
        submenu.style.transform = "scaleY(1)"
    })
    
    toggleQuemSomos.parentElement.parentElement.addEventListener('mouseout', ()=>{
        const submenu = toggleQuemSomos.parentElement.nextElementSibling
        submenu.style.transform = "scaleY(0)"
    })
}


toggleMenuBtn.addEventListener('click', ()=>{
    if(menuItemsState)
        menuItems.style.transform = "scaleY(0)"
    else
        menuItems.style.transform = "scaleY(1)"
    menuItemsState = !menuItemsState
})


toggleQuemSomos.addEventListener('click', ()=>{
    const submenu = toggleQuemSomos.parentElement.nextElementSibling
    if(quemSomosSubmenuState)
        submenu.style.transform = "scaleX(0)"
    else
        submenu.style.transform = "scaleX(1)"
        quemSomosSubmenuState = !quemSomosSubmenuState
})

// Gera o código HTML da navbar e insere-o na mesma
function initNavbar(){
    $('#navbar').html(`
        <img class="logo" src="img/greenpeace_logo.png" />
        <button ><i class="fa fa-bars"></i></button>
        <ul class="flex-display">
            <li class="sub-item">
                <div>
                    <button id="toggle-quem-somos">
                        <i class="fa fa-left">&#xf104;</i>
                    </button>
                    <a href="quem-somos.html">Quem somos</a>
                </div>

                <ul class="submenu">
                    <li><a href="juntar-equipa.html">Inscrever na equipa</a></li>
                    <li><a href="contactos.html">Contactos</a></li>
                </ul>
            </li>
            <li><a href="o-que-fazemos.html">O que fazemos</a></li>
            <li><a href="eventos.html">Eventos</a></li>
            <li><a href="#">Recursos</a></li>
        </ul>
    `)
}

function initFooter(){
    $('#footer').html(`
        <p id="navs">
            <a href="quem-somos.html">Quem somos?</a> / <a href="o-que-fazemos.html">O que fazemos?</a> / <a href="eventos.html">Eventos</a> / <a href="#">Recursos</a>
        </p>
        <div id="info">
            <img src="img/greenpeace_logo.png"/>
            <p>
                Hugo Gomes a2019136085<br>
                João Carvalho a2019131769
            </p>
        </div>
    `)
}