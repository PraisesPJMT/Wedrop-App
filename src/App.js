import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Continent from './components/Continent';

const App = () => (
  <>
    <Router>
      <Header />
      <main className="min-h-[94vh] bg-cornflower-blue">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:continent" element={<Continent />} />
        </Routes>
      </main>
    </Router>
  </>
);

export default App;
