'use client';

import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

export default function Index(props) {
  const { show, formKendaraan, onChange, dataArea, dataInsuranseType } = props;

  const [dataBrands, setDataBrands] = useState([]);
  const [dataModels, setDataModels] = useState([]);
  const [dataYears, setDataYears] = useState([]);
  const [dataMaxPencairan, setDataMaxPencairan] = useState([]);
  const [dataMaxInstalments, setDataInstalments] = useState([]);

  const handleChange = async () => {
    onChange();
  };

  // Jika select area
  const getDataBrands = async () => {
    const postData = {
      group_object: '001',
      vehicle_type: '3'
    };

    axios
      .post('/api/getBrands', postData)
      .then((response) => {
        setDataBrands(response?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Fragment>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3">
          <label htmlFor="area">Area Tempat Tinggal</label>
          <select
            className="custom-select font-italic"
            name="area"
            value={formKendaraan.area}
            onChange={handleChange}
          >
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
          <select
            className="custom-select font-italic"
            name="merk"
            value={formKendaraan.merk}
            onChange={handleChange}
          >
            <option disabled="" value="">
              Merk...
            </option>
            {dataBrands.map((brand, index) => (
              <option key={index} value={brand?.id}>
                {brand?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="type">Tipe Kendaraan</label>
          <select
            className="custom-select font-italic"
            name="type"
            value={formKendaraan.type}
            onChange={handleChange}
          >
            <option disabled="" value="">
              Tipe...
            </option>
            {dataModels.map((model, index) => (
              <option key={index} value={model?.id}>
                {model?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="tahun">Tahun Kendaraan</label>
          <select
            className="custom-select font-italic"
            name="tahun"
            value={formKendaraan.tahun}
            onChange={handleChange}
          >
            <option disabled="" value="">
              Tahun...
            </option>
            {dataYears.map((year, index) => (
              <option key={index} value={year?.id}>
                {year?.name}
              </option>
            ))}
          </select>
        </div>
        {formKendaraan?.type && dataYears.length === 0 && (
          <div className="col-12 pt-2 text-danger" style={{ fontSize: '10px' }}>
            Tahun Kendaraan tidak tersedia untuk jenis kendaraan dan area yang anda pilih
          </div>
        )}
        {show === 'mobil' && (
          <div className="col-12 col-md-6">
            <label htmlFor="tenor">Jenis Asuransi</label>
            <select
              className="custom-select font-italic"
              name="jenis_asuransi"
              value={formKendaraan.jenis_asuransi}
              onChange={handleChange}
            >
              <option disabled="" value="">
                Jenis Asuransi...
              </option>
              {dataInsuranseType?.map((insuranse, index) => (
                <option key={index} value={insuranse?.id}>
                  {insuranse?.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="row mb-3" style={{ rowGap: '15px' }}>
        <div className="col-6 col-md-3">
          <label htmlFor="min_pengajuan">Minimum pembiayaan</label>
          <input
            name="min_pengajuan"
            type="text"
            className="form-control"
            readOnly
            value={formKendaraan.min_pengajuan}
          />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="max_pengajuan">Maksimum pembiayaan</label>
          <input
            name="max_pengajuan"
            type="text"
            className="form-control"
            readOnly
            value={formKendaraan.max_pengajuan}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-3">
          <label htmlFor="tenor">Tenor</label>
          <select
            className="custom-select font-italic"
            name="tenor"
            value={formKendaraan.tenor}
            onChange={handleChange}
          >
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
            value={formKendaraan.total_pengajuan}
            onChange={handleChange}
          />
        </div>
      </div>
    </Fragment>
  );
}
