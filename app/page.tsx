import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
// import { ClientLogos } from '@/components/ClientLogos';
import { Features } from '@/components/Features';
import { Solutions } from '@/components/Solutions';
import { Testimonials } from '@/components/Testimonials';
import { CdpModules } from '@/components/CdpModules';
import { CdpFeatures } from '@/components/CdpFeatures';
import { CdpIntegrations } from '@/components/CdpIntegrations';
import { Recognition } from '@/components/Recognition';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <Hero />

      {/* Chatbot Emphasis */}
      <div className="mt-12 text-center">
        <p className="text-blue-900/60 text-sm">
          Need help? Try our AI assistant
        </p>
        <div className="animate-bounce mt-2">
          <svg
            className="w-6 h-6 mx-auto text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <Features />
      <Solutions />
      <Testimonials />
      <CdpModules />
      <CdpFeatures />
      <CdpIntegrations />
      <Recognition />
      <Footer />
    </div>
  );
}

