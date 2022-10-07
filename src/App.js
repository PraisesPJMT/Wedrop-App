import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Continent from './components/Continent';
import Country from './components/Country';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';
import FailedPage from './pages/FailedPage';

const App = () => (
  <>
    <Router>
      <Header />
      <main className="min-h-[94vh] bg-cornflower-blue">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:continent" element={<Continent />} />
          <Route path="/:continent/:country" element={<Country />} />
          <Route path="/:continent/:country/:city" element={<CityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/invalid" element={<FailedPage />} />
        </Routes>
      </main>
    </Router>
  </>
);

export default App;
