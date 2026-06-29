import './WhyChooseUs.css';

const REASONS = [
  {
    icon: '👥',
    title: 'Vetted & Trained Team',
    description: 'Every cleaner passes a rigorous background check and completes our 40-hour training program before stepping foot in your home.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Products',
    description: 'We use only EPA Safer Choice certified products that are powerful on dirt but gentle on your family, pets, and the planet.',
  },
  {
    icon: '✅',
    title: 'Satisfaction Guarantee',
    description: 'If you\'re not 100% happy, we\'ll come back and re-clean any area for free. No questions asked. That\'s our promise.',
  },
  {
    icon: '📱',
    title: 'Easy Online Booking',
    description: 'Book, reschedule, or cancel in seconds. Get instant confirmation, cleaner details, and reminders — all from your phone.',
  },
  {
    icon: '🔒',
    title: 'Fully Insured & Bonded',
    description: 'We carry $2 million in general liability insurance and full bonding for your complete peace of mind.',
  },
  {
    icon: '⭐',
    title: 'Proven Track Record',
    description: 'With 2,800+ five-star reviews and a 4.9 average rating, our customers consistently rate us the best in the city.',
  },
  {
    icon: '⏰',
    title: 'Punctual & Reliable',
    description: 'We arrive on time, every time. Our team respects your schedule with real-time arrival notifications and flexible windows.',
  },
  {
    icon: '🧹',
    title: 'Hospitality-Grade Standards',
    description: 'Our cleaning protocols are inspired by luxury hotels. We bring the same meticulous attention to detail to your home.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section why-choose">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2>What Sets SparkleClean Apart</h2>
          <p>
            We don't just clean — we obsess over quality, transparency, and your peace of mind. 
            Here's why thousands of customers trust us with their homes and businesses.
          </p>
        </div>

        <div className="why-choose-grid">
          {REASONS.map((reason, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}