import React, { useState } from 'react';
import './CTAContact.css';

type FormStatus = 'idle' | 'success' | 'error';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready for a Sparkling Clean Home?</h2>
        <p>
          Join over 5,000 satisfied customers who trust SparkleClean. 
          Book your first cleaning today and experience the difference 
          professional care makes.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-secondary btn-lg">
            Get Your Free Quote
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="tel:+15551234567" className="btn btn-white btn-lg">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call (555) 123-4567
          </a>
        </div>
        <div className="cta-guarantee">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          100% Satisfaction Guaranteed • No Contracts • Free Re-Clean If Needed
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields (Name, Email, and Phone).');
      return;
    }

    // Simulate form submission
    setStatus('idle');
    
    setTimeout(() => {
      setStatus('success');
      setStatusMessage(
        `Thank you, ${formData.name}! Your quote request has been received. We'll contact you within 2 hours during business hours.`
      );
      setFormData(initialForm);

      // Reset success message after 8 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 8000);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <span className="section-label">Contact Us</span>
            <h2>Let's Talk About Your Cleaning Needs</h2>
            <p>
              Ready for a cleaner space? We'd love to hear from you. Fill out the form 
              and we'll get back to you within 2 hours with a free, no-obligation quote.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+15551234567">(555) 123-4567</a></p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>
                    Mon–Sat, 7:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:hello@sparklecleanpro.com">hello@sparklecleanpro.com</a></p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>
                    We respond within 2 hours
                  </p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div>
                  <h4>Office</h4>
                  <p>742 Clean Street, Suite 200<br />Metropolis, ST 12345</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-400)' }}>
                    By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <h3>Request a Free Quote</h3>

            {status === 'success' && (
              <div className="form-message success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {statusMessage}
              </div>
            )}

            {status === 'error' && (
              <div className="form-message error">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                  >
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move-In/Move-Out</option>
                    <option value="eco">Eco-Friendly Clean</option>
                    <option value="construction">Post-Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your space, any special requests, or preferred dates..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit">
                Get Your Free Quote
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}