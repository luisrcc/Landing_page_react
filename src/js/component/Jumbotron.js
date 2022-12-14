import React from "react";
const data ={
    titulo:"A Warm Welcome!",
    contenido:"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking",
    boton:"Call to action!"
}
const Jumbotron =() =>{
    return(
       <div class="container">
        <div class="container-fluid">
        <h1 class="display-5 fw-bold">{data.titulo}</h1>
        <p class="col-md-8 fs-4">{data.contenido}</p><button class="btn btn-primary btn-lg mb-5" type="button">{data.boton}</button>
        </div>
        </div>

    )
}

export default Jumbotron