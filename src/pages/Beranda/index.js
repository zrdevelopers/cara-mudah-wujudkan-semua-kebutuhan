import { Fragment } from 'react';
import Header from '@/components/header';
import SolusiDana from '@/pages/Beranda/components/solusiDana';
import Info from '@/pages/Beranda/components/info';
import TataCaraPengajuan from '@/pages/Beranda/components/tataCaraPengajuan';
import Produk from '@/pages/Beranda/components/produk';

export default function Index() {
  return (
    <Fragment>
      <Header />
      <SolusiDana />
      <Info />
      <TataCaraPengajuan />
      <Produk />
    </Fragment>
  );
}
