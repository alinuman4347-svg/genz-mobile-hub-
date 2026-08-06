import mascot from '../assets/mascot.png';
import useReveal from '../hooks/useReveal';
import { STEPS } from '../data/content';
import { WhatsAppIcon } from './icons';
import './HowItWorks.css';

function StepIcon({ icon }) {
  if (icon === 'whatsapp') return <WhatsAppIcon size={38} color="#7CFF00" />;
  if (icon === 'mascot') return <img src={mascot} alt="" className="step__mascot" />;
  return <span className="step__arrow">↗</span>;
}

function Step({ step }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`step reveal${visible ? ' is-visible' : ''}`}>
      <div className="step__icon">
        <StepIcon icon={step.icon} />
      </div>
      <div className="step__label">Step {step.step}</div>
      <h3 className="step__title">{step.title}</h3>
      <p className="step__desc">{step.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  const head = useReveal();
  return (
    <section className="how">
      <div className="pad">
        <div ref={head.ref} className={`how__head reveal${head.visible ? ' is-visible' : ''}`}>
          <div className="eyebrow">How it works</div>
          <h2 className="how__title">As easy as texting a friend</h2>
        </div>
        <div className="how__steps-wrap">
          <div className="how__line" />
          <div className="how__steps">
            {STEPS.map((step) => (
              <Step key={step.step} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
