'use client';
import { Fragment, useState, useEffect } from 'react';
import KendaraanMotor from './components/kendaraanMotor';
import KendaraanMobil from './components/kendaraanMobil';
import axios from 'axios';

export default function Index() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [selectedTab, setSelectedTab] = useState('motor'); // State untuk tab aktif
  const [dataArea, setDataArea] = useState([]);
  const [dataInsuranseType, setDataInsuranseType] = useState([]);

  const [formKendaraan, setFormKendaraan] = useState({
    area: '',
    merk: '',
    type: '',
    tahun: '',
    jenis_asuransi: '',
    min_pengajuan: 3000000,
    max_pengajuan: 30000000,
    tenor: '',
    total_pengajuan: 5000000
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormKendaraan((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHitung = () => {
    console.log('handleHitung', formKendaraan);
  };

  const clearForm = async () => {
    setFormKendaraan({
      area: '',
      merk: '',
      type: '',
      tahun: '',
      jenis_asuransi: '',
      min_pengajuan: 3000000,
      max_pengajuan: 30000000,
      tenor: '',
      total_pengajuan: 5000000
    });
  };

  const getDataArea = async () => {
    axios
      .get(domain + '/api/getAreas')
      .then((response) => {
        setDataArea(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const getDataInsuranseType = async () => {
    axios
      .get(domain + '/api/getInsuranseType')
      .then((response) => {
        setDataInsuranseType(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getDataArea();
    getDataInsuranseType();
  }, []);

  return (
    <Fragment>
      <div className="cal-box" id="Appsmpl">
        <div className="cal-title mb-3">
          <span>
            <b>Kalkulator Simulasi Pinjaman</b>
          </span>
        </div>
        <div className="mb-3 d-flex">
          <div className="cal-pil-bpkb">
            <b>BPKB Kendaraan</b>
          </div>
          <div
            className={`pilih-bpkb ${selectedTab === 'motor' ? 'pilih_bpkb_active' : ''}`}
            onClick={() => {
              setSelectedTab('motor'),
                setFormKendaraan({
                  ...formKendaraan,
                  min_pengajuan: 3000000,
                  max_pengajuan: 30000000,
                  total_pengajuan: 5000000
                });
            }}
          >
            Motor
          </div>
          <div
            className={`pilih-bpkb ${selectedTab === 'mobil' ? 'pilih_bpkb_active' : ''}`}
            onClick={() => {
              setSelectedTab('mobil'),
                setFormKendaraan({
                  ...formKendaraan,
                  min_pengajuan: 30000000,
                  max_pengajuan: 100000000,
                  total_pengajuan: 50000000
                });
            }}
          >
            Mobil
          </div>
        </div>

        {/* Content Berdasarkan Tab */}
        {selectedTab === 'motor' && (
          <KendaraanMotor
            formKendaraan={formKendaraan}
            onChange={handleChange}
            dataArea={dataArea}
            dataInsuranseType={dataInsuranseType}
            selectedTab={selectedTab}
            setFormKendaraan={setFormKendaraan}
          />
        )}
        {selectedTab === 'mobil' && (
          <KendaraanMobil
            formKendaraan={formKendaraan}
            onChange={handleChange}
            dataArea={dataArea}
            dataInsuranseType={dataInsuranseType}
            selectedTab={selectedTab}
            setFormKendaraan={setFormKendaraan}
          />
        )}
        <div className="mt-4 d-block d-lg-none">
          <button className="hitung-cicilan" disabled="">
            <span>Hitung</span>
          </button>
          <div className="mb-2 mt-3" style={{ fontFamily: 'Baloo2Bold', fontSize: '16px' }}>
            Estimasi Cicilan:
          </div>
          <div style={{ fontFamily: 'Baloo2Bold', background: 'white', padding: '5px' }}>
            <span style={{ fontSize: '16px', paddingRight: '10px' }}>Rp -</span>
            <span style={{ fontSize: '16px' }}>/bulan*</span>
          </div>
        </div>
        <div className="mt-4 d-none d-lg-block">
          <div className="mb-2" style={{ fontFamily: 'Baloo2Bold', fontSize: '20px' }}>
            <b>Estimasi Cicilan:</b>
          </div>
          <div className="row">
            <div className="col-8">
              <div style={{ fontFamily: 'Baloo2Bold', background: 'white', padding: '12px 5px' }}>
                <span style={{ fontSize: '25px', paddingRight: '25px' }}>
                  <b>Rp -</b>
                </span>
                <span style={{ fontSize: '25px' }}>
                  <b>/bulan*</b>
                </span>
              </div>
            </div>
            <div className="col-4">
              <button className="hitung-cicilan" onClick={handleHitung}>
                <span>
                  <b>Hitung</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Catatan */}
      <div className="mb-5 text-tenor">
        Minimum tenor 12 bulan dan maksimal tenor 48 bulan. *Nominal pembiayaan bersifat estimasi.
        Besarnya pembiayaan hasil verivikasi kodisi kendaraan.
      </div>
    </Fragment>
  );
}
