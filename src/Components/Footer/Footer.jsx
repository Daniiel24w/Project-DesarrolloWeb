import React from 'react'

function Footer() {
  return (
    <div>
        <section className="position-fixed bottom-0 start-0 end-0 d-flex flex-column bg-dark py-3 text-white justify-content-center  align-items-center">
            <div className="d-flex justify-content-between gap-5 align-items-start ">
                <div>
                    <h2>Nombre de empresa [Cambiar]</h2>
                    <p>Informacion poco relevante [Cambiar]</p>
                </div>
                <div>
                    <h2>Contacto</h2>
                    <ul className="text-decoration-none text-black ">
                        <li><a className="text-decoration-none"  href="/">+54-9-387-354968</a></li>
                        <li><a href="#"> example@example.com</a></li>
                        <li >Direccion cualquiera    </li>
                    </ul>
                </div>
                <div>
                    <h2>Links</h2>
                    <ul>
                        <li><a className="text-decoration-none text-black " href="/">Home</a></li>
                        <li><a className="text-decoration-none text-black " href="/products">Products</a></li>
                        <li><a className="text-decoration-none text-black " href="/categories">Categories</a></li>
                    </ul>
                </div>
            </div>
            <div >
                Todos los derecho reservados 2025
            </div>
        </section>
    </div>
  )
}

export default Footer
