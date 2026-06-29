import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  {
    question: 'How do I book a cleaning service?',
    answer: 'You can book directly through our website by clicking "Get Free Quote" or navigating to the Contact section. Simply fill out the form with your details, preferred date and time, and we\'ll confirm your booking within 2 hours. You can also call us at (555) 123-4567.',
  },
  {
    question: 'Are your cleaners background-checked and insured?',
    answer: 'Absolutely. Every SparkleClean team member undergoes a comprehensive background check, drug screening, and a 40-hour training program before their first appointment. We carry $2 million in general liability insurance and are fully bonded for your complete peace of mind.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use EPA Safer Choice certified, eco-friendly cleaning products that are tough on dirt but safe for your family, pets, and the environment. If you have specific product preferences or sensitivities, we\'re happy to accommodate — just let us know when booking.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'Not at all! Many of our customers provide a key or door code and trust us to clean while they\'re at work. All our cleaners are vetted and bonded. We also offer lockbox access for recurring services. You can specify your preference when booking.',
  },
  {
    question: 'How long does a typical cleaning take?',
    answer: 'Cleaning times vary based on the size of your space and the service level. An Essential Clean for a 1-bedroom apartment typically takes 1.5–2 hours. A Premium Clean for a 2-bedroom home takes 2.5–3.5 hours. Ultimate Deep Cleans can take 4–6 hours. We\'ll give you an accurate time estimate when you book.',
  },
  {
    question: 'What if I\'m not satisfied with the cleaning?',
    answer: 'Your satisfaction is 100% guaranteed. If any area doesn\'t meet your standards, let us know within 24 hours and we\'ll return to re-clean it for free — no questions asked. This is our SparkleClean Promise.',
  },
  {
    question: 'Can I request the same cleaner each time?',
    answer: 'Yes! For recurring services, we assign a dedicated cleaning team to your home so they become familiar with your space and preferences. We track your feedback after each visit to ensure consistent, improving quality.',
  },
  {
    question: 'Do you provide all cleaning equipment and supplies?',
    answer: 'Yes, our team arrives fully equipped with professional-grade vacuums, mops, microfiber cloths, and all necessary cleaning solutions. You don\'t need to provide anything — just let us in and we\'ll take care of the rest.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We currently serve the greater metropolitan area including Downtown, Maplewood, Lakeside, Oak Park, West Hills, Riverside, Eastgate, Northwood, Southpointe, and all surrounding suburbs within a 30-mile radius of the city center.',
  },
  {
    question: 'Do you offer commercial cleaning services?',
    answer: 'Yes! We provide comprehensive commercial cleaning for offices, retail spaces, medical facilities, gyms, restaurants, and more. Our commercial team works around your schedule — nights, weekends, or during business hours. Contact us for a custom quote.',
  },
  {
    question: 'How do I pay for the service?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex, Discover), debit cards, and electronic bank transfers. Payment is processed securely through our online system after the service is completed. We also offer payment plans for recurring customers.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans change. You can cancel or reschedule for free up to 24 hours before your appointment. Cancellations within 24 hours may be subject to a 50% fee. We never charge for cancellations due to emergencies or inclement weather.',
  },
  {
    question: 'Do you clean windows, carpets, and upholstery?',
    answer: 'Our Premium and Ultimate plans include interior window cleaning and basic carpet spot treatment. For full exterior window cleaning or deep carpet steam cleaning, we offer these as add-on services. Ask about our Complete Care Package.',
  },
  {
    question: 'Is there a minimum commitment for recurring cleaning?',
    answer: 'No! You can book weekly, bi-weekly, monthly, or as a one-time service — no contracts, no commitments. We do offer discounted rates for recurring customers as a thank-you for their loyalty.',
  },
  {
    question: 'How do you handle keys and access to my home?',
    answer: 'We take security seriously. Keys are stored in a secure, encrypted system with unique identifiers — no personal information is linked to the key. You can also provide a door code, use a lockbox, or be home during the cleaning. Your choice.',
  },
  {
    question: 'Are your services safe for pets?',
    answer: 'Yes! Our eco-friendly cleaning products are non-toxic and pet-safe. We also use HEPA-filtered vacuums to capture allergens and pet dander. Just let us know you have pets when booking, and we\'ll take extra care with their areas.',
  },
  {
    question: 'Do you offer holiday or special event cleaning?',
    answer: 'Absolutely. We offer pre-party, post-party, and holiday cleaning services. During peak seasons (December, spring cleaning), we recommend booking at least 2 weeks in advance as slots fill up quickly.',
  },
  {
    question: 'What if something gets damaged during cleaning?',
    answer: 'While we take every precaution, accidents are rare. We are fully insured and bonded. If something is damaged, our claims process is straightforward — report it within 48 hours and we\'ll handle it promptly through our insurance.',
  },
  {
    question: 'Can I customize my cleaning checklist?',
    answer: 'Yes! When you book, you can specify priority areas, items to focus on, or areas to avoid. Our team follows a 127-point checklist by default, but we\'re happy to customize it to your needs. Recurring customers get a personalized cleaning plan.',
  },
  {
    question: 'How do I leave feedback about my cleaning?',
    answer: 'After each service, you\'ll receive a feedback link via text or email. You can rate your cleaner, leave comments, and even upload photos. We read every piece of feedback and use it to continuously improve our service.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            We believe in transparency. Here are answers to the most common questions 
            our customers ask before booking their first cleaning.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? ' open' : ''}`}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span itemProp="name">{faq.question}</span>
                <span className="faq-question-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="faq-answer-inner" itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}