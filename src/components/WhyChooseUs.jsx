import useReveal from '../hooks/useReveal';
import useCounter from '../hooks/useCounter';
import { STATS, FEATURES } from '../data/content';
import { WhatsAppIcon } from './icons';
import './WhyChooseUs.css';

function StatCard({ stat }) {
  const { ref, text } = useCounter(stat.count, {
    prefix: stat.prefix || '',
    suffix: stat.suffix || '',
  });
  return (
    <div className={`stat-card${stat.highlight ? ' stat-card--highlight' : ''}`}>
      <div ref={ref} className="stat-card__num">
        {text}
      </div>
      <div className="stat-card__label">{stat.label}</div>
    </div>
  );
}

function FeatureRow({ feature }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`feature-row${feature.accent ? ' feature-row--accent' : ''} reveal${
        visible ? ' is-visible' : ''
      }`}
    >
      <div className="feature-row__icon">
        {feature.accent ? <WhatsAppIcon size={22} color="#07160A" /> : feature.num}
      </div>
      <div>
        <h3 className="feature-row__title">{feature.title}</h3>
        <p className="feature-row__desc">{feature.desc}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const stats = useReveal();
  const head = useReveal();

  return (
    <section id="why" className="why">
      <div className="why__glow" />
      <div className="pad why__inner">
        <div
          ref={stats.ref}
          className={`stat-grid reveal${stats.visible ? ' is-visible' : ''}`}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        <div className="why__split">
          <div ref={head.ref} className={`why__head reveal${head.visible ? ' is-visible' : ''}`}>
            <div className="eyebrow">Why Gen Z Mobile Hub</div>
            <h2 className="why__title">We make upgrading your phone genuinely easy</h2>
            <p className="why__desc">
              No queues, no markets, no waiting around. Just say hi on WhatsApp and we'll take
              it from there.
            </p>
          </div>
          <div className="why__features">
            {FEATURES.map((feature) => (
              <FeatureRow key={feature.num} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
