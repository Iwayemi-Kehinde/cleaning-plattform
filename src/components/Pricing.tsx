import './Pricing.css';

const PLANS = [
  {
    icon: '🧹',
    name: 'Essential Clean',
    desc: 'Perfect for weekly or bi-weekly maintenance',
    price: '$89',
    per: 'per visit',
    featured: false,
    features: [
      'All living areas dusted & wiped',
      'Kitchen counters & sink cleaning',
      'Bathroom sanitization',
      'Vacuum & mop all floors',
      'Trash removal',
      '1-bedroom equivalent',
    ],
  },
  {
    icon: '✨',
    name: 'Premium Clean',
    desc: 'Most popular — our comprehensive service',
    price: '$149',
    per: 'per visit',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Essential',
      'Deep kitchen clean (appliances)',
      'Inside window cleaning',
      'Baseboard & trim dusting',
      'Light fixture wiping',
      'Bed linen changing',
      'Up to 2-bedroom home',
      'Priority scheduling',
    ],
  },
  {
    icon: '🌟',
    name: 'Ultimate Clean',
    desc: 'Deep clean for move-in/move-out or seasonal',
    price: '$249',
    per: 'per visit',
    featured: false,
    features: [
      'Everything in Premium',
      'Inside cabinet & drawer wipe',
      'Behind & under appliance move',
      'Blind & curtain cleaning',
      'Carpet spot treatment',
      'Closet & shelving detail',
      'Up to 3-bedroom home',
      'Bond-back guarantee',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2>Transparent Pricing, Zero Surprises</h2>
          <p>
            What you see is what you pay. No hidden fees, no upselling during service. 
            All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, index) => (
            <article key={index} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

              <div className="pricing-header">
                <div className="pricing-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-amount">{plan.price} <span>/</span></div>
                <div className="pricing-per">{plan.per}</div>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-lg`}
                style={{ width: '100%' }}
              >
                {plan.featured ? 'Get Started' : 'Choose Plan'}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Need a custom plan for your business or larger home? <a href="#contact">Contact us for a custom quote</a>
        </p>
      </div>
    </section>
  );
}