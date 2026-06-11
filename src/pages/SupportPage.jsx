import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SupportPage() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    { q: t('support.faq.q4'), a: t('support.faq.a4') },
  ];

  return (
    <main className="legal-page">
      <div className="container">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1>{t('support.page_title')}<span className="grad">{t('support.page_grad')}</span></h1>
          <p className="lead-sub">{t('support.page_sub')}</p>
        </motion.div>

        {/* Intro Card */}
        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-soft)' }}>
            {t('support.intro')}
          </p>
        </motion.div>

        {/* 3.1. Technical Support */}
        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: 24 }}>
          <h2 style={{ color: 'var(--accent)', margin: '0 0 12px', fontSize: 20 }}>{t('support.tech_title')}</h2>
          <ul style={{ margin: 0, padding: 0 }}>
            <li>{t('support.tech_li1')}</li>
            <li>{t('support.tech_li2')}</li>
          </ul>
        </motion.div>

        {/* 3.2. Data Deletion */}
        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={{ marginBottom: 24 }}>
          <h2 style={{ color: 'var(--accent)', margin: '0 0 12px', fontSize: 20 }}>{t('support.data_title')}</h2>
          <p style={{ fontSize: 15, color: 'var(--text-soft)', lineHeight: 1.8, margin: 0 }}>
            {t('support.data_desc')}
          </p>
        </motion.div>

        {/* 3.3. Copyright & Partnership */}
        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: 48 }}>
          <h2 style={{ color: 'var(--accent)', margin: '0 0 12px', fontSize: 20 }}>{t('support.copyright_title')}</h2>
          <ul style={{ margin: 0, padding: 0 }}>
            <li>{t('support.copyright_li1')}</li>
            <li>{t('support.copyright_li2')}</li>
          </ul>
        </motion.div>

        {/* FAQ Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{t('support.faq_title')}</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                <div className="faq-q" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="arrow">▼</span>
                </div>
                <div className="faq-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div className="support-form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="legal-card" style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ color: 'var(--text)', margin: '0 0 6px' }}>{t('support.form_title')}</h2>
            <p style={{ fontSize: 14, color: 'var(--text-mute)', marginBottom: 28 }}>{t('support.form_sub')}</p>

            {isSubmitted ? (
              <div className="success-msg">{t('form.success')}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>{t('form.name')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>{t('form.email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group full">
                    <label>{t('form.topic')}</label>
                    <select name="topic" value={formData.topic} onChange={handleChange}>
                      <option value="">{t('form.topic_select')}</option>
                      <option value="bug">{t('form.topic_bug')}</option>
                      <option value="feature">{t('form.topic_feature')}</option>
                      <option value="premium">{t('form.topic_premium')}</option>
                      <option value="data">{t('form.topic_data')}</option>
                      <option value="dmca">{t('form.topic_dmca')}</option>
                      <option value="other">{t('form.topic_other')}</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label>{t('form.message')}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder={t('form.message_placeholder')} required></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: 8 }}>
                  {t('form.submit')}
                </button>
              </form>
            )}

            {/* Email contact */}
            <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(0,230,118,0.05)', border: '1px solid rgba(0,230,118,0.12)', borderRadius: 10, textAlign: 'center' }}>
              <p style={{ fontSize: 14, color: 'var(--text-soft)', margin: '0 0 4px' }}>{t('support.email_label')}</p>
              <a href="mailto:huym9@icloud.com" style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 16 }}>huym9@icloud.com</a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
