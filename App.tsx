import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import Home from './pages/Home';
import About from './pages/About';
import OurPrograms from './pages/OurPrograms';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-brand-gray-light min-h-screen flex flex-col font-sans text-brand-gray-dark">
        <Header onDonateClick={() => setIsModalOpen(true)} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home onDonateClick={() => setIsModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-programs" element={<OurPrograms />} />
            <Route path="/get-involved" element={<GetInvolved onDonateClick={() => setIsModalOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </HashRouter>
  );
}

export default App;