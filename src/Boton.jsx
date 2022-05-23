import React from 'react';

export function Boton() {
    const pulsar= ()=>{
        alert("Gracias por púlsarme")
    }
  return (
    <div class="container text-center">   
        <button type="button" class="btn btn-outline-success" onClick={()=>{pulsar()}}>
            ¡Púlsame!
        </button>
    <br/>
    <br/>
    </div>
  )
}
