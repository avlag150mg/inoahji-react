import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const mobileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (e.target.closest('[data-burger]')) return;
      if (mobileRef.current && mobileRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [open]);

  const goCampaign = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#campaign');
      return;
    }
    const el = document.getElementById('campaign');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else navigate('/#campaign');
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="brand" to="/">iNOAHJI</Link>

        <nav className="nav" aria-label="Primary">
          <NavLink className="nav__link" to="/about">ABOUT</NavLink>
          <a className="nav__link" href="/#campaign" onClick={goCampaign}>CAMPAIGN</a>
          <NavLink className="nav__link" to="/contact">CONTACT</NavLink>
        </nav>

        <button
          className="burger"
          type="button"
          aria-label="Menu"
          data-burger
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
        </button>
      </div>

      <div className="mobile" ref={mobileRef} hidden={!open}>
        <Link to="/about">ABOUT</Link>
        <a href="/#campaign" onClick={goCampaign}>CAMPAIGN</a>
        <Link to="/contact">CONTACT</Link>
        <Link to="/store">STORE</Link>
      </div>
    </header>
  );
}
