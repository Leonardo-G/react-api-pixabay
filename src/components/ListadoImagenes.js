import React from 'react'
import { Imagen } from './Imagen'

export const ListadoImagenes = ({imagenes}) => {
    console.log(imagenes)
    return (
        <div className="gridImg">
            {imagenes.map( imagen => (
                <Imagen key={imagen.id} imagen={imagen}/>
            ))}
        </div>
    )
}
