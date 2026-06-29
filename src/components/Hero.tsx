import './Hero.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
      </div>

      <div className="container">
        <div className="hero-layout">
          {/* Left: Text Content */}
          <div className="hero-content">
            <span className="section-label animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              #1 Rated Cleaning Service
            </span>

            <h1 className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your Home Deserves the <span className="text-highlight">Sparkling Clean</span> It Deserves
            </h1>

            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Trusted by over 5,000 homeowners and businesses across the city. 
              We bring professional-grade cleaning, eco-friendly products, and 
              guaranteed satisfaction to every space we touch.
            </p>

            <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Get Your Free Quote
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#services" className="btn btn-outline btn-lg">
                Explore Services
              </a>
            </div>

            <div className="hero-trust animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="trust-avatars">
                <div className="trust-avatar" style={{ background: '#E8F5F3' }}></div>
                <div className="trust-avatar" style={{ background: '#D1FAE5', marginLeft: '-12px' }}></div>
                <div className="trust-avatar" style={{ background: '#FEF3C7', marginLeft: '-12px' }}></div>
                <div className="trust-avatar" style={{ background: '#DBEAFE', marginLeft: '-12px' }}></div>
              </div>
              <div className="trust-text">
                <strong>4.9/5</strong> from <span>2,847+ reviews</span>
                <div className="trust-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="icon-sm" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="hero-image-col animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="hero-image-frame">
              <img
                src={HERO_IMAGE}
                alt="Bright and clean living room after professional cleaning service"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-badge">
                <div className="hero-image-badge-icon">🧹</div>
                <div>
                  <strong>Professional</strong>
                  <span>Cleaning Since 2013</span>
                </div>
              </div>
              <div className="hero-image-badge hero-image-badge-2">
                <div className="hero-image-badge-icon">🌿</div>
                <div>
                  <strong>Eco-Friendly</strong>
                  <span>100% Green Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}