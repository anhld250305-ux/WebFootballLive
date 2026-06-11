import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand" style={{ maxWidth: '350px' }}>
            <Link to="/" className="logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <span className="logo-icon">⚽</span>
              <h1 style={{ fontSize: '20px' }}>WebFootball<span>Live</span></h1>
            </Link>
            <p>{t('footer.tagline', 'High quality HD football live stream, live scores updated 24/7')}</p>
          </div>
          
          <div className="footer-links">
            <Link to="/">{t('nav.home', 'Home')}</Link>
            <Link to="/support">{t('nav.support', 'Support')}</Link>
            <Link to="/privacy-policy">{t('privacy.title', 'Privacy Policy')}</Link>
            <Link to="/terms">{t('terms.title', 'Terms of Service')}</Link>
          </div>
        </div>
        
        <div className="copyright">
          <p>© {new Date().getFullYear()} WebFootballLive. {t('footer.rights', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}
