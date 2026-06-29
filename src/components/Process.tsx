import './Process.css';

const STEPS = [
  {
    number: '01',
    title: 'Book Online',
    description: 'Choose your service, pick a time slot that works for you, and get instant confirmation. Takes less than 2 minutes.',
  },
  {
    number: '02',
    title: 'We Arrive & Clean',
    description: 'Your vetted cleaner arrives with all equipment and eco-friendly supplies. We follow your customized cleaning plan.',
  },
  {
    number: '03',
    title: 'Quality Inspection',
    description: 'We do a walk-through with you or send photo proof. Every corner is checked against our 127-point checklist.',
  },
  {
    number: '04',
    title: 'Enjoy Your Space',
    description: 'Relax in your sparkling clean space. Loved it? Leave a review. Need a fix? We\'ll re-clean for free within 24 hours.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>Getting a Sparkling Clean Home in 4 Simple Steps</h2>
          <p>
            We've made the entire process seamless from booking to completion. 
            No phone calls, no hassle — just a cleaner home.
          </p>
        </div>

        <div className="process-steps">
          {STEPS.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}