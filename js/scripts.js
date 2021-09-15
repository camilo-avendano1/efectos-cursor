

// declaramos constante de el canvas y el contexto
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
//evento que ejecuta una funcion inmediata
window.addEventListener("mousemove",function(e){
//creacion de un root(dibujo) y su actualizacion
    const root = new Root(e.x, e.y);
    root.update();
})
