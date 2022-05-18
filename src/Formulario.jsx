import React from 'react';

export function Formulario() {
  return (
    <div class="container">
      <div class="abs-center">
    <form>
        <div>
        <h2>
          <br />
          <strong>Importante:</strong> Este formulario solicita nombre, apellido y correo para saber mas de ti
        </h2>
        <br />
            <label for="">Nombre</label>
            <input class="form-control form-control-lg" type="text" placeholder="Nombre" aria-label="nombre"/>
            <label for="">Apellido</label>
            <input class="form-control" type="text" placeholder="Apellido" aria-label="Apellido"/>
            <label for="exampleInputEmail">Correo</label>
            <input class="form-control form-control-sm" type="email" placeholder="Correo@gmail.com" aria-label="Correo"></input>
            <br />
            <button type="submit">Enviar</button>
        </div>
    </form>
    </div>
    </div>
  )
}
