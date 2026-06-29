import './MiscSections.css';

const VALUES = [
  {
    icon: '🎯',
    title: 'Our Mission',
    text: 'To deliver exceptional cleaning services that transform spaces and improve lives, while setting the industry standard for quality, transparency, and environmental responsibility.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    text: 'To become the most trusted cleaning service in the nation — where every home and business experiences the SparkleClean difference of hotel-quality cleanliness, eco-conscious practices, and genuine care.',
  },
  {
    icon: '💎',
    title: 'Core Values',
    text: 'Integrity in every interaction. Excellence without compromise. Respect for your home and time. Sustainability in our choices. Continuous improvement through feedback and innovation.',
  },
];

const INDUSTRIES = [
  { icon: '🏥', name: 'Medical & Dental Offices' },
  { icon: '🏢', name: 'Corporate Offices' },
  { icon: '🏪', name: 'Retail & Showrooms' },
  { icon: '🍽️', name: 'Restaurants & Cafes' },
  { icon: '🏋️', name: 'Gyms & Fitness Centers' },
  { icon: '👶', name: 'Daycares & Schools' },
  { icon: '🏨', name: 'Hotels & Short-Term Rentals' },
  { icon: '🏭', name: 'Warehouses & Industrial' },
  { icon: '🐾', name: 'Veterinary Clinics' },
  { icon: '⛪', name: 'Places of Worship' },
  { icon: '🎨', name: 'Gyms & Studios' },
  { icon: '🏠', name: 'Residential Properties' },
];

const AREAS = [
  'Downtown', 'Maplewood', 'Lakeside', 'Oak Park',
  'West Hills', 'Riverside', 'Eastgate', 'Northwood',
  'Southpointe', 'Brookside', 'Cedar Creek', 'Pine Valley',
  'Sunrise Heights', 'Meadowbrook', 'Willow Springs',
];

const ECO_STATS = [
  { value: '5,000+', label: 'Plastic Bottles Saved' },
  { value: '100%', label: 'Biodegradable Products' },
  { value: '40%', label: 'Less Water Usage' },
];

const CERTS = [
  { icon: '🏅', name: 'EPA Safer Choice', desc: 'Certified Products' },
  { icon: '✅', name: 'BBB Accredited', desc: 'A+ Rating' },
  { icon: '🔒', name: 'Fully Insured', desc: '$2M Liability Coverage' },
  { icon: '🌿', name: 'Green Business', desc: 'Certified Sustainable' },
];

export default function MiscSections() {
  return (
    <>
      {/* CEO Message & Mission/Values */}
      <section className="section ceo-section">
        <div className="container">
          <div className="ceo-grid">
            <div className="ceo-message">
              <span className="section-label">A Note From Our Founder</span>
              <h2>Why I Built SparkleClean</h2>
              <div className="ceo-quote">
                &ldquo;I believe that a clean home is the foundation of a peaceful life. \n
                I started SparkleClean because I wanted every family to experience the joy \n
                of walking into a spotless home without sacrificing their precious time.&rdquo;
              </div>
              <p>
                After spending 15 years in luxury hotel management, I noticed something \n
                surprising — the same meticulous cleaning standards that top hotels maintained \n
                were considered &ldquo;too expensive&rdquo; or &ldquo;too high-maintenance&rdquo; for regular homes. \n
                I knew that wasn't true. Every home deserves five-star treatment.
              </p>
              <p>
                Today, our team brings that same hospitality mindset to thousands of homes \n
                and businesses across the city. We don't just clean — we care for your space \n
                as if it were our own.
              </p>
              <div className="ceo-signature">
                <strong>Maria Chen</strong>
                <span>Founder & CEO, SparkleClean Pro</span>
              </div>
            </div>

            <div className="mission-values">
              {VALUES.map((v, i) => (
                <div key={i} className="mv-card">
                  <div className="mv-card-header">
                    <span className="mv-card-icon">{v.icon}</span>
                    <h3>{v.title}</h3>
                  </div>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Clean */}
      <section className="section industries">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries We Clean</span>
            <h2>We Serve Every Type of Space</h2>
            <p>
              From medical offices to residential homes, we have the expertise \n
              and equipment to handle any cleaning challenge.
            </p>
          </div>

          <div className="industries-grid">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="industry-item">
                <span className="industry-icon">{ind.icon}</span>
                <span>{ind.name}</span>
              </div>
            ))}
          </div>

          <div className="areas-served">
            <p><strong>Areas We Serve:</strong> Proudly serving 15+ neighborhoods across the metropolitan area</p>
            <div className="area-tags">
              {AREAS.map((area, i) => (
                <span key={i} className="area-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="section eco-friendly">
        <div className="container">
          <div className="eco-grid">
            <div className="eco-content">
              <span className="section-label">Eco-Friendly Cleaning</span>
              <h2>Clean Homes, Healthy Planet</h2>
              <p>
                We believe you shouldn't have to choose between a clean home and a \n
                healthy environment. That's why 100% of our cleaning products are \n
                EPA Safer Choice certified — biodegradable, non-toxic, and free from \n
                harsh chemicals like ammonia, chlorine, and phthalates.
              </p>
              <p>
                Our cleaning methods also use microfiber technology and HEPA-filtered \n
                vacuums that trap 99.97% of allergens and particles, ensuring the air \n
                in your home is as clean as the surfaces.
              </p>
              <div className="eco-stats">
                {ECO_STATS.map((stat, i) => (
                  <div key={i} className="eco-stat">
                    <div className="eco-stat-value">{stat.value}</div>
                    <div className="eco-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="eco-visual">
              <div className="eco-visual-inner">
                <div className="eco-visual-ring"></div>
                🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section certifications" style={{ padding: 'var(--space-10) 0' }}>
        <div className="container">
          <div className="cert-grid">
            {CERTS.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-text">
                  <strong>{cert.name}</strong>
                  <span>{cert.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}