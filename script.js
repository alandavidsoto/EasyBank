document.addEventListener("DOMContentLoaded",()=>{
    let sizeWidth = window.screen.availWidth;
    cabeceraMobile(sizeWidth)
})

const funcionalidad_Menu_Mobile = (boolean) => {
    const botonMenu = document.getElementById("menu")
    if (boolean){
        botonMenu.addEventListener("click",()=>{
            const barranav = document.querySelector(".barranav-mobile")
            barranav.classList.toggle("active")
            let test_class = barranav.attributes.class.textContent; 
            if (test_class.includes('active')) {
                botonMenu.innerHTML = `<img src="images/icon-close.svg" alt="close">`;
                document.body.style.overflowY = "hidden"
            } else {
                botonMenu.innerHTML = `<img src="images/icon-hamburger.svg" alt="close">`;
                document.body.style.overflowY = "initial"
            }
        })
    }
    
}

const cabeceraMobile = (breakPoint) => {
    const cabecera = document.querySelector(".cabecera")
    if(breakPoint < 800){
        cabecera.innerHTML = `
        <div class="logo">
            <img src="images/logo.svg" alt="logo">
        </div>
        <div id="menu">
            <img  src="images/icon-hamburger.svg" alt="menu">
        </div>
        `;
        funcionalidad_Menu_Mobile(true)
    } else {
        cabecera.innerHTML = `
        <div class="logo">
            <img src="images/logo.svg" alt="logo">
        </div>
        <nav class="barranav">
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            </ul>
        </nav>
        <div class="contenedor-boton">
            <button class="boton-reutilizable bg-gradient" >Request Invite</button>
        </div>
        `;
    }
}
let banderilla_resize = false;
window.addEventListener("resize",()=>{
    let sizeWidth = window.screen.availWidth;
    
    if (sizeWidth < 800){
        if(banderilla_resize == false){
            banderilla_resize = true
            cabeceraMobile(sizeWidth)
        }
    }
    else if(sizeWidth > 800){
        if(banderilla_resize == true){
            banderilla_resize = false
            cabeceraMobile(sizeWidth)
        }
    }
})
