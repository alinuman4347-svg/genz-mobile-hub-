import useReveal from '../hooks/useReveal';
import { REVIEWS } from '../data/content';
import Marquee from './Marquee';
import './Reviews.css';

function ReviewCard({ review }) {
  return (
    <div className={`review-card${review.highlight ? ' review-card--highlight' : ''}`}>
      <div className="review-card__stars">★★★★★</div>
      <p className="review-card__text">{review.text}</p>
      <div className="review-card__person">
        <div className="review-card__avatar">{review.initials}</div>
        <div>
          <div className="review-card__name">{review.name}</div>
          <div className="review-card__role">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const head = useReveal();
  return (
    <section id="reviews" className="reviews">
      <div className="pad">
        <div ref={head.ref} className={`reviews__head reveal${head.visible ? ' is-visible' : ''}`}>
          <div className="eyebrow">Reviews</div>
          <h2 className="reviews__title">Loved by people at work</h2>
        </div>
      </div>
      <Marquee duration={46} mask gap={18} trackClassName="reviews__track">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.initials} review={review} />
        ))}
      </Marquee>
    </section>
  );
}
