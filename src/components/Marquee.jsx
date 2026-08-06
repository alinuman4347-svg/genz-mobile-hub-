import './Marquee.css';

export default function Marquee({
  children,
  className = '',
  trackClassName = '',
  duration = 34,
  mask = false,
  gap = 0,
}) {
  return (
    <div className={`marquee ${mask ? 'marquee--mask' : ''} ${className}`}>
      <div
        className={`marquee__track ${trackClassName}`}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="marquee__group" style={{ gap }}>
          {children}
        </div>
        <div className="marquee__group" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
