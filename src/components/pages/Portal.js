import React from 'react';
import '../../App.css';
import PortalCards from '../PortalCards';
import PortalHeroSection from '../PortalHeroSection';
import Footer from '../Footer';
import PortalNavbar from '../PortalNavbar';

function Portal() {
  return (
    <>
    
    <PortalNavbar/>
      <PortalHeroSection />
      <PortalCards />
      <Footer />
    </>
  );
}

export default Portal;
