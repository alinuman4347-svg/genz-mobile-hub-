import productCover from '../assets/product-cover.png';
import useReveal from '../hooks/useReveal';
import { waLink } from '../data/content';
import './Delivery.css';

export default function Delivery() {
  const left = useReveal();
  const right = useReveal();

  return (
    <section id="delivery" className="delivery">
      <div className="delivery__lines" />
      <div className="pad delivery__split">
        <div ref={left.ref} className={`reveal${left.visible ? ' is-visible' : ''}`}>
          <div className="eyebrow">Office delivery</div>
          <h2 className="delivery__title">
            Your Accessories. Your Office. <span>No Extra Hassle.</span>
          </h2>
          <p className="delivery__desc">
            Stay focused on your work while Gen Z Mobile Hub delivers the mobile essentials
            you need directly to your office.
          </p>
          <div className="delivery__stats">
            <div>
              <div className="delivery__stat-value delivery__stat-value--accent">Same day</div>
              <div className="delivery__stat-label">On in-stock items</div>
            </div>
            <div>
              <div className="delivery__stat-value">25% advance</div>
              <div className="delivery__stat-label">Rest cash or online on delivery</div>
            </div>
          </div>
          <a
            href={waLink('an office delivery')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary delivery__cta"
          >
            Request Office Delivery<span>→</span>
          </a>
        </div>

        <div ref={right.ref} className={`delivery__visual reveal${right.visible ? ' is-visible' : ''}`}>
          <div className="delivery__frame">
            <div className="delivery__placeholder">
              <span>Office / desk delivery photo</span>
            </div>
            <div className="delivery__fade" />
            <div className="delivery__caption">Delivered to reception. Fitted at your desk.</div>
          </div>
          <div className="delivery__floatcard">
            <img src={productCover} alt="Phone cover" />
            <div className="delivery__floatcard-label">Fitted free</div>
          </div>
        </div>
      </div>
    </section>
  );
}
