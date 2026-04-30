/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import ProxyTypes from './components/ProxyTypes';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Locations from './components/Locations';
import HowItWorks from './components/HowItWorks';
import ApiSection from './components/ApiSection';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <ProxyTypes />
      <UseCases />
      <Pricing />
      <Stats />
      <Locations />
      <HowItWorks />
      <ApiSection />
      <Faq />
      <CtaSection />
      <Footer />
      <FloatingElements />
    </div>
  );
}
