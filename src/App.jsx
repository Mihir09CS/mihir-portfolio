import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seo from './components/Seo';
import Hero from './sections/Hero';

// Lazy load below-fold sections for performance
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionFallback = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen noise-bg" style={{ background: '#0B0F19' }}>
      <Seo />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global UI */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.92)',
            color: '#F8FAFC',
            border: '1px solid rgba(96, 165, 250, 0.18)',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(2, 8, 23, 0.45)',
            backdropFilter: 'blur(18px)',
          },
          success: {
            iconTheme: {
              primary: '#34D399',
              secondary: '#08111f',
            },
          },
          error: {
            iconTheme: {
              primary: '#F87171',
              secondary: '#08111f',
            },
          },
        }}
      />

      {/* Main Content */}
      <main id="main-content">
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
