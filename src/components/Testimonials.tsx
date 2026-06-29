import './Testimonials.css';

const TESTIMONIALS = [
  {
    text: 'I was skeptical about hiring a cleaning service, but SparkleClean completely changed my mind. They transformed my kitchen — the grease buildup I\'d been fighting for years was completely gone. Worth every penny!',
    name: 'Sarah Mitchell',
    role: 'Homeowner, Maplewood District',
    avatar: 'SM',
  },
  {
    text: 'We use SparkleClean for our medical office and they are exceptional. They understand our strict hygiene requirements and always work around our patient schedule. Highly professional team.',
    name: 'Dr. James Crawford',
    role: 'Owner, Crawford Family Dentistry',
    avatar: 'JC',
  },
  {
    text: 'The move-out cleaning saved our security deposit! The apartment was spotless — the landlord even commented it was cleaner than when we moved in. Absolutely recommend.',
    name: 'Emily & Ryan Torres',
    role: 'Renters, Downtown High-Rise',
    avatar: 'ER',
  },
  {
    text: 'As a mom of three with a dog, keeping the house clean felt impossible. SparkleClean\'s weekly service has been a lifesaver. The team is always on time, thorough, and so nice with my kids.',
    name: 'Jennifer Park',
    role: 'Mother of Three, Lakeside',
    avatar: 'JP',
  },
  {
    text: 'We run a busy law firm and needed someone reliable for nightly office cleaning. Two years later, SparkleClean has been absolutely consistent. No missed visits, no excuses.',
    name: 'Marcus Thompson',
    role: 'Managing Partner, Thompson & Associates',
    avatar: 'MT',
  },
  {
    text: 'Used SparkleClean for our post-renovation cleanup. The construction dust was EVERYWHERE — they got it all. We were able to move furniture in the same day. Incredible work.',
    name: 'Linda & Bob Chen',
    role: 'Homeowners, Oak Park',
    avatar: 'LC',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2>What Our Customers Say</h2>
          <p>
            Don't just take our word for it. Here's what real customers have to say 
            about their SparkleClean experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}