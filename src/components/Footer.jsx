import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: '14px', display: 'inline-flex' }}>
              <img className="brand-icon" src="/logo.png" alt="FootballLive" style={{ width: 28, height: 28, borderRadius: 6 }} />
              <span>Football<span className="accent-text">Live</span></span>
            </Link>
            <p style={{ margin: 0, color: 'var(--text-mute)', maxWidth: '280px', fontSize: '14px', lineHeight: 1.6 }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4>{t('footer.col_app')}</h4>
            <a href="/#features">{t('nav.features')}</a>
            <a href="/#screens">{t('nav.screens')}</a>
            <a href="#download">{t('nav.download')}</a>
          </div>
          <div>
            <h4>{t('footer.col_legal')}</h4>
            <Link to="/privacy-policy">{t('privacy.page_title')}{t('privacy.page_grad')}</Link>
            <Link to="/terms">{t('terms.page_title')}{t('terms.page_grad')}</Link>
          </div>
          <div>
            <h4>{t('footer.col_help')}</h4>
            <Link to="/support">{t('nav.support')}</Link>
            <a href="mailto:huym9@icloud.com">huym9@icloud.com</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {t('footer.rights')}</span>
          <span>Made for iPhone & iPad</span>
        </div>
      </div>
    </footer>
  );
}
