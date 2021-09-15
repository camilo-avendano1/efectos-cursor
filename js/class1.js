class Root {

// propiedades del dibujo a realizar,ubicacion, velocidad, tamaño
    constructor(x,y){
        this.x = x;  //posicion del mouse en x
        this.y = y;  //pisicion del mouseen y
        this.speedX = Math.random() * 4 - 1; // velocidad a la que se dispersa en x
        this.speedY = Math.random() * 4 - 1; // velocidad a la que se dispersa en y
        this.maxSize = Math.random() * 7 + 2; //tamañno maximo
        this.size = Math.random() * 0.1; //tamaño inicial
        this.angle = Math.random() * 6.3;
    }
//actualizacion poara dibujar 
    update() {
// la posicion x y y se les declara la posicion que tienenmas la velocidad de generacion del dibujo
        this.x += this.speedX - Math.sin(this.angle);
        this.y += this.speedY; 
        this.size += 0.1;  // tamño en cuanto aumenta el tamaño inicial
        this.angle += 0.6; // vamos cambiando el angulo pa que sea mas dinamico cuando dibuje la animacion
// condicional para cuando dibujar cuando eltamño esmenoralmaximo posible
        if (this.size < this.maxSize){
//comenzamos a dibujar N
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
            ctx.fillStyle = "hsl(180,100%,60%)"
            ctx.fill();

            requestAnimationFrame(this.update.bind(this)) //funcion paraanimar 
            // el update es para no olvidarlas caracteristicas de la posiicion en x y y
    }



}
}