import { useEffect, useState } from 'react';
import mascot from '../assets/mascot.webp';
import { waLink } from '../data/content';
import { WhatsAppIcon } from './icons';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const [greetOpen, setGreetOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGreetOpen(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!dismissed && (
        <div className={`greet${greetOpen ? ' greet--open' : ''}`}>
          <img src={mascot} alt="" />
          <div className="greet__text">
            Hey! Tell us what your phone needs and we'll bring it to your desk.
          </div>
          <button
            className="greet__close"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
          >
            ×
          </button>
        </div>
      )}
      <a
        href={waLink('a quick order')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="wa-float"
      >
        <span className="wa-float__ring" />
        <WhatsAppIcon size={32} color="#fff" />
      </a>
    </>
  );
}
