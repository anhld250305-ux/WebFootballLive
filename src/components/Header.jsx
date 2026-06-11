import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const handleScrollToSection = (id) => {
    if (location.pathname !== '/' && location.pathname !== '/marketing') {
      // If not on home page, navigation will redirect through react-router and let home page scroll
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">⚽</span>
          <h1>WebFootball<span>Live</span></h1>
        </Link>
        
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive && location.hash === '' ? 'active' : ''}
          >
            {t('nav.home', 'Home')}
          </NavLink>
          
          <a 
            href="#live" 
            onClick={(e) => {
              // Only prevent default if we are on home page
              if (location.pathname === '/' || location.pathname === '/marketing') {
                e.preventDefault();
                handleScrollToSection('live');
              }
            }}
            className={location.pathname === '/' && location.hash === '#live' ? 'active' : ''}
          >
            {t('nav.live', 'Live')}
          </a>

          <a 
            href="#schedule" 
            onClick={(e) => {
              if (location.pathname === '/' || location.pathname === '/marketing') {
                e.preventDefault();
                handleScrollToSection('schedule');
              }
            }}
          >
            {t('nav.schedule', 'Schedule')}
          </a>

          <NavLink 
            to="/support" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {t('nav.support', 'Support')}
          </NavLink>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
