import React, { useState } from 'react';
import { Error } from "./Error"

export const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState("")
    const [error, setError] = useState(false)

    const buscarImagenes = e => {
        e.preventDefault();

        //Validar
        if(termino.trim() === ""){
            setError(true);
            return;
        }

        setError(false)
        setBusqueda(termino)
    }

    return (
        <>
            <form className="form" onSubmit={buscarImagenes}>
                <input 
                    type="text"
                    className="form__text"
                    placeholder="Busca una imagen, ejemplo: futbol o café"
                    onChange={e => setTermino(e.target.value)}
                />
                <input 
                    type="submit"
                    className="form__button"
                    value="Buscar"
                />
            </form>
            {error ? <Error mensaje="Agrega un termino de busqueda"/> : null}
        </>
    )
}
