import './Services.css';

const SERVICES = [
  {
    icon: '🏠',
    title: 'Residential Cleaning',
    description: 'Transform your home into a sparkling sanctuary with our comprehensive residential cleaning service. We handle everything from weekly maintenance to deep cleans, ensuring every room shines.',
    features: ['Full home dusting & wiping', 'Kitchen & bathroom deep clean', 'Floor mopping & vacuuming', 'Window cleaning (interior)', 'Bed linen changing available'],
    price: 'From $89',
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    description: 'Maintain a professional, hygienic workplace that impresses clients and keeps your team healthy. We work around your schedule — nights, weekends, or during business hours.',
    features: ['Office & retail space cleaning', 'Restroom sanitization', 'Carpet & upholstery care', 'Trash removal & recycling', 'Custom cleaning frequency'],
    price: 'Custom Quote',
  },
  {
    icon: '🔬',
    title: 'Deep Cleaning',
    description: 'Our most thorough service — we go beyond surface cleaning to reach every corner, crevice, and hidden buildup. Perfect for move-ins, move-outs, or seasonal refresh.',
    features: ['Behind appliances moving', 'Baseboard & trim detail', 'Light fixture cleaning', 'Inside cabinet wipe-down', 'Blind & curtain cleaning'],
    price: 'From $199',
  },
  {
    icon: '🧼',
    title: 'Move-In/Move-Out',
    description: 'Make your move stress-free. We deeply clean your old home to get your deposit back and your new home ready for a fresh start. Bond-back guarantee included.',
    features: ['Full pre-move inspection', 'All rooms deep cleaned', 'Appliance interior/exterior', 'Closet shelving detail', 'Security deposit protection'],
    price: 'From $249',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Green Clean',
    description: 'For homes with children, pets, or anyone sensitive to harsh chemicals. We use only EPA-certified green products that are powerful on dirt but gentle on your family.',
    features: ['100% non-toxic products', 'HEPA-filtered vacuuming', 'Hypoallergenic treatment', 'Pet-safe formulations', 'Essential oil scents'],
    price: 'From $109',
  },
  {
    icon: '📦',
    title: 'Post-Construction Cleaning',
    description: 'After renovations or construction, don\'t let dust and debris delay your enjoyment. We remove all construction residue so you can move in immediately.',
    features: ['Drywall dust removal', 'Sawdust & debris cleanup', 'Window & sill detail', 'Floor & surface polishing', 'Final walk-through ready'],
    price: 'Custom Quote',
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>Comprehensive Cleaning Solutions for Every Space</h2>
          <p>
            Whether it's your home, office, or a post-renovation site, we have the 
            expertise and equipment to deliver exceptional results every time.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <div key={i} className="service-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <span className="service-price">{service.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}