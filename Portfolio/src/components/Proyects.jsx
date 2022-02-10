import React, {useState} from "react"
import Proyect from "./Proyect.jsx"
import "../css/Proyects.css"

export default function Proyects(){
    const [proyecto1, setProyecto1] = useState(false)
    const [proyecto2, setProyecto2] = useState(false)
    const [proyecto3, setProyecto3] = useState(false)

    return(
        <div className="containerPrincipalProyects">
        <h3>Proyectos</h3>
         <div className="containerProyects">
            
            <Proyect proyectNumberCss="one" setProyectNumber={setProyecto1} proyectNumber={proyecto1} titulo="World Guest Booking" descripcion="Proyecto integrador realizado en la carrera Certified Tech Developer (Usuario:grupo1@digital.com contraseña:1234567)" urlCode ="https://github.com/marsl27/ProyectoIntegradorDigitalHouse" url="https://suspicious-panini-9da862.netlify.app/"/>
             <Proyect proyectNumberCss="two" setProyectNumber={setProyecto2} proyectNumber={proyecto2} titulo="Superheroes" descripcion="Proyecto realizado para ingresar a la aceleración de Alkemy (Usuario:challenge@alkemy.org contraseña:react)" urlCode="https://github.com/marsl27/challengeAlkemy" url="https://marsl27.github.io/challengeAlkemy/"/>
             <Proyect proyectNumberCss="three" setProyectNumber={setProyecto3} proyectNumber={proyecto3} titulo="Usuarios random" descripcion="Proyecto realizado en la clase 17 de la carrera Certified Tech Developer" urlCode="https://github.com/marsl27/Front-end-II-clase-17" url="https://marsl27.github.io/Front-end-II-clase-17/"/>
      
        </div>
        </div>
    )
}