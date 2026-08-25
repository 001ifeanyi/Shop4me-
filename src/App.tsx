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
  
  const seoConfig: Record<string, { title: string; description: string }> = {
    "/": { title: "Home", description: "Shop4Me - Your reliable errand boy for shopping and deliveries." },
    "/services": { title: "Our Services", description: "Explore the wide range of errands and shopping services Shop4Me provides." },
    "/meet-ceo": { title: "Meet the CEO", description: "Learn more about the vision and leadership behind Shop4Me." },
    "/why-trust-us": { title: "Why Trust Us", description: "Discover why Shop4Me is the most reliable errand and shopping service." },
    "/our-responsibility": { title: "Our Responsibility", description: "Shop4Me's commitment to our customers, safety, and community." },
    "/how-it-works": { title: "How It Works", description: "See how easy it is to use Shop4Me for your daily errands and shopping." },
    "/service-areas": { title: "Service Areas", description: "Check out the areas and locations where Shop4Me currently operates." },
    "/contact-ceo": { title: "Contact CEO", description: "Get in touch directly with the Shop4Me leadership." },
    "/contact": { title: "Contact Us", description: "Reach out to Shop4Me for support, inquiries, or feedback." },
    "/privacy": { title: "Privacy Policy", description: "Read the Shop4Me Privacy Policy." },
    "/terms": { title: "Terms of Service", description: "Read the Shop4Me Terms of Service." },
    "/acceptable-use": { title: "Acceptable Use Policy", description: "Read the Shop4Me Acceptable Use Policy." },
    "/request": { title: "Request an Errand", description: "Submit a new errand or shopping request to the Shop4Me team." },
  };

  const currentSeo = seoConfig[location.pathname] || { 
    title: "Shop4Me", 
    description: "Shop4Me - Your Errand Boy. We'll do the shopping and errands for you." 
  };

  return (
    <Helmet>
      <title>{currentSeo.title === "Shop4Me" ? "Shop4Me" : `${currentSeo.title} | Shop4Me`}</title>
      <meta name="description" content={currentSeo.description} />
      <meta property="og:title" content={currentSeo.title === "Shop4Me" ? "Shop4Me" : `${currentSeo.title} | Shop4Me`} />
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
