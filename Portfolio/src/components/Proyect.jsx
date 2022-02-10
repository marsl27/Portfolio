import React from "react"
import "../css/Proyects.css"

export default function Proyect({proyectNumberCss, setProyectNumber, proyectNumber, titulo, descripcion, urlCode, url}){
    return(<div className={`containerProyect ${proyectNumberCss}`} onMouseEnter={() => setProyectNumber(true)}
            onMouseLeave={() => setProyectNumber(false)}>
                <div className={!proyectNumber? "hide" : "textProyect"}>
                    <h3>{`${titulo}`}</h3>
                    <p>{`${descripcion}`}</p>
                    <div className="proyectButtons">
                        <button><a href={`${urlCode}`} target="_blank" rel="noreferrer">
                        Code
                        </a></button>
                        <button><a href={`${url}`} target="_blank" rel="noreferrer">
                        Deploy
                        </a></button>
                    </div>
                </div>
            </div>)
}