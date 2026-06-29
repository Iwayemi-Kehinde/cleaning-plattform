import './TrustBadges.css';

const STATS = [
  { value: '5,000+', label: 'Homes & Businesses Cleaned', icon: '🏠' },
  { value: '12+', label: 'Years of Experience', icon: '⭐' },
  { value: '99%', label: 'Satisfaction Rate', icon: '✅' },
  { value: '50,000+', label: 'Hours of Cleaning', icon: '🕐' },
  { value: '4.9/5', label: 'Average Rating', icon: '📊' },
  { value: '100%', label: 'Eco-Friendly Products', icon: '🌿' },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container">
        <div className="trust-badges-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="trust-badge-item">
              <span className="trust-badge-icon">{stat.icon}</span>
              <div className="trust-badge-value">{stat.value}</div>
              <div className="trust-badge-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}