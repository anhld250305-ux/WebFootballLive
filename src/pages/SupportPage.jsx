import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SupportPage() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', topic: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const faqs = [
    { q: t('support.faq.q1'), a: t('support.faq.a1') },
    { q: t('support.faq.q2'), a: t('support.faq.a2') },
    { q: t('support.faq.q3'), a: t('support.faq.a3') },
    { q: t('support.faq.q4'), a: t('support.faq.a4') }
  ];

  return (
    <main style={{ position: 'relative', zIndex: 10, paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Support Header */}
        <section className="text-center" style={{ marginBottom: '60px' }}>
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '48px' }}
          >
            {t('support.title')} <span className="text-gradient-grass">{t('support.title_gradient')}</span>
          </motion.h2>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '18px', maxWidth: '600px', margin: '12px auto 0' }}
          >
            {t('support.subtitle')}
          </motion.p>
        </section>

        {/* FAQs Accordion */}
        <section style={{ marginBottom: '80px' }}>
          <h3 className="section-title text-center" style={{ fontSize: '26px' }}>{t('support.faq_title')}</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span style={{ transition: 'transform 0.2s', transform: activeFaq === index ? 'rotate(180deg)' : 'none' }}>▼</span>
                </div>
                <div className="faq-answer">
                  <p style={{ lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Request Form */}
        <section>
          <div className="glass-card contact-card">
            <h3 style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center' }}>{t('support.contact_title')}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '30px', textAlign: 'center' }}>
              {t('support.contact_subtitle')}
            </p>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  padding: '20px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(0, 255, 135, 0.1)', 
                  border: '1px solid var(--primary-grass)', 
                  color: 'var(--primary-grass)',
                  textAlign: 'center',
                  fontWeight: '600'
                }}
              >
                {t('form.success')}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>{t('form.name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Leo Messi"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>{t('form.email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="messi@intermiami.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>{t('form.topic')}</label>
                  <select 
                    name="topic" 
                    value={formData.topic}
                    onChange={handleInputChange}
                  >
                    <option value="">{t('form.topic_select')}</option>
                    <option value="lag">{t('form.topic_lag')}</option>
                    <option value="link">{t('form.topic_link')}</option>
                    <option value="feature">{t('form.topic_feature')}</option>
                    <option value="other">{t('form.topic_other')}</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <label>{t('form.message')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder={t('form.message_placeholder')}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  {t('form.submit')}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
