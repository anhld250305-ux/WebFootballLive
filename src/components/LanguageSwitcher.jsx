import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languageNames } from '../i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = i18n.language || 'en';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lang-btn"
      >
        <span>🌐</span>
        <span>{languageNames[currentLanguage]}</span>
        <span style={{ fontSize: '10px', transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: '150px',
            padding: '8px',
            zIndex: 1000,
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            border: '1px solid var(--border)',
            backgroundColor: 'rgba(5, 18, 26, 0.95)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {Object.keys(languageNames).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              style={{
                width: '100%',
                padding: '10px 16px',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: currentLanguage === lng ? 'var(--accent)' : 'var(--text)',
                fontWeight: currentLanguage === lng ? '700' : '500',
                fontSize: '14px',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span>{languageNames[lng]}</span>
              {currentLanguage === lng && <span style={{ color: 'var(--accent)' }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
