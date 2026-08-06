import mascot from '../assets/mascot.png';
import heroCluster from '../assets/hero-cluster.png';
import useReveal from '../hooks/useReveal';
import { HERO_TAGS, TICKER_ITEMS, waLink } from '../data/content';
import Marquee from './Marquee';
import { WhatsAppIcon } from './icons';
import './Hero.css';

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const { ref, visible } = useReveal(delay);
  return (
    <Tag ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow-blob" />
      <div className="hero__grid-bg" />
      <div className="hero__ring" />

      <div className="pad">
        <div className="hero__layout">
          <div className="hero__content">
            <Reveal className="hero__badge">
              <img src={mascot} alt="" />
              <span>Hey! We deliver to your desk</span>
            </Reveal>

            <Reveal as="h1" delay={60} className="hero__title">
              Everything Your Phone Needs—
              <span className="hero__title-accent">Delivered to Your Office</span>
            </Reveal>

            <Reveal as="p" delay={120} className="hero__desc">
              Premium mobile accessories, fast office delivery, affordable prices, and
              professional installation—all available through one quick WhatsApp message.
            </Reveal>

            <Reveal delay={180} className="hero__actions">
              <a
                href={waLink('a quick order')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <WhatsAppIcon size={19} color="#07160A" />
                Order on WhatsApp
              </a>
              <a href="#accessories" className="btn btn--ghost">
                Explore Accessories<span className="btn__arrow">↓</span>
              </a>
            </Reveal>

            <Reveal delay={240} className="hero__tags">
              {HERO_TAGS.map((tag) => (
                <span key={tag} className="hero__tag">
                  <span className="hero__tag-dot">✦</span>
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-glow" />
            <div className="hero__visual-frame">
              <img
                src={heroCluster}
                alt="Phone cover, tempered glass, charger, cable, earbuds and power bank"
                className="hero__visual-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__ticker">
        <Marquee duration={34}>
          <div className="hero__ticker-group">
            {TICKER_ITEMS.map((item) => (
              <span key={item} className="hero__ticker-item">
                {item}
                <span className="hero__ticker-sep">/</span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
