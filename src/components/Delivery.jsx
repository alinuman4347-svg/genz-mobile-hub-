import deliveryOffice from '../assets/delivery-office.jpg';
import useReveal from '../hooks/useReveal';
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
        </div>

        <div ref={right.ref} className={`delivery__visual reveal${right.visible ? ' is-visible' : ''}`}>
          <div className="delivery__frame">
            <img
              src={deliveryOffice}
              alt="Gen Z Mobile Hub courier delivering an accessories kit to an office receptionist"
              className="delivery__photo"
            />
            <div className="delivery__fade" />
            <div className="delivery__caption">
              Delivered to reception. Fitted at your <span>workspace</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
