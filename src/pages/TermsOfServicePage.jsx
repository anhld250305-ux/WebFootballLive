import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TermsOfServicePage() {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1>{t('terms.page_title')}<span className="grad">{t('terms.page_grad')}</span></h1>
          <p className="lead-sub">{t('terms.page_sub')}</p>
        </motion.div>

        <motion.div className="legal-card" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <p className="updated">{t('terms.updated')}</p>

          <h2>{t('terms.s1_title')}</h2>
          <p>{t('terms.s1_p1')}</p>
          <p>{t('terms.s1_p2')}</p>

          <h2>{t('terms.s2_title')}</h2>
          <ul>
            <li>{t('terms.s2_li1')}</li>
            <li>{t('terms.s2_li2')}</li>
            <li>{t('terms.s2_li3')}</li>
          </ul>

          <h2>{t('terms.s3_title')}</h2>
          <ul>
            <li>{t('terms.s3_li1')}</li>
            <li>{t('terms.s3_li2')}</li>
            <li>{t('terms.s3_li3')}</li>
          </ul>

          <h2>{t('terms.s4_title')}</h2>
          <p>{t('terms.s4_p1')}</p>

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
