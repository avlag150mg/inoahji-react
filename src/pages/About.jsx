import React from 'react';
import PixelCanvas from '../components/PixelCanvas.jsx';

export default function About() {
  return (
    <main style={{ paddingTop: 92 }}>
      <section className="section" style={{ minHeight: '70vh' }}>
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
              <p className="small" style={{ marginTop: 16 }}>
                Далі додамо повний текст і сторінку CAMPAIGN.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
