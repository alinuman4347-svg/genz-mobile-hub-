import useReveal from '../hooks/useReveal';
import { CATEGORIES, waLink } from '../data/content';
import './Accessories.css';

function CategoryCard({ cat }) {
  return (
    <a
      href={waLink(cat.title)}
      target="_blank"
      rel="noopener noreferrer"
      className={`cat-card cat-card--${cat.variant}`}
    >
      {cat.tag && <div className="cat-card__tag">{cat.tag}</div>}
      {cat.letter && <div className="cat-card__letter">{cat.letter}</div>}
      <h3 className="cat-card__title">{cat.title}</h3>
      <p className="cat-card__desc">{cat.desc}</p>
      <span className="cat-card__cta">
        {cat.cta || 'Order Now'} <span>↗</span>
      </span>
      {cat.img && (
        <img
          className={`cat-card__img${cat.imgChip ? ' cat-card__img--chip' : ''}`}
          src={cat.img}
          alt={cat.title}
        />
      )}
    </a>
  );
}

export default function Accessories() {
  const { ref, visible } = useReveal();

  return (
    <section id="accessories" className="accessories">
      <div className="pad">
        <div className={`accessories__head reveal${visible ? ' is-visible' : ''}`} ref={ref}>
          <div>
            <div className="eyebrow">Categories</div>
            <h2 className="accessories__title">Upgrade Your Phone Setup</h2>
          </div>
          <p className="accessories__lead">
            Pick whatever you need, send us one message, and we'll bring it to your desk.
            Fitting covers and glass is on us.
          </p>
        </div>

        <div className="cat-grid">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.key} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
