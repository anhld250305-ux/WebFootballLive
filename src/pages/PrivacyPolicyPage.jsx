import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1>{t('privacy.page_title')}<span className="grad">{t('privacy.page_grad')}</span></h1>
          <p className="lead-sub">{t('privacy.page_sub')}</p>
        </motion.div>

        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <p className="updated">{t('privacy.updated')}</p>
          <p>{t('privacy.intro')}</p>

          <h2>{t('privacy.s1_title')}</h2>
          <ul>
            <li>{t('privacy.s1_li1')}</li>
            <li>{t('privacy.s1_li2')}</li>
            <li>{t('privacy.s1_li3')}</li>
          </ul>

          <h2>{t('privacy.s2_title')}</h2>
          <ul>
            <li>{t('privacy.s2_li1')}</li>
            <li>{t('privacy.s2_li2')}</li>
          </ul>

          <h2>{t('privacy.s3_title')}</h2>
          <ul>
            <li>{t('privacy.s3_li1')}</li>
            <li>{t('privacy.s3_li2')}</li>
          </ul>

          <div className="contact-box">
            <h3>{t('legal.contact_title')}</h3>
            <p>{t('legal.contact_desc')}</p>
            <p style={{ fontWeight: 700, color: 'var(--accent)' }}>huym9@icloud.com</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
