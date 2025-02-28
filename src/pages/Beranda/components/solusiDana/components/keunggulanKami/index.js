'use client';

import React, { Fragment, useState, useEffect } from 'react';

export default function Index() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [dataKeunggulanKami, setDataKeunggulanKami] = useState([]);

  const getKeunggulanKami = async () => {
    const keunggulanKami = [
      { src: '/assets/images/syarat-mudah.png', alt: 'syarat-mudah', text: 'Syaratnya Mudah' },
      {
        src: '/assets/images/proses-pencairan-dana-cepat.png',
        alt: 'proses-pencairan-dana-cepat',
        text: 'Proses Pencairan Dana Cepat'
      },
      {
        src: '/assets/images/jaringan-pembayaran-luas.png',
        alt: 'jaringan-pembayaran-luas',
        text: 'Jaringan Pembayaran Angsuran yang Luas'
      },
      {
        src: '/assets/images/perlindungan-asuransi-lengkap.png',
        alt: 'perlindungan-asuransi-lengkap',
        text: 'Pilihan Perlindungan Asuransi yang Lengkap'
      },
      {
        src: '/assets/images/Penyimpanan-BPKB-aman.png',
        alt: 'Penyimpanan-BPKB-aman',
        text: 'Sistem Penyimpanan BPKB yang aman'
      },
      {
        src: '/assets/images/layanan-ratusan-cabang.png',
        alt: 'layanan-ratusan-cabang',
        text: 'Layanan yang Bersahabat di Ratusan Cabang'
      }
    ];
    setDataKeunggulanKami(keunggulanKami);
  };

  useEffect(() => {
    getKeunggulanKami();
  }, []);

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
        {dataKeunggulanKami.map((item, index) => (
          <div key={item?.id || index} className="col-6 col-md-2 d-flex">
            <div
              style={{ background: '#f8f8f8' }}
              className="w-100 py-2 px-1 d-flex flex-column justify-content-center text-center align-items-center"
            >
              <img src={domain + item.src} alt={item.alt} className="w-75" />
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
