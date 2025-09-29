import React from 'react'
import logo from "../../Images/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
    // Seccion de estilos del Navbar
    const navbarStyle = {
        navbar: {
            backgroundColor: "#080F0F",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        link: {
            color: "#BEA57D",
            fontSize: "20px",
        }
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={navbarStyle.navbar}>
            <div className="container-fluid ">
                
                {/* Parte del logo del navbar a la derecha */}
                <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="Logo" width={75} />
                </Link>

                {/* Parte del boton hamburguesa para pantallas responsivas */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Parte de los enlaces del navbar a la izquierda */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item m-3">
                            <Link className="nav-link" to={"/"} style={navbarStyle.link}>Inicio</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to={"/books"} style={navbarStyle.link}>Libros</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to={"/contact"} style={navbarStyle.link}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
