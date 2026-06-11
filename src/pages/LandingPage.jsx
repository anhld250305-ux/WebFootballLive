import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToLive = () => {
    const liveSection = document.getElementById('live');
    if (liveSection) {
      liveSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mock live/upcoming match list for premium dynamic look
  const mockMatches = [
    {
      id: 1,
      status: 'live',
      minute: "76'",
      league: 'UEFA Champions League',
      team1: { name: 'Real Madrid', logo: '👑', score: 2 },
      team2: { name: 'Man City', logo: '🩵', score: 2 },
      channel: 'VTV Cab / WebFootball 1',
      winner: null
    },
    {
      id: 2,
      status: 'live',
      minute: "34'",
      league: 'Premier League',
      team1: { name: 'Arsenal', logo: '🔴', score: 1 },
      team2: { name: 'Chelsea', logo: '🔵', score: 0 },
      channel: 'K+ Sport / WebFootball 2',
      winner: 'team1'
    },
    {
      id: 3,
      status: 'upcoming',
      time: '02:00',
      date: 'Tomorrow',
      league: 'La Liga',
      team1: { name: 'Barcelona', logo: '🔵🔴', score: '-' },
      team2: { name: 'Atletico Madrid', logo: '⚪🔴', score: '-' },
      channel: 'SCTV15 / WebFootball 3',
      winner: null
    },
    {
      id: 4,
      status: 'finished',
      league: 'Serie A',
      team1: { name: 'Juventus', logo: '⚫⚪', score: 3 },
      team2: { name: 'AC Milan', logo: '🔴⚫', score: 1 },
      channel: 'WebFootball Live Recap',
      winner: 'team1'
    }
  ];

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      {/* 1. Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge-gold"
            style={{ marginBottom: '16px', display: 'inline-block' }}
          >
            {t('hero.badge', 'Next-Gen Football Live Stream')}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            {t('hero.title', 'Experience Premier')} <span className="text-gradient-grass">{t('hero.title_gradient', 'Football Matches')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            {t('hero.subtitle', 'Watch major leagues like Premier League, Champions League, La Liga... in high definition, with no ads, and live English commentaries.')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button onClick={handleScrollToLive} className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '16px' }}>
              <span>▶</span> {t('hero.btn_watch', 'Watch Live Now')}
            </button>
            <a href="#schedule" className="btn btn-outline" style={{ padding: '14px 36px', fontSize: '16px' }}>
              {t('hero.btn_schedule', "Today's Schedule")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Live Matches Section */}
      <section className="section" id="live" style={{ padding: '60px 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center" 
            style={{ marginBottom: '40px' }}
          >
            <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <span className="live-badge" style={{ animation: 'none' }}><span className="live-dot" style={{ animation: 'liveBlink 1s infinite' }}></span>{t('nav.live', 'Live')}</span>
              {t('live.section_title', 'Hot Live Matches')}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{t('live.section_subtitle', 'Real-time live score updates, stream HD with no buffering.')}</p>
          </motion.div>

          <div className="matches-grid">
            {mockMatches.map((match, index) => (
              <motion.div 
                key={match.id}
                className="glass-card match-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="match-header">
                  <span>🏆 {match.league}</span>
                  {match.status === 'live' && (
                    <span className="live-badge" style={{ fontSize: '10px' }}>
                      <span className="live-dot"></span> LIVE {match.minute}
                    </span>
                  )}
                  {match.status === 'upcoming' && (
                    <span className="badge-gold" style={{ fontSize: '10px', background: 'rgba(255,215,0,0.15)', color: 'var(--accent-gold)' }}>
                      🕒 {match.time} ({t('live.comming_soon', 'Upcoming')})
                    </span>
                  )}
                  {match.status === 'finished' && (
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                      ✓ {t('live.finished', 'Finished')}
                    </span>
                  )}
                </div>

                <div className="match-teams">
                  <div className="team">
                    <div className="team-info">
                      <span className="team-logo">{match.team1.logo}</span>
                      <span className="team-name">{match.team1.name}</span>
                    </div>
                    <span className={`team-score ${match.winner === 'team1' ? 'winner' : ''}`}>
                      {match.team1.score}
                    </span>
                  </div>
                  
                  <div className="team">
                    <div className="team-info">
                      <span className="team-logo">{match.team2.logo}</span>
                      <span className="team-name">{match.team2.name}</span>
                    </div>
                    <span className={`team-score ${match.winner === 'team2' ? 'winner' : ''}`}>
                      {match.team2.score}
                    </span>
                  </div>
                </div>

                <div className="match-footer">
                  <span className="match-channel">📺 {match.channel}</span>
                  {match.status === 'live' ? (
                    <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px' }}>
                      {t('live.watch_now', 'Watch')}
                    </button>
                  ) : match.status === 'upcoming' ? (
                    <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px', opacity: 0.7 }}>
                      🔔 Remind
                    </button>
                  ) : (
                    <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '8px' }}>
                      Replay
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="section" style={{ padding: '80px 0', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border-glass)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
            style={{ marginBottom: '50px' }}
          >
            <h2 className="section-title">{t('features.title', 'Why Choose WebFootballLive?')}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{t('features.subtitle', 'The most modern and stable football live streaming platform.')}</p>
          </motion.div>

          <div className="features-grid">
            {/* Feature 1 */}
            <motion.div 
              className="glass-card feature-card"
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 135, 0.25)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="feature-icon">⚡</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{t('features.f1_title', '1080p HD Quality')}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
                {t('features.f1_desc', 'Sharp images, smooth 60fps frame rates, and low latency technology ensure you never miss any goal scoring moments.')}
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="glass-card feature-card"
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 135, 0.25)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="feature-icon">🎙️</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{t('features.f2_title', 'Pro Commentary')}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
                {t('features.f2_desc', 'Professional, funny, and engaging commentators bring the stadium atmosphere straight to your screen.')}
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="glass-card feature-card"
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 135, 0.25)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="feature-icon">📊</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{t('features.f3_title', 'Live Match Stats')}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7 }}>
                {t('features.f3_desc', 'View real-time statistics including ball possession, shots on target, corners, and cards updated automatically during the match.')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA / Schedule Section */}
      <section className="section" id="schedule" style={{ padding: '80px 0' }}>
        <div className="container">
          <motion.div 
            className="glass-card text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ 
              padding: '60px 40px', 
              background: 'radial-gradient(circle, rgba(0, 255, 135, 0.04) 0%, rgba(6, 9, 19, 0.8) 100%)',
              borderColor: 'rgba(0, 255, 135, 0.15)'
            }}
          >
            <h2 className="section-title" style={{ fontSize: '32px' }}>{t('cta.title', 'Never Miss Any Goal')}</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '16px auto 32px', fontSize: '16px' }}>
              {t('cta.subtitle', 'Subscribe to get notifications about match schedules and direct streaming links of your favorite teams.')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="example@email.com" 
                style={{ 
                  padding: '14px 20px', 
                  borderRadius: '10px', 
                  border: '1px solid var(--border-glass)', 
                  backgroundColor: 'rgba(0,0,0,0.3)', 
                  color: 'white',
                  flex: 1,
                  minWidth: '240px'
                }} 
              />
              <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                {t('cta.btn_notify', 'Notify Me')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
