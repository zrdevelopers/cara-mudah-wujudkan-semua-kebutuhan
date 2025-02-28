'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { onClick } = props;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

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
                src={domain + '/assets/images/LOGO-ADIRA.png'}
                alt="Logo"
                width={120}
                height={30}
                className="d-inline-block align-top"
              />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
            <a
              className="navbar-brand mpl-ajukan-sekarang pointer"
              onClick={onClick}
              style={{
                border: 'solid #333',
                borderRadius: '10px'
              }}
            >
              <Image
                src={domain + '/assets/images/button-ajukan-header.png'}
                alt="Button Image"
                width={150}
                height={32} // Adjust height as needed
                className="d-inline-block align-top"
              />
            </a>
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
          src={domain + '/assets/images/Maret25-SOLUSI-DANA_LP-DESKTOP.jpg'}
          alt="banner-multiguna"
          width={1400} // Adjust width as needed
          height={331} // Adjust height as needed
          priority
          style={{ width: '100%', height: 'auto' }} // Ensure it scales responsively
        />
        <a className="overlay-v2 font-weight-bolder pointer" onClick={onClick}>
          Ajukan Sekarang
        </a>
      </div>

      {/* Mobile Version */}
      <div className="bannerresMob" style={{ paddingTop: '64px', position: 'relative' }}>
        <Image
          src={domain + '/assets/images/Maret25-SOLUSI-DANA_LP-MOBILE.jpg'}
          alt="banner-multiguna"
          width={425} // Adjust width as needed
          height={425} // Adjust height as needed
          priority
          style={{ width: '100%' }} // Ensure it scales responsively
        />
        <a className="pointer" onClick={onClick}>
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

Index.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Index;
