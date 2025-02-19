'use client';

import { Fragment, useState, useEffect } from 'react';
import Header from '@/components/header';
import SolusiDana from '@/pages/Beranda/components/solusiDana';
import Info from '@/pages/Beranda/components/info';
import TataCaraPengajuan from '@/pages/Beranda/components/tataCaraPengajuan';
import Produk from '@/pages/Beranda/components/produk';
import Skema from '@/pages/Beranda/components/skema';
import DapatkanPenawaran from '@/pages/Beranda/components/dapatkanPenawaran';

// modals
import AjukanSekarangModal from '@/pages/Beranda/modals/ajukanSekarang';

export default function Index() {
  const [showAjukanSekarang, setShowAjukanSekarang] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleAjukanSekarang = async () => {
    setShowAjukanSekarang(true);
  };

  const handleCloseModal = () => {
    setShowAjukanSekarang(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
      <Header onClick={() => handleAjukanSekarang()} />
      <SolusiDana />
      <Info />
      <TataCaraPengajuan onClick={() => handleAjukanSekarang()} />
      <Produk />
      <div className="break-line my-5"></div>
      <Skema />
      <DapatkanPenawaran onClick={() => handleAjukanSekarang()} />
      {/* Modals */}
      <AjukanSekarangModal show={showAjukanSekarang} onClose={handleCloseModal} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <div
          className="fabs"
          onClick={scrollToTop}
          style={{
            right: '8px',
            bottom: '8px'
          }}
        >
          <div
            className="action"
            style={{
              backgroundColor: '#fcd834',
              borderRadius: '100%',
              width: '60px',
              height: '60px'
            }}
          >
            <i className="fa-solid fa-arrow-up text-xl" style={{ color: '#000' }}></i>
          </div>
        </div>
      )}
    </Fragment>
  );
}
