'use client';

import { Fragment, useState } from 'react';
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

  const handleAjukanSekarang = async () => {
    setShowAjukanSekarang(true);
  };

  const handleCloseModal = () => {
    setShowAjukanSekarang(false);
  };

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
    </Fragment>
  );
}
