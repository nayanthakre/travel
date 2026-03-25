import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HiddenGems from './components/HiddenGems';
import WhyGoOffbeat from './components/WhyGoOffbeat';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BottomNavBar from './components/BottomNavBar';
import Discover from './pages/Discover';
import Hampi from './pages/Hampi';
import Orchha from './pages/Orchha';
import Mandu from './pages/Mandu';

const HomePage = () => (
  <>
    <Hero />
    <HiddenGems />
    <WhyGoOffbeat />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/hampi" element={<Hampi />} />
            <Route path="/orchha" element={<Orchha />} />
            <Route path="/mandu" element={<Mandu />} />
          </Routes>
        </main>
        <Footer />
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;

