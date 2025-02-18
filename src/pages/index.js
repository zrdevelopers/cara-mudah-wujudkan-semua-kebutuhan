import Heads from '@/components/head';
import Beranda from '@/pages/Beranda';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Heads
        title="SolusiDana Pinjaman Cepat Jaminan BPKB Motor dan Mobil - Adira"
        description="Dana pinjaman uang tunai cepat lewat pengajuan gadai BPKB motor dengan cicilan ringan dan bunga rendah. Proses cepat, aman, dan mudah di Adira Finance"
        author="ZRDevelopers"
        keywords="gadai bpkb motor, gadai bpkb mobil"
        // themeColor
        // manifest
        // url
        // image
      />
      <Beranda />
      <Footer />
    </>
  );
}
