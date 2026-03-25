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

const HomePage = () => (
  <>
    <Hero />
//...
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/hampi" element={<Hampi />} />
          </Routes>
        </main>
        <Footer />
//...
