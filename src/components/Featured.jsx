import useReveal from '../hooks/useReveal';
import { FEATURED_PRODUCTS, waLink } from '../data/content';
import './Featured.css';

function ProductCard({ product }) {
  return (
    <div className="prod-card">
      <div
        className={`prod-card__media${product.dark ? ' prod-card__media--dark' : ''}${
          product.opaque ? ' prod-card__media--opaque' : ''
        }`}
      >
        <span className="prod-card__badge">{product.badge}</span>
        <img
          src={product.img}
          alt={product.title}
          style={
            product.imgWidthFull
              ? { width: '100%' }
              : { height: product.imgHeight, width: 'auto' }
          }
        />
      </div>
      <h3 className="prod-card__title">{product.title}</h3>
      <p className="prod-card__desc">{product.desc}</p>
      <div className="prod-card__price">
        <span className="prod-card__price-value">Rs ——</span>
        <span className="prod-card__price-note">price on request</span>
      </div>
      <a
        href={waLink(product.waLabel)}
        target="_blank"
        rel="noopener noreferrer"
        className="prod-card__cta"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}

export default function Featured() {
  const { ref, visible } = useReveal();

  return (
    <section className="featured">
      <div className="pad">
        <div className={`featured__head reveal${visible ? ' is-visible' : ''}`} ref={ref}>
          <div>
            <div className="featured__eyebrow">Featured accessories</div>
            <h2 className="featured__title">The favourites everyone asks for</h2>
          </div>
          <div className="featured__swipe">Swipe →</div>
        </div>

        <div className="featured__scroller scroller">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
