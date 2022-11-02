import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bieres from './components/Bieres';
import Biere from './components/Biere';
import About from './pages/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState([]);

  const getData = (params = { page: 1 }) => {
    const baseUrl = 'https://api.punkapi.com/v2/beers?per_page=80';
    // const request = '';
    let request = '';
    if (params)
      for (const param in params) {
        const value = params[param];
        request += '&' + param + '=' + value
      };

    axios
      .get(baseUrl + request)
      .then(res => {
        setData(data.concat(res.data));
        // if (res.data.length === 80) getData({ page: params.page + 1 });
      });
  }

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Bieres bieres={(data !== 0) ? data : []} />} />
        <Route path="/biere/:id" element={<Biere bieres={(data !== 0) ? data : []} />} />
        <Route path="/about" element={<About />} />

        {/* Erreur - Chemin Inconnu */}
        <Route path="*" element={<Bieres />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;