import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img className="brand-icon" src="/logo.png" alt="FootballLive" style={{ width: 32, height: 32, borderRadius: 8 }} />
          <span>Football<span className="accent-text">Live</span></span>
        </Link>

        <div className="nav-links">
          <a href="/#features">{t('nav.features')}</a>
          <a href="/#screens">{t('nav.screens')}</a>
          <NavLink to="/privacy-policy">{t('nav.privacy')}</NavLink>
          <NavLink to="/support">{t('nav.support')}</NavLink>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LanguageSwitcher />
          <a href="#download" className="nav-cta">
            {t('nav.download')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
