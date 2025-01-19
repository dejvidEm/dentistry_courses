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
import KurzDetail from "./components/pages/CoursePage"; // Import stránky o kurze
import Banner from "./components/ui/Banner";

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
            <Route path="/kurzy" element={<Kurzy />} />
            <Route path="/kurzy/:id" element={<KurzDetail />} /> {/* Dynamická trasa */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Kontakt />} />
            <Route path="*" element={<Onas />} /> {/* 404 stránka */}
          </Routes>
        </main>

        {/* Footer */}
        <Banner />
        <Footer />
      </div>
    </Router>
  );
};

export default App;