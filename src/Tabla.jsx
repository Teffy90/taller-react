import React from "react";

export function Tabla() {
    return (      
      <table class="table table-success table-striped">
      <thead>
      
      <h1>Tabla</h1>
      <p>A continuacion se van a solicitar los datos de algunos estudiates</p>
  

        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>isabella</td>
          <td>mora</td>
          <td>123456789</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Daniel</td>
          <td>Sanchez</td>
          <td>98765432</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Juan</td>
          <td>Perez</td>
          <td>87654389</td>
        </tr>
      </tbody>
    </table>
    )
}