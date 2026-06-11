import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 10, paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <section className="text-center" style={{ marginBottom: '50px' }}>
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '42px' }}
          >
            {t('privacy.title')} <span className="text-gradient-grass">{t('privacy.title_gradient')}</span>
          </motion.h2>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '18px', margin: '12px auto 0' }}
          >
            {t('privacy.subtitle')}
          </motion.p>
        </section>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ padding: '40px', lineHeight: 1.8 }}
        >
          <p style={{ marginBottom: '24px', fontSize: '16px' }}>{t('privacy.intro')}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>{t('last_updated')}</p>

          <h3 style={{ fontSize: '20px', color: 'var(--primary-grass)', marginBottom: '12px' }}>{t('privacy.s1_title')}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{t('privacy.s1_desc')}</p>

          <h3 style={{ fontSize: '20px', color: 'var(--primary-grass)', marginBottom: '12px' }}>{t('privacy.s2_title')}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{t('privacy.s2_desc')}</p>

          <h3 style={{ fontSize: '20px', color: 'var(--primary-grass)', marginBottom: '12px' }}>{t('privacy.s3_title')}</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>{t('privacy.s3_desc')}</p>

          <hr style={{ border: 'none', borderBottom: '1px solid var(--border-glass)', margin: '40px 0' }} />

          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Contact Information</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            <strong>Email:</strong> privacy@webfootballlive.com
          </p>
        </motion.div>
      </div>
    </main>
  );
}
