import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
// import Error from './pages/Error';
import APropos from './pages/A_Propos';
import Logement from './pages/Logement';
// Components
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
// Styles
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/A_propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
