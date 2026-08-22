/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

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
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}
