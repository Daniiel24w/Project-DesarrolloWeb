import React from 'react'
import background from "../../Images/background.png";


function Home() {
  const homeStyle = {
    container : {
      backgroundImage:`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },

    title: {
      color: "white",
      fontSize: "4rem",
      marginBottom: "1rem",
    },

    text: {
      color: "white",
      fontSize: "1.5rem",
      fontStyle: "italic",
      maxWidth: "800px",
    },
  }

  return (
      <div style={homeStyle.container} className='d-flex justify-content-center align-items-center flex-column'>
        <div className="container mb-5">
      	  <h1 style={homeStyle.title}>El Refugio de los Libros</h1>
        </div>
        <div className="container text-justify">

          <p style={homeStyle.text}>Nuestro objetivo es fomentar la lectura y el conocimiento, ofreciendo un espacio accesible y acogedor donde cada persona pueda descubrir, aprender y crecer; a través de libros físicos y recursos digitales, buscamos iluminar mentes, inspirar creatividad y acompañar a nuestros lectores en su camino al aprendizaje y desarrollo personal.</p>
        </div>
      </div>
  )
}

export default Home