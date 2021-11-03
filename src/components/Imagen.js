import React from 'react'

export const Imagen = ({imagen}) => {

    //Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views} = imagen;
    
    return (
        <div className="imagenBusqueda">
            <img 
                src={previewURL}
                alt={tags}
            />
            <div className="texto">
                <p>{likes} Me gusta</p>
                <p>{views} Vista</p>
            </div>
            <a 
                href={largeImageURL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-img"
            >Ver imagen</a>
        </div>
    )
}
