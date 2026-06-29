import './About.css';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&q=80&auto=format&fit=crop';

const FEATURES = [
  'Licensed & Insured',
  'Background-Checked Staff',
  'Eco-Friendly Products',
  'Satisfaction Guarantee',
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Image */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src={ABOUT_IMAGE}
                alt="Professional SparkleClean cleaner at work in a modern home"
                className="about-image"
                loading="lazy"
              />
            </div>
            <div className="about-experience-badge">
              <div className="years">12+</div>
              <div className="label">Years of Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>Our Story: From One Apartment to a City-Wide Trusted Service</h2>
            
            <p>
              SparkleClean Pro was founded in 2013 by Maria Chen, a former hospitality 
              executive who saw a gap in the cleaning industry — most companies either 
              cut corners to save costs or offered inconsistent quality. Determined to 
              change that, Maria started SparkleClean with a simple mission: deliver 
              hotel-quality cleanliness with genuine care for people and the planet.
            </p>
            
            <p>
              What began as a single-person operation cleaning apartments has grown into 
              a team of 80+ trained professionals serving over 5,000 happy customers. 
              We've built our reputation one spotless home at a time, earning a 4.9-star 
              average across more than 2,800 verified reviews.
            </p>

            <div className="about-features">
              {FEATURES.map((feature, i) => (
                <div key={i} className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Meet Our Team
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}