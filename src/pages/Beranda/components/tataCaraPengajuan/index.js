'use client';

import { Fragment } from 'react';

export default function Index(props) {
  const { onClick } = props;
  return (
    <Fragment>
      <div className="mt-5" style={{ background: '#f2f2f2', padding: '20px' }}>
        <div className="row">
          <div
            className="col-12 col-md-3 text-center mb-3"
            style={{
              fontSize: '24px',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="WixMadeforTextBold2-font" style={{ fontSize: '24px' }}>
              <b>Tata Cara Pengajuan</b>
            </span>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-6 col-md-3">
                <div className="text-center">
                  <img src="./assets/images/pengajuan-1.png" alt="" className="w-100" />
                  <p className="text-langkah">
                    <b>Isi Form Pengajuan</b>
                  </p>
                  <p>
                    Siapkan dan isi data Jaminan BPKB Motor/Mobil serta lengkapi data diri Sahabat
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="text-center">
                  <img src="./assets/images/pengajuan-2.png" alt="" className="w-100" />
                  <p className="text-langkah">
                    <b>Konfirmasi Data Penganjuan</b>
                  </p>
                  <p>
                    Sahabat akan dihubungi oleh Tim Adira Finance untuk konfirmasi Pinjaman Jaminan
                    BPKB yang telah Sahabat ajukan
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="text-center">
                  <img src="./assets/images/pengajuan-3.png" alt="" className="w-100" />
                  <p className="text-langkah">
                    <b>Survei</b>
                  </p>
                  <p>
                    Tim Adira Finance akan melakukan survei dan validasi terkait pengajuan Pinjaman
                    Jaminan BPKB Sahabat
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="text-center">
                  <img src="./assets/images/pengajuan-4.png" alt="" className="w-100" />
                  <p className="text-langkah">
                    <b>Pencairan Dana</b>
                  </p>
                  <p>
                    Apabila pengajuan Sahabat disetujui, dana akan segera dicairkan ke rekening
                    Sahabat atau dapat diambil tunai di cabang Adira Finance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="bannerresDesk mt-3 mb-5"
        style={{ position: 'relative', margin: '15px', padding: '0px' }}
      >
        <img
          style={{ borderRadius: '10px' }}
          src="./assets/images/center-banner-desktop-v2.jpg"
          className="d-block w-100"
          alt="center-banner-desktop"
        />
        <a className="overlay-center-v2 pointer" onClick={onClick}>
          Ajukan Sekarang
        </a>
      </div>
    </Fragment>
  );
}
