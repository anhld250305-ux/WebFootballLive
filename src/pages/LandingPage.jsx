import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

export default function LandingPage() {
  const { t } = useTranslation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: '📡', title: t('features.f1_title'), desc: t('features.f1_desc') },
    { icon: '🎬', title: t('features.f2_title'), desc: t('features.f2_desc') },
    { icon: '📊', title: t('features.f3_title'), desc: t('features.f3_desc') },
    { icon: '🏆', title: t('features.f4_title'), desc: t('features.f4_desc') },
    { icon: '⭐', title: t('features.f5_title'), desc: t('features.f5_desc') },
    { icon: '📰', title: t('features.f6_title'), desc: t('features.f6_desc') },
  ];

  const privacyChecks = [
    { b: t('privacy_section.check1_b'), text: t('privacy_section.check1') },
    { b: t('privacy_section.check2_b'), text: t('privacy_section.check2') },
    { b: t('privacy_section.check3_b'), text: t('privacy_section.check3') },
    { b: t('privacy_section.check4_b'), text: t('privacy_section.check4') },
  ];

  return (
    <main>
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <motion.div className="hero-icon" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <img src="/logo.png" alt="FootballLive" style={{ width: 48, height: 48, borderRadius: 12 }} />
            </motion.div>
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="dot"></span> {t('hero.eyebrow')}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {t('hero.title_1')}<span className="grad">{t('hero.title_grad')}</span>
            </motion.h1>
            <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {t('hero.lead')}
            </motion.p>

            <motion.div className="cta-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <a className="app-store-badge" href="#download" aria-label="Download on the App Store">
                <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true" style={{ width: 22, height: 22 }}>
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>
                  <span className="label-small">Download on the</span><br/>
                  <span className="label-big">App Store</span>
                </span>
              </a>
              <a className="btn btn-ghost" href="#features">
                {t('nav.features')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
            </motion.div>

            <motion.div className="trust-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {t('hero.trust_1')}
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                {t('hero.trust_2')}
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
                {t('hero.trust_3')}
              </span>
            </motion.div>
          </div>

          {/* Hero Visual - Phone Mockups */}
          <motion.div className="hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
            <div className="glow"></div>
            <div className="phone-frame">
              <img src="/15.png" alt="FootballLive app screenshot" loading="eager" />
            </div>
            <div className="phone-frame float-2">
              <img src="/screenshot2.jpg" alt="FootballLive live scores" loading="eager" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ============ FEATURES ============ */}
      <section className="section" id="features">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="section-tag">{t('features.tag')}</span>
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-sub">{t('features.sub')}</p>
          </motion.div>

          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div key={i} className="feature" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="icon"><span>{f.icon}</span></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SCREENSHOTS iPhone ============ */}
      <section className="section" id="screens" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="section-tag">{t('screens.tag')}</span>
            <h2 className="section-title">{t('screens.title')}</h2>
            <p className="section-sub">{t('screens.sub')}</p>
          </motion.div>

          <div className="showcase">
            <div className="scroller">
              <div className="shot"><img src="/15.png" alt="FootballLive Screenshot 1" loading="lazy" /></div>
              <div className="shot"><img src="/screenshot2.jpg" alt="FootballLive Screenshot 4" loading="lazy" /></div>
              <div className="shot"><img src="/screenshot3.png" alt="FootballLive Screenshot 5" loading="lazy" /></div>
              <div className="shot"><img src="/screenshot4.png" alt="FootballLive Screenshot 6" loading="lazy" /></div>
              <div className="shot"><img src="/screenshot5.png" alt="FootballLive Screenshot 7" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ iPad SHOWCASE ============ */}
      <section className="section" id="ipad" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-tag">iPad Experience</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Trải nghiệm tuyệt vời trên iPad.</h2>
            <p className="section-sub centered">Giao diện tối ưu cho màn hình lớn — mọi thống kê, tỉ số và tin tức hiển thị rõ ràng hơn bao giờ hết.</p>
          </motion.div>

          <div className="showcase">
            <div className="scroller">
              <motion.div className="shot" style={{ width: 360, borderRadius: 16 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
                <img src="/screenshot1.jpg" alt="FootballLive iPad - All Matches" loading="lazy" />
              </motion.div>
              <motion.div className="shot" style={{ width: 360, borderRadius: 16 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                <img src="/screenshot1-1.jpg" alt="FootballLive iPad - World Cup" loading="lazy" />
              </motion.div>
              <motion.div className="shot" style={{ width: 360, borderRadius: 16 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
                <img src="/image.png" alt="FootballLive iPad - Live Scores" loading="lazy" />
              </motion.div>
              <motion.div className="shot" style={{ width: 360, borderRadius: 16 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.24 }}>
                <img src="/image copy.png" alt="FootballLive iPad - Match Details" loading="lazy" />
              </motion.div>
              <motion.div className="shot" style={{ width: 360, borderRadius: 16 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.32 }}>
                <img src="/image copy 2.png" alt="FootballLive iPad - News Feed" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRIVACY-FIRST ============ */}
      <section className="section" id="privacy-first">
        <div className="container why">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-tag">{t('privacy_section.tag')}</span>
            <h2 className="section-title">{t('privacy_section.title')}</h2>
            <p className="section-sub">{t('privacy_section.sub')}</p>
          </motion.div>
          <motion.div className="why-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ul className="why-list">
              {privacyChecks.map((c, i) => (
                <li key={i}>
                  <span className="check"><CheckIcon /></span>
                  <span><b>{c.b}</b> {c.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-section" id="download">
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <a className="app-store-badge" href="#" aria-label="Download on the App Store" style={{ margin: '0 auto' }}>
              <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true" style={{ width: 22, height: 22 }}>
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span>
                <span className="label-small">Download on the</span><br/>
                <span className="label-big">App Store</span>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
