import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Manifesto from './components/Manifesto';
import Portfolio from './components/Portfolio';
import Accolades from './components/Accolades';
import VenuesShowcase from './components/VenuesShowcase';
import Testimonials from './components/Testimonials';
import InvestmentCalculator from './components/InvestmentCalculator';
import BookingPortal from './components/BookingPortal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
    const inquireElem = document.getElementById('inquire');
    if (inquireElem) {
      inquireElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-noir-900 font-sans selection:bg-noir-900 selection:text-white">
      {/* Floating Editorial Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* SECTION 1: Ultra-Classic Editorial Hero Banner */}
      <HeroBanner onOpenBooking={handleOpenBooking} />

      {/* SECTION 2: The Atelier & Philosophy */}
      <Manifesto />

      {/* SECTION 3: Selected Works Gallery */}
      <Portfolio />

      {/* SECTION 4: Accolades & Press Laurels */}
      <Accolades />

      {/* SECTION 5: Prestigious UK Estates & Venues */}
      <VenuesShowcase />

      {/* SECTION 6: Love Stories & Praise */}
      <Testimonials />

      {/* SECTION 7: Investment & Collections */}
      <InvestmentCalculator onOpenBooking={handleOpenBooking} />

      {/* SECTION 8: VIP Inquiry Portal */}
      <BookingPortal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* High-Fashion Signature Footer */}
      <Footer />
    </div>
  );
}
