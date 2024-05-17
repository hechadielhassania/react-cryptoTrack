// src/CryptoPrices.tsx
import React, { useEffect, useState } from 'react';
import CryptoModal from './CryptoModal';

interface CryptoPrice {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}

const CryptoPrices: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCoin, setSelectedCoin] = useState<CryptoPrice | null>(null);
  const [modalShow, setModalShow] = useState<boolean>(false);

  const fetchPrices = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      const data = await response.json();
      setPrices(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRowClick = (coin: CryptoPrice) => {
    setSelectedCoin(coin);
    setModalShow(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="title-wrapper">
        <h2 className="h2 section-title">Market Update</h2>
        <a href="#" className="btn-link">See All Coins</a>
      </div>
      <table className="table table-striped table-hover table-borderless">
        <thead>
          <tr>
            <th></th>
            <th>Cryptocurrency</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>24h %</th>
          </tr>
        </thead>
        <tbody id="crypto-list">
          {prices.map((coin) => (
            <tr key={coin.id} onClick={() => handleRowClick(coin)} style={{ cursor: 'pointer' }}>
              <td><img src={coin.image} alt={coin.name} style={{ width: '50px', height: 'auto' }} /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol.toUpperCase()}</td>
              <td>{coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CryptoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        coin={selectedCoin}
      />
    </div>
  );
};

export default CryptoPrices;
