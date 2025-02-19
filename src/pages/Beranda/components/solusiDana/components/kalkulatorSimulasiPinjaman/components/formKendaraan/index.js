'use client';

import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function Index(props) {
  const { show } = props;

  const [formKendaraan, setFormKendaraan] = useState({});
  const [error, setError] = useState({});

  const [dataArea, setDataArea] = useState([]);
  const [dataInsuranseType, setDataInsuranseType] = useState([]);

  const getDataArea = async () => {
    const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
    axios
      .get(domainApi + '/api/getAreas')
      // .get('/api/hello')
      .then((response) => {
        console.log('Data area:', response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Menambahkan header CORS agar bisa diakses dari mana saja
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  };

  const getDataInsuranseType = async () => {
    const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
    try {
      const response = await axios.get(domainApi + '/Api/getInsuranseType');
      console.log('a', response);
      // setDataArea(response.data); // Pastikan API mengembalikan array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataArea();
    // getDataInsuranseType();
  }, []);

  return (
    <Fragment>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3">
          <label htmlFor="area">Area Tempat Tinggal</label>
          <select className="custom-select font-italic" name="area">
            <option disabled="" value="">
              Area Tempat Tinggal...
            </option>
            {dataArea.map((area, index) => (
              <option key={index} value={area.id}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="merk">Merk Kendaraan</label>
          <select className="custom-select font-italic" name="merk">
            <option disabled="" value="">
              Merk...
            </option>
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="type">Tipe Kendaraan</label>
          <select className="custom-select font-italic" name="type">
            <option disabled="" value="">
              Tipe...
            </option>
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="tahun">Tahun Kendaraan</label>
          <select className="custom-select font-italic" name="tahun">
            <option disabled="" value="">
              Tahun...
            </option>
          </select>
        </div>
        <div className="col-12 pt-2 text-danger" style={{ fontSize: '10px' }}>
          Tahun Kendaraan tidak tersedia untuk jenis kendaraan dan area yang anda pilih
        </div>
        {show === 'mobil' && (
          <div className="col-12 col-md-6">
            <label htmlFor="tenor">Jenis Asuransi</label>
            <select className="custom-select font-italic" name="jenis-asuransi">
              <option disabled="" value="">
                Jenis Asuransi...
              </option>
              <option value="[object Object]">All Risk</option>
              <option value="[object Object]">Total Lost Only</option>
            </select>
          </div>
        )}
      </div>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3">
          <label htmlFor="min_pengajuan">Minimum pembiayaan</label>
          <input name="min_pengajuan" type="text" className="form-control" readOnly="" />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="max_pengajuan">Maksimum pembiayaan</label>
          <input name="max_pengajuan" type="text" className="form-control" readOnly="" />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="tenor">Tenor</label>
          <select className="custom-select font-italic" name="tenor">
            <option disabled="" value="">
              Tenor...
            </option>
            <option value="12">12 Bulan</option>
            <option value="24">24 Bulan</option>
            <option value="36">36 Bulan</option>
            <option value="48">48 Bulan</option>
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="total_pengajuan">Pembiayaan yang diinginkan</label>
          <input
            name="total_pengajuan"
            type="number"
            className="form-control"
            min="30000000"
            max="100000000"
            step="1000000"
          />
        </div>
      </div>
    </Fragment>
  );
}
