import './App.css'
// src/App.tsx
import React from 'react';
import CryptoPrices from './component/CryptoPrices';
import Header from './component/Header';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CryptoPrices />
      <Footer />
    </div>
  );
};

export default App;
