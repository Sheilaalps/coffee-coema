import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"; 
import Carrousel from "./components/Carrousel.jsx";
import Home from "./pages/Home.jsx"; 
import Cardapio from "./pages/Cardapio.jsx"; 
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Map from "./components/Mapa.jsx"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* O Header é fixo em todas as páginas */}
        <Header /> 

        <main className="main-content">
          <Routes>
            {/* O Hero agora deve estar dentro do componente <Home /> */}
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/localização" element={<Map />} />
            <Route path="/about" element={<About />} />   
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* O Footer (about | contact) aparece em todas as páginas automaticamente */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;