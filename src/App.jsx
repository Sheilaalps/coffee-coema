import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header";
import Home from "./pages/Home"; 
import Cardapio from "./pages/Cardapio"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header /> 
        <main className="main-content">
          <Routes>
            {/* O conteúdo da Home agora vive só dentro do componente <Home /> */}
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}