import './App.css';
import { Route, Routes } from 'react-router-dom';
// Import de los componentes
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Import de las paginas
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import Contact from './Pages/Contact/Contact';


  function App() {
    return (
      <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/books' element={<Books />} /> 
            <Route path='/contact' element={<Contact />} /> 

          </Routes>

          <Footer />
      </div>

    );
  }

  export default App;
