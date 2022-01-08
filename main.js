const img = document.querySelector('.planet-img')
const mars = document.getElementById('mars')
const moon = document.getElementById('moon')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')
const planetas = document.getElementById('destination')
const nombrePlaneta = document.getElementById('name')
const distancia = document.getElementById('distancia')
const tiempo = document.getElementById('tiempo')

const cambiarImagen = (src, nombre, Distancia, tiempo01) => {
    img.innerHTML = `<img src= ${src}>`
    nombrePlaneta.innerHTML = nombre
    distancia.innerHTML = Distancia
    tiempo.innerHTML = tiempo01
}

moon.addEventListener("click", (e) => {
    cambiarImagen(`./archivos/destination/image-moon.webp`, "moon", "384,400 KM", "5,5 DAYS")
    img.classList.remove("mars")
    img.classList.remove("europa")
    img.classList.remove("titan")
    img.classList.add("moon")

})
mars.addEventListener("click", (e) => {
    cambiarImagen(`./archivos/destination/image-mars.webp`, "mars", "225,000 KM", "9 MONTHS")
    img.classList.remove("moon")
    img.classList.remove("europa")
    img.classList.remove("titan")
    img.classList.add("mars")
})
europa.addEventListener("click", (e) => {
    cambiarImagen(`./archivos/destination/image-europa.webp`, "Europa", "500,000 KM", "1 YEAR")
    img.classList.remove("moon")
    img.classList.remove("mars")
    img.classList.remove("titan")
    img.classList.add("europa")
})
titan.addEventListener("click", (e) => {
    cambiarImagen(`./archivos/destination/image-titan.webp`, "Titan", "800,000 KM", "1,5 YEARS")
    img.classList.remove("moon")
    img.classList.remove("europa")
    img.classList.remove("mars")
    img.classList.add("titan")
})

//crew

const imgMember = document.querySelector('.imagen')
const opcion1 = document.getElementById('opcion1')
const opcion2 = document.getElementById('opcion2')
const opcion3 = document.getElementById('opcion3')
const opcion4 = document.getElementById('opcion4')
const nombre = document.getElementById('nombreCrew')
const informacion = document.querySelector(".informacion")
opcion1.classList.add("click")
const cambiarImagenCrew = (src, nombre01) => {
    imgMember.innerHTML = `<img src=${src}>`
    nombre.innerHTML = nombre01
}

opcion1.addEventListener('click', (e) => {
    cambiarImagenCrew(`./archivos/crew/image-anousheh-ansari.webp`, "anousheh ansari")
    informacion.classList.add("informacion1")
    informacion.classList.remove("informacion2")
    informacion.classList.remove("informacion3")
    informacion.classList.remove("informacion4")
    cambioColor(opcion1, opcion4, opcion2, opcion3)

})
opcion2.addEventListener('click', (e) => {
    cambiarImagenCrew(`./archivos/crew/image-douglas-hurley.webp`, "HURLEY DOUGLAS")
    informacion.classList.add("informacion2")
    informacion.classList.remove("informacion1")
    informacion.classList.remove("informacion3")
    informacion.classList.remove("informacion4")
    cambioColor(opcion2, opcion4, opcion1, opcion3)

})

opcion3.addEventListener('click', (e) => {
    cambiarImagenCrew(`./archivos/crew/image-mark-shuttleworth.webp`, "mark- huttleworth")
    informacion.classList.add("informacion3")
    informacion.classList.remove("informacion2")
    informacion.classList.remove("informacion1")
    informacion.classList.remove("informacion4")
    cambioColor(opcion3, opcion1, opcion2, opcion4)

})
opcion4.addEventListener('click', (e) => {
    cambiarImagenCrew(`./archivos/crew/image-victor-glover.webp`, "victor glover")
    informacion.classList.add("informacion4")
    informacion.classList.remove("informacion2")
    informacion.classList.remove("informacion3")
    informacion.classList.remove("informacion1")
    cambioColor(opcion4, opcion1, opcion2, opcion3)
})
const cambioColor = (variable1, variable2, variable3, variable4) => {
    variable1.classList.add("click")
    variable2.classList.remove("click")
    variable3.classList.remove("click")
    variable4.classList.remove("click")
}

const technoopcion1 = document.getElementById('opcion1_technology')
const technoopcion2 = document.getElementById('opcion2_technology')
const technoopcion3 = document.getElementById('opcion3_technology')
const technoTitle = document.getElementById('techno__titulo')
const imagen = document.querySelector('.imagen__opciones')

const cambiarColorTechno = (variable1, variable2, variable3) => {
    variable1.classList.add("click")
    variable2.classList.remove("click")
    variable3.classList.remove("click")
}
const cambiarImagentecnologia = (src01, nombre02) => {
    imagen.innerHTML = `<img src=${src01}>`
    technoTitle.innerHTML = nombre02
}
technoopcion1.addEventListener('click', (e) => {
    cambiarColorTechno(technoopcion1, technoopcion2, technoopcion3)
    cambiarImagentecnologia(`./archivos/technology/image-launch-vehicle-portrait.jpg`, "LAUNCH VEHICLE")

})
technoopcion2.addEventListener('click', (e) => {
    cambiarColorTechno(technoopcion2, technoopcion1, technoopcion3)
    cambiarImagentecnologia(`./archivos/technology/image-space-capsule-portrait.jpg`, "SPACE CAPSULE")

})
technoopcion3.addEventListener('click', (e) => {
    cambiarColorTechno(technoopcion3, technoopcion2, technoopcion1)
    cambiarImagentecnologia("./archivos/technology/image-spaceport-portrait.jpg", "SPACEPORT")
})