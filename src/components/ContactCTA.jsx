import mascot from '../assets/mascot.png';
import useReveal from '../hooks/useReveal';
import { waLink } from '../data/content';
import { WhatsAppIcon } from './icons';
import './ContactCTA.css';

export default function ContactCTA() {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="pad">
        <div ref={ref} className={`contact__panel reveal${visible ? ' is-visible' : ''}`}>
          <div className="contact__dots" />
          <div className="contact__blob" />
          <div className="contact__grid">
            <div>
              <div className="contact__kicker">
                <div className="contact__kicker-icon">
                  <WhatsAppIcon size={36} color="#7CFF00" />
                </div>
                <div className="contact__kicker-text">
                  One message. That's the whole checkout.
                </div>
              </div>
              <h2 className="contact__title">Your Phone Deserves Better Accessories</h2>
              <p className="contact__desc">
                Message Gen Z Mobile Hub today and get premium mobile accessories delivered
                directly to you.
              </p>
              <div className="contact__actions">
                <a
                  href={waLink('a quick order')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__wa-btn"
                >
                  Start WhatsApp Order<span>→</span>
                </a>
              </div>
            </div>
            <div className="contact__mascot-col">
              <div className="contact__mascot-glow" />
              <img src={mascot} alt="Gen Z Mobile Hub mascot" className="contact__mascot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
