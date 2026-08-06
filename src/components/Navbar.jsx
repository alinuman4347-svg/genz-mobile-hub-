import { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';
import { NAV_LINKS, waLink } from '../data/content';
import { WhatsAppIcon } from './icons';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="pad navbar__inner">
          <a href="#home" className="navbar__logo">
            <img src={logoWhite} alt="Gen Z Mobile Hub" height={40} />
          </a>
          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={waLink('a quick order')}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta navbar__links"
          >
            Order Now
          </a>
          <button
            className="navbar__burger"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__top">
          <img src={logoWhite} alt="Gen Z Mobile Hub" height={38} />
          <button
            className="mobile-menu__close"
            aria-label="Close"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="mobile-menu__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={waLink('a quick order')}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu__cta"
        >
          <WhatsAppIcon size={19} color="#07160A" />
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
