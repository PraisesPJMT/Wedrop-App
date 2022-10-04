import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

const App = () => (
  <>
    <Router>
      <Header />
      <main className="min-h-[94vh] bg-cornflower-blue">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  </>
);

export default App;
