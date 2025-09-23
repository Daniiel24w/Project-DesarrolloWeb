import React from 'react'
import Logo from "../../Images/Logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid ">
                    <img src={Logo} alt="Logo" width={75} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <Link class="text-white nav-link" to={"/"}>Inicio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="text-white nav-link" to={"/books"}>Libros</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="text-white nav-link" to={"/contact"}>Contacto</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
