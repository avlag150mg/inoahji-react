import React from 'react';
import { Link } from 'react-router-dom';
import StoreGrid from '../components/StoreGrid.jsx';
import PixelCanvas from '../components/PixelCanvas.jsx';

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__bg">
          <img src="/assets/hero.png" alt="" />
        </div>
        <div className="hero__veil" aria-hidden="true"></div>

        <div className="container hero__content">
          <h1 className="hero__title">COLLECTION</h1>

          <div className="hero__campaign" id="campaign">
            <h2 className="kicker">OUR CAMPAIGN</h2>
            <p className="bodyText">
              At iNOAHJI each season unfolds a lead story — say, gauzy.
              Driven through oversize minimalism, structure, and deep minimalism.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="store">
        <div className="container">
          <h2 className="sectionTitle">OUR STORE</h2>
          <StoreGrid />
          <p className="small" style={{ marginTop: 18 }}>
            Відкрити окрему сторінку: <Link to="/store">Store →</Link>
          </p>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2 className="sectionTitle">ABOUT iNOAHJI</h2>
          <div className="aboutWrap">
            <div className="aboutImg">
              <PixelCanvas src="/assets/portrait.jpg" pixel={18} />
            </div>
            <div className="aboutText">
              <h3>ABOUT iNOAHJI</h3>
              <p>
                iNOAHJI reshapes the dialectics of neo-fashion identity. Through bold form,
                turns and controlled chaos, the brand challenges traditional boundaries,
                and expresses a new sculptural direction.
              </p>
              <p className="small" style={{ marginTop: 14 }}>
                Окрема сторінка: <Link to="/about">About →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
