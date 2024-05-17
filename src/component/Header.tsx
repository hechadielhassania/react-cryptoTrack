import React from 'react'
import Image from '../assets/hero.png'
import Logo from '../assets/logo.png'

const Header = () => {
  
  return (
    <div>

      <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
            <img src={Logo} className="img-fluid d-block mx-auto" alt="Cryptocurrency GIF" />
              <h2 className="hero-title">Stay Updated with CryptoTrack</h2>
              <p className="hero-text">Track the latest prices of cryptocurrencies in real-time. Make informed decisions and stay ahead in the market.</p>
            </div>
            <div className="col-md-6">
              <img src={Image} className="img-fluid d-block mx-auto" alt="Cryptocurrency GIF" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Header