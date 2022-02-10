import IconHtml from "../icons/html-5.png"
import IconCss from "../icons/css-3.png"
import IconJs from "../icons/js.png"
import IconReact from "../icons/react.png" 
import IconFigma from "../icons/figma.png"
import IconGit from "../icons/git.svg"
import IconIntellij from "../icons/Intellij.png"
import IconJava from "../icons/java.png"
import IconMySql from "../icons/mysql.png"
import IconNode from "../icons/nodejs.png"
import IconApi from "../icons/restApi.png"
import IconScrum from "../icons/scrum.png"
import IconVSC from "../icons/visual.png"
import "../css/Tecnologies.css"

export default function Tecnologies(){
 return(
     <div className="containerTecnologies">
     <h3>Tecnologias</h3>
     <div className="containerIcons">
        <img src={IconHtml} alt="icono html"/>
        <img src={IconCss} alt="icono css"/>
        <img src={IconJs} alt="icono js"/>
        <img src={IconReact} alt="icono react"/>
        <img src={IconJava} alt="icono java"/>
        <img src={IconMySql} alt="icono mysql"/>
        <img src={IconNode} alt="icono nodejs"/>
        <img src={IconScrum} alt="icono scrum"/>
        <img src={IconVSC} alt="icono visual studio code"/>
        <img src={IconApi} alt="icono rest api"/>
        <img src={IconFigma} alt="icono figma"/>
        <img src={IconGit} alt="icono git"/>
        <img src={IconIntellij} alt="icono intellij"/>
     </div>
     </div>
 )

}