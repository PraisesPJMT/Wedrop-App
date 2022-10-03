import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <>
    <Router>
      <Header />
    </Router>
  </>
);

export default App;
