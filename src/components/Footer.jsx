import logoWhite from '../assets/logo-white.png';
import { FOOTER_CATEGORIES, FOOTER_COMPANY, waLink } from '../data/content';
import { WhatsAppIcon } from './icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="pad">
        <div className="footer__grid">
          <div>
            <img src={logoWhite} alt="Gen Z Mobile Hub" height={46} />
            <div className="footer__tagline">Your Phone. Our Priority.</div>
            <p className="footer__desc">
              Premium mobile accessories with fast office delivery and professional
              installation — ordered entirely over WhatsApp.
            </p>
            <div className="footer__socials">
              <a
                href={waLink('a quick order')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer__social"
              >
                <WhatsAppIcon size={19} color="#7CFF00" />
              </a>
              <a href="#contact" aria-label="Instagram" className="footer__social footer__social--text">
                IG
              </a>
              <a href="#contact" aria-label="TikTok" className="footer__social footer__social--text">
                TT
              </a>
              <a href="#contact" aria-label="Facebook" className="footer__social footer__social--text">
                FB
              </a>
            </div>
          </div>

          <div>
            <div className="footer__heading">Categories</div>
            <div className="footer__links">
              {FOOTER_CATEGORIES.map((cat) => (
                <a key={cat} href="#accessories">
                  {cat}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__heading">Company</div>
            <div className="footer__links">
              {FOOTER_COMPANY.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__heading">Get in touch</div>
            <a href={waLink('a quick order')} target="_blank" rel="noopener noreferrer" className="footer__phone">
              0328 0042458
            </a>
            <div className="footer__phone-note">
              Message us anytime — we usually reply within minutes.
            </div>
            <div className="footer__info-box">
              <div className="footer__info-title">Delivery info</div>
              <div className="footer__info-text">
                Office delivery Mon–Sat. Same-day on in-stock items. 25% advance to confirm
                your order, balance in cash or online on delivery. Installation available for
                covers &amp; glass.
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 Gen Z Mobile Hub. All rights reserved.</div>
          <div>Your Phone. Our Priority.</div>
        </div>
      </div>
    </footer>
  );
}
