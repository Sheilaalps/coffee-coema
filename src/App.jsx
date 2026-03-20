import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Hero from './componentes/Hero'
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className="main">
          <Hero />
          {/* depois vem outras seções */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
