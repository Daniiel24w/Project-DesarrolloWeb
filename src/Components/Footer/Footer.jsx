import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const footerStyle = {
        container: {
            borderRight: "2px solid white",
            margin: "16px 0px",
        },
        footer: {
            backgroundColor: "#080F0F",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
        },
        title: {
            color: "white",
            fontSize: "1.5rem",
            marginBottom: "10px",
        },
        text: {
            color: "#A4BAB7",
            fontSize: "1rem",
            lineHeight: "1.5",
            padding: "0px 16px",
        },
        link: {
            textDecoration: "none", // Elimina el subrayado
            color: "#BEA57D", 
        },
        list: {
            listStyleType: "none",
            padding: 0,
        },
        Icons: {
            fontSize: "3rem",
            padding: "0 16px",
            color: "#BEA57D"
        },
    };

    return (
        <footer className="container-fluid py-4" style={footerStyle.footer}>
          <div className="row">
            {/* Empresa */}
            <div className="col-md-4 mb-3" style={footerStyle.container}>
              <h2 style={footerStyle.title}>El refugio de los libros</h2>
              <p style={footerStyle.text}>
                Más que libros, un refugio de imaginación donde cada página abre la puerta a nuevos mundos, ideas y sueños que esperan ser descubiertos.
              </p>
            </div>

            {/* Contáctanos */}
            <div className="col-md-4 mb-3" style={footerStyle.container}>
              <h2 style={footerStyle.title}>Contáctanos</h2>
              <ul style={footerStyle.list}>
                <li style={footerStyle.text}>
                  <b>Teléfono:</b> <Link style={footerStyle.link} to={"#"}>+123 456 789</Link>
                </li>
                <li style={footerStyle.text}>
                  <b>Email:</b> <Link style={footerStyle.link} to={"mailto:contacto@refugiolibros.com"}>contacto@refugiolibros.com</Link>
                </li>
                <li style={footerStyle.text}>
                  <b>Dirección:</b> <Link style={footerStyle.link} to={"https://maps.app.goo.gl/PmEAa5YiP2abJLdE8"}>Calle Imaginaria 123</Link>
                </li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div className="col-md-4 mb-3 text-center">
              <h2 style={footerStyle.title}>Redes Sociales</h2>
              <Link style={footerStyle.Icons} to={"#"}><i className="bi bi-whatsapp"></i></Link>
              <Link style={footerStyle.Icons} to={"#"}><i className="bi bi-facebook"></i></Link>
              <Link style={footerStyle.Icons} to={"#"}><i className="bi bi-instagram"></i></Link>
            </div>
          </div>
        </footer>
    );
}

export default Footer;