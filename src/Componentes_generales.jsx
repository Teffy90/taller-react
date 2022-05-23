import React from 'react';
import { Formulario } from './Formulario';
import { Tabla } from './Tabla';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Boton } from './Boton';


export function Aplicacion(){
    return(
        <React.Fragment>
            <Menu/>
            <Formulario/>
            <Tabla/>
            <Boton/>
            <Footer/>
            
            
        </React.Fragment>
    )
}