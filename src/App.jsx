import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CyberFootball from './components/CyberFootball';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* 3D background sphere & starfield */}
      <CyberFootball />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content Area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/marketing" element={<LandingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      {/* Footer Navigation & Legal */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
