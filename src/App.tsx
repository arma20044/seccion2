import React from 'react'
import { Contador } from './components/Contador';
import { Funciones } from './typescript/Funciones';
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { TiposBasicos } from './typescript/TiposBasicos';
import { ContadorConHook } from './components/ContadorConHook';
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formulario } from './components/Formulario';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS -React</h1>  
      <hr></hr>
      <TiposBasicos/>
      <ObjetosLiterales/>
      <Funciones/> 
      <Contador/>
      <ContadorConHook />
    <Login/>
    <Usuarios/>
    <Formulario/>
    </div>
  )
}

export default App;