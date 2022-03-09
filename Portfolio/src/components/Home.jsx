import React from "react"
import Perfil from "../images/Perfil.png"
import LinkedIn from "../icons/iconoLinkedIn.svg"
import GitHub from "../icons/iconoGithub.svg"
import Mail from "../icons/iconoEmail.png"
import WhatsApp from "../icons/iconsWhatsapp.svg"
import IconCv from "../icons/iconCv.png"
import "../css/Home.css"

export default function Home(){
    return(
        <div className="container">
            <img src={Perfil} alt="perfil"/>
            <h1>Mariel Cecilia Romeo</h1>
            <div className="containerSubtitle">
                <div className="subtitle">DESARROLLADORA WEB</div>
                <div className="subtitle"><span>FRONTEND</span></div>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/mariel-cecilia-romeo/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="icono de linkedIn"/></a>
                <a href="https://github.com/marsl27" target="_blank" rel="noreferrer"><img src={GitHub} alt="icono de github"/></a>
                <a href="mailto:marielceciliaromeo@hotmail.com"><img src={Mail} alt="icono de email"/></a>
                <a href="https://drive.google.com/file/d/1UIew_uP_2-5JEDveAFkxIdCYzEWTKXws/view?usp=sharing" target="_blank" rel="noreferrer"><img src={IconCv} alt="icono cv"/></a>
                <a href="https://wa.me/+5491166437671/" target="_blank" rel="noreferrer"><img src={WhatsApp} alt="icono whatsapp"/></a>
            </div>
        </div>
    )
}