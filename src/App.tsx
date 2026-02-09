import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MarkdownPage } from './components/MarkdownPage';
import privacyMd from '@/privacy.md?raw';
import termsMd from '@/terms.md?raw';

function LandingPage() {
  return (
    <main>
      <Hero />
      <ValueProp />
      <Pricing />
      <FAQ />
    </main>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<MarkdownPage content={privacyMd} />} />
        <Route path="/terms" element={<MarkdownPage content={termsMd} />} />
      </Routes>
      <Footer />
    </div>
  );
}
