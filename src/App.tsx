import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

// Import podstránok
import Homepage from "./components/pages/Homepage";
import Kurzy from "./components/pages/Kurzy";
import Blog from "./components/pages/Blog";
import Kontakt from "./components/pages/Kontakt";
import Onas from "./components/pages/Onas";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigácia */}
        <Navbar />

        {/* Obsah stránky */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Kurzy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Kontakt />} />
            <Route path="*" element={<Onas />} /> {/* 404 stránka */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;