import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES_LINKS = [
  { label: 'Residential Cleaning', href: '#services' },
  { label: 'Commercial Cleaning', href: '#services' },
  { label: 'Deep Cleaning', href: '#services' },
  { label: 'Move-In/Move-Out', href: '#services' },
  { label: 'Eco-Friendly Clean', href: '#services' },
  { label: 'Post-Construction', href: '#services' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="navbar-logo-text">Sparkle<span>Clean</span></div>
            <p>
              Professional cleaning services for homes and businesses. 
              We bring hotel-quality cleanliness with eco-friendly products 
              and a 100% satisfaction guarantee.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" title="Facebook">📘</a>
              <a href="#" aria-label="Instagram" title="Instagram">📸</a>
              <a href="#" aria-label="Twitter" title="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">💼</a>
              <a href="#" aria-label="YouTube" title="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              {QUICK_LINKS.map((link, i) => (
                <a key={i} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>Our Services</h4>
            <div className="footer-links">
              {SERVICES_LINKS.map((link, i) => (
                <a key={i} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>742 Clean Street, Suite 200<br />Metropolis, ST 12345</span>
            </div>
            <div className="footer-contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+15551234567">(555) 123-4567</a>
            </div>
            <div className="footer-contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hello@sparklecleanpro.com">hello@sparklecleanpro.com</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>&copy; {year} SparkleClean Pro. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}