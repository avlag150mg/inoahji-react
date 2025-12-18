import React from 'react';
import { Link } from 'react-router-dom';
import StoreGrid from '../components/StoreGrid.jsx';

export default function Store() {
  return (
    <main style={{ paddingTop: 92 }}>
      <section className="section" style={{ minHeight: '70vh' }}>
        <div className="container">
          <h2 className="sectionTitle">OUR STORE</h2>
          <StoreGrid />
          <p className="small" style={{ marginTop: 22 }}>
            Назад на <Link to="/">головну</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
