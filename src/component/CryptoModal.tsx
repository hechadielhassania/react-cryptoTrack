// src/CryptoModal.tsx
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface CryptoModalProps {
  show: boolean;
  onHide: () => void;
  coin: any;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ show, onHide, coin }) => {
  if (!coin) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{coin.name} Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={coin.image} alt={coin.name} style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
        <div className="text-left">
          <p><strong>Symbol:</strong> {coin.symbol.toUpperCase()}</p>
          <p><strong>Current Price:</strong> {coin.current_price}</p>
          <p><strong>Market Cap:</strong> {coin.market_cap}</p>
          <p><strong>24h Change:</strong> {coin.price_change_percentage_24h}%</p>
          <p><strong>Total Volume:</strong> {coin.total_volume}</p>
          <p><strong>High 24h:</strong> {coin.high_24h}</p>
          <p><strong>Low 24h:</strong> {coin.low_24h}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CryptoModal;
