import React from 'react'

interface Persona {
    nombreCompleto: String;
    edad: number;
    direccion: Direccion
}

interface Direccion {
     pais: String,
        casaNo: number
}


export const ObjetosLiterales = () => {

const persona: Persona = {
    nombreCompleto: 'Armando',
    edad: 34,
    direccion: {
        pais: 'Paraguay',
        casaNo: 9999
    }
}





  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify( persona, null, 2)}
            </pre>
        </code>
    
    
    
    </>
  )
}
