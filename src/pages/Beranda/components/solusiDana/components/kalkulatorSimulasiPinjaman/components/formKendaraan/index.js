'use client';

import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function Index(props) {
  const { show } = props;

  const [formKendaraan, setFormKendaraan] = useState({
    nama: '',
  });
  const [error, setError] = useState({});

  const [dataArea, setDataArea] = useState([]);
  const [dataInsuranseType, setDataInsuranseType] = useState([]);
  const [dataBrands, setDataBrands] = useState([]);

  const getDataArea = async () => {
    axios
      .get('/api/getAreas')
      .then((response) => {
        setDataArea(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const getDataInsuranseType = async () => {
    axios
      .get('/api/getInsuranseType')
      .then((response) => {
        setDataInsuranseType(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  // Jika select area
  const getDataBrands = async () => {
    const postData = {
      group_object: "001",
      vehicle_type: "3",
    };

    axios
      .post('/api/getBrands', postData)
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
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3">
          <label htmlFor="area">Area Tempat Tinggal</label>
          <select className="custom-select font-italic" name="area">
            <option disabled="" value="">
              Area Tempat Tinggal...
            </option>
            {dataArea.map((area, index) => (
              <option key={index} value={area?.id}>
                {area?.name}
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
              {dataInsuranseType?.map((area, index) => (
                <option key={index} value={area?.id}>
                  {area?.name}
                </option>
              ))}
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
