import React from 'react';

export default function Contact() {
  return (
    <main style={{ paddingTop: 92 }}>
      <section className="section" style={{ minHeight: '70vh' }}>
        <div className="container">
          <h2 className="sectionTitle">CONTACT</h2>
          <p className="small">Це демо-форма. Пізніше підключимо відправку.</p>
          <form style={{ marginTop: 18, maxWidth: 560 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input className="input" placeholder="Name" required />
              <input className="input" placeholder="Email" type="email" required />
            </div>
            <textarea
              className="input"
              style={{ marginTop: 12, width: '100%', minHeight: 140 }}
              placeholder="Message"
              required
            />
            <button className="input" style={{ marginTop: 12, cursor: 'pointer' }} type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
