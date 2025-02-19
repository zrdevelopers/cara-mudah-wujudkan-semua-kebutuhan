'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const Index = (props) => {
  const { onClick } = props;
  // const btnWhatsApp = "https://api.whatsapp.com/send?phone=62881228883616&text=Halo%2C%20saya%20ingin%20pinjaman%20dana%20dengan%20data%20sebagai%20berikut%3A%20%0A%0ANama%3A%20(isi%20nama)%20%0AArea%3A%20(isi%20area)"

  return (
    <Fragment>
      <header className="header-2-fixed-top">
        <div className="">
          <nav
            className="navbar navbar-expand-lg adira-navbar"
            style={{
              width: '100%',
              borderBottomRightRadius: '0px'
            }}
          >
            <Link href="/" className="navbar-brand">
              <Image
                src="./assets/images/LOGO-ADIRA.png"
                alt="Logo"
                width={120}
                height={30}
                className="d-inline-block align-top"
              />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
            <div
              className="navbar-brand mpl-ajukan-sekarang"
              onClick={onClick}
              style={{
                border: 'solid #333',
                borderRadius: '10px'
              }}
            >
              <Image
                src="./assets/images/button-ajukan-header.png"
                alt="Button Image"
                width={150}
                height={32} // Adjust height as needed
                className="d-inline-block align-top"
              />
            </div>
          </nav>
        </div>
        <div
          id="open-menu"
          className="collapse navbar-collapse"
          style={{
            position: 'absolute',
            width: '100%',
            top: '-60px',
            borderBottomRightRadius: '55px',
            opacity: '0.95'
          }}
        >
          <div
            className="bg-white flex-column justify-content-start py-4 px-2"
            style={{ borderBottomRightRadius: '55px' }}
          >
            <div style={{ textAlign: 'left', marginTop: '60px' }}></div>
            <div style={{ textAlign: 'center', marginTop: '-120px' }}></div>
          </div>
        </div>
      </header>
      {/* Desktop Version */}
      <div className="bannerresDesk" style={{ paddingTop: '64px', position: 'relative' }}>
        <Image
          src="./assets/images/Maret25-SOLUSI-DANA_LP-DESKTOP.jpg"
          alt="banner-multiguna"
          width={1400} // Adjust width as needed
          height={331} // Adjust height as needed
          priority
          style={{ width: '100%', height: 'auto' }} // Ensure it scales responsively
        />
        <a className="overlay-v2 font-weight-bolder" href="#">
          Ajukan Sekarang
        </a>
      </div>

      {/* Mobile Version */}
      <div className="bannerresMob" style={{ paddingTop: '64px', position: 'relative' }}>
        <Image
          src="./assets/images/Maret25-SOLUSI-DANA_LP-MOBILE.jpg"
          alt="banner-multiguna"
          width={425} // Adjust width as needed
          height={425} // Adjust height as needed
          priority
          style={{ width: '100%' }} // Ensure it scales responsively
        />
        <a href="#">
          <Image
            className="overlay"
            src="./assets/images/button-ajukan-header-mobile.png"
            alt="button-ajukan-header-mobile"
            width={145} // Adjust width as needed
            height={23} // Adjust height as needed
          />
        </a>
      </div>
    </Fragment>
  );
};

export default Index;
