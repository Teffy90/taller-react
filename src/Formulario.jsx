import React from 'react';

export function Formulario() {
  return (
    <div class="container">
      <div class="abs-center">
    <form>
        <div>
        <h2>
          <br />
          Importante
        </h2>
        <p>Este formulario solicita nombre, apellido y correo para saber mas de ti</p>
        <br/>
            <label for="">Nombre</label>
            <input class="form-control" type="text" placeholder="Nombre" aria-label="nombre"/>
            <label for="">Apellido</label>
            <input class="form-control" type="text" placeholder="Apellido" aria-label="Apellido"/>
            <label for="exampleInputEmail">Correo</label>
            <input class="form-control" type="email" placeholder="Correo@gmail.com" aria-label="Correo"></input>
            <br />
            <button type="submit">Enviar</button>
        </div>
    </form>
    </div>
    <br/>
    <br/>
    </div>
  )
}
