import { Fragment } from 'react';
import Image from 'next/image';

export default function Index() {
  return (
    <Fragment>
      <div
        id="topSimulasi"
        className="text-center mb-2"
        style={{ fontFamily: 'WixMadeforTextBold2', fontSize: '24px' }}
      >
        <span>
          <b>Keunggulan Kami</b>
        </span>
      </div>
      <div id="syaratMudah" className="row mb-5" style={{ gridRowGap: '15px' }}>
        {[
          { src: './assets/images/syarat-mudah.png', alt: 'syarat-mudah', text: 'Syaratnya Mudah' },
          {
            src: './assets/images/proses-pencairan-dana-cepat.png',
            alt: 'proses-pencairan-dana-cepat',
            text: 'Proses Pencairan Dana Cepat'
          },
          {
            src: './assets/images/jaringan-pembayaran-luas.png',
            alt: 'jaringan-pembayaran-luas',
            text: 'Jaringan Pembayaran Angsuran yang Luas'
          },
          {
            src: './assets/images/perlindungan-asuransi-lengkap.png',
            alt: 'perlindungan-asuransi-lengkap',
            text: 'Pilihan Perlindungan Asuransi yang Lengkap'
          },
          {
            src: './assets/images/Penyimpanan-BPKB-aman.png',
            alt: 'Penyimpanan-BPKB-aman',
            text: 'Sistem Penyimpanan BPKB yang aman'
          },
          {
            src: './assets/images/layanan-ratusan-cabang.png',
            alt: 'layanan-ratusan-cabang',
            text: 'Layanan yang Bersahabat di Ratusan Cabang'
          }
        ].map((item, index) => (
          <div key={index} className="col-6 col-md-2 d-flex">
            <div
              style={{ background: '#f8f8f8' }}
              className="w-100 py-2 px-1 d-flex flex-column justify-content-center text-center align-items-center"
            >
              <Image src={item.src} alt={item.alt} className="w-75" width={100} height={100} />
              <p className="text-wrap" style={{ fontSize: 'small' }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
