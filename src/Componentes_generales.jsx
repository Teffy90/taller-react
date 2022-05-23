import React from 'react';
import { Formulario } from './Formulario';
import { Tabla } from './Tabla';
import { Menu } from './Menu';
import { Footer } from './Footer';


export function Aplicacion(){
    return(
        <React.Fragment>
            <Menu/>
            <Formulario/>
            <Tabla/>
            <Footer/>
            
        </React.Fragment>
    )
}