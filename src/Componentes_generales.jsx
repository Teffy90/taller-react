import React from 'react';
import { Formulario } from './Formulario';
import { Tabla } from './Tabla';
import { Menu } from './Menu';


export function Aplicacion(){
    return(
        <React.Fragment>
            <Menu/>
            <Formulario/>
            <Tabla/>
            
        </React.Fragment>
    )
}