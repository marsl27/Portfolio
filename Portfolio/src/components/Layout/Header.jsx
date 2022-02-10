import {Link} from "react-router-dom"
import "../../css/Header.css"

export default function Footer() {
    return (
        <header className="header">
          <nav className="menu">
            <ul>
                <li><Link to= "/aboutme">Sobre mi</Link></li>
                <li><Link to="/proyects">Proyectos</Link></li>
                <li><Link to="/tecnologies">Tecnologias</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
        </header>
    )
}