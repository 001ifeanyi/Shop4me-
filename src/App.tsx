/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Request from "./pages/Request";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AcceptableUse from "./pages/AcceptableUse";
import MeetCeo from "./pages/MeetCeo";
import WhyTrustUs from "./pages/WhyTrustUs";
import OurResponsibility from "./pages/OurResponsibility";
import HowItWorks from "./pages/HowItWorks";
import ServiceAreas from "./pages/ServiceAreas";
import ContactCeo from "./pages/ContactCeo";
import { Shop4MeBrand } from "./components/Brand";

function DynamicSeo() {
  const location = useLocation();
  
  const seoConfig: Record<string, { title: string; description: string; keywords?: string }> = {
    "/": { 
      title: "Shop4Me — Errand Service & Personal Shopper in Nigeria", 
      description: "Too busy to shop, deliver, or pick up? Shop4Me is Nigeria's trusted same day errand service. Need someone to go to the market for me? We handle market runs, package pickup, printing, and act as your reliable delivery service. Book your affordable errand runner instantly via WhatsApp.",
      keywords: "errand service Nigeria, personal shopper Nigeria, market run service, send an errand, errand boy app, pickup and delivery service, WhatsApp errand booking, local delivery service Nigeria, physical shopping assistant, errand running app"
    },
    "/services": { 
      title: "Our Services — Market Runs, Delivery & Printing | Shop4Me", 
      description: "From market runs to document printing, package pickup to delivery — Shop4Me handles your everyday errands reliably and affordably. We act as your personal assistant for errands in Nigeria and the best errand service near me.",
      keywords: "market run service Nigeria, document printing service, package pickup Nigeria, buy and send service, delivery errand service, construction materials sourcing, photocopy service Nigeria"
    },
    "/meet-ceo": { 
      title: "Meet the Founder — Shop4Me Errand Service", 
      description: "Learn about Shop4Me's founder and our mission to be Nigeria's most reliable errand and personal shopper service.",
      keywords: "Shop4Me founder, trusted errand service Nigeria, reliable errand runner"
    },
    "/why-trust-us": { title: "Why Trust Us", description: "Discover why Shop4Me is the most reliable errand and shopping service." },
    "/our-responsibility": { title: "Our Responsibility", description: "Shop4Me's commitment to our customers, safety, and community." },
    "/how-it-works": { title: "How It Works", description: "See how easy it is to use Shop4Me for your daily errands and shopping." },
    "/service-areas": { title: "Service Areas", description: "Check out the areas and locations where Shop4Me currently operates." },
    "/contact-ceo": { title: "Contact CEO", description: "Get in touch directly with the Shop4Me leadership." },
    "/contact": { 
      title: "Contact Shop4Me — Book Your Errand via WhatsApp", 
      description: "Get in touch with Shop4Me for reliable errand running, market runs, and delivery service. Chat with us directly on WhatsApp to book an affordable errand runner today.",
      keywords: "contact errand service Nigeria, book errand WhatsApp, Shop4Me contact"
    },
    "/privacy": { title: "Privacy Policy", description: "Read the Shop4Me Privacy Policy." },
    "/terms": { title: "Terms of Service", description: "Read the Shop4Me Terms of Service." },
    "/acceptable-use": { title: "Acceptable Use Policy", description: "Read the Shop4Me Acceptable Use Policy." },
    "/request": { title: "Request an Errand", description: "Submit a new errand or shopping request to the Shop4Me team." },
  };

  const currentSeo = seoConfig[location.pathname] || { 
    title: "Shop4Me", 
    description: "Shop4Me - Your Errand Boy. We'll do the shopping and errands for you." 
  };

  const finalTitle = currentSeo.title.includes("Shop4Me")
    ? currentSeo.title
    : `${currentSeo.title} | Shop4Me`;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={currentSeo.description} />
      {currentSeo.keywords && <meta name="keywords" content={currentSeo.keywords} />}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={currentSeo.description} />
    </Helmet>
  );
}

function Splash() {
// ... existing splash code ...
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-text-primary"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
      >
        <Shop4MeBrand layout="column" size="xl" withTagline={true} withSubTagline={true} />
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <HelmetProvider>
        <HashRouter>
          {/* SEO Management */}
          <DynamicSeo />
          {/* Scroll to top on route change */}
          <ScrollToTop />
          <AnimatePresence>
            {showSplash && <Splash key="splash" />}
          </AnimatePresence>

          {!showSplash && (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="meet-ceo" element={<MeetCeo />} />
                <Route path="why-trust-us" element={<WhyTrustUs />} />
                <Route path="our-responsibility" element={<OurResponsibility />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                <Route path="service-areas" element={<ServiceAreas />} />
                <Route path="contact-ceo" element={<ContactCeo />} />
                <Route path="contact" element={<Contact />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="terms" element={<Terms />} />
                <Route path="acceptable-use" element={<AcceptableUse />} />
              </Route>
              <Route path="/request" element={<Request />} />
            </Routes>
          )}
        </HashRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}
