'use client';

import { Fragment } from 'react';

export default function Index(props) {
  const { show } = props;
  return (
    <Fragment>
      <div class="row mb-3" style="row-gap: 15px;">
        <div class="col-6 col-md-3">
          <label for="area">Area Tempat Tinggal</label>
          <select class="custom-select" name="area" style="font-style: italic;">
            <option disabled="" value="">
              Area Tempat Tinggal...
            </option>
            <option value="[object Object]">Aceh, Sumut, Riau, Kep. Riau</option>
            <option value="[object Object]">Bali &amp; Nusa Tenggara</option>
            <option value="[object Object]">Jawa Barat</option>
            <option value="[object Object]">Jabodetabek</option>
            <option value="[object Object]">Jawa Tengah</option>
            <option value="[object Object]">Jawa Timur</option>
            <option value="[object Object]">Kalimantan</option>
            <option value="[object Object]">Sulawesi, Maluku, Papua</option>
            <option value="[object Object]">Sumbar, Sumsel, Babel, Jambi, Lampung, Bengkulu</option>
          </select>
        </div>
        <div class="col-6 col-md-3">
          <label for="merk">Merk Kendaraan</label>
          <select class="custom-select" name="merk" style="font-style: italic;">
            <option disabled="" value="">
              Merk...
            </option>
          </select>
        </div>
        <div class="col-6 col-md-3">
          <label for="type">Tipe Kendaraan</label>
          <select class="custom-select" name="type" style="font-style: italic;">
            <option disabled="" value="">
              Tipe...
            </option>
          </select>
        </div>
        <div class="col-6 col-md-3">
          <label for="tahun">Tahun Kendaraan</label>
          <select class="custom-select" name="tahun" style="font-style: italic;">
            <option disabled="" value="">
              Tahun...
            </option>
          </select>
        </div>
        <div class="col-6 pt-2" style="font-size: 10px;color: red;/* display: none; */">
          Tahun Kendaraan tidak tersedia untuk jenis kendaraan dan area yang anda pilih
        </div>
        <div class="col-12 col-md-6">
          <label for="tenor">Jenis Asuransi</label>
          <select class="custom-select" name="jenis-asuransi" style="font-style: italic;">
            <option disabled="" value="">
              Jenis Asuransi...
            </option>
            <option value="[object Object]">All Risk</option>
            <option value="[object Object]">Total Lost Only</option>
          </select>
        </div>
      </div>
      <div class="row mb-3" style="row-gap: 15px;">
        <div class="col-6 col-md-3">
          <label for="min_pengajuan">Minimum pembiayaan</label>
          <input name="min_pengajuan" type="text" class="form-control" readonly="" />
        </div>
        <div class="col-6 col-md-3">
          <label for="max_pengajuan">Maksimum pembiayaan</label>
          <input name="max_pengajuan" type="text" class="form-control" readonly="" />
        </div>
        <div class="col-6 col-md-3">
          <label for="tenor">Tenor</label>
          <select class="custom-select" name="tenor" style="font-style: italic;">
            <option disabled="" value="">
              Tenor...
            </option>
            <option value="12">12 Bulan</option>
            <option value="24">24 Bulan</option>
            <option value="36">36 Bulan</option>
            <option value="48">48 Bulan</option>
          </select>
        </div>
        <div class="col-6 col-md-3">
          <label for="total_pengajuan">Pembiayaan yang diinginkan</label>
          <input
            name="total_pengajuan"
            type="number"
            class="form-control"
            min="30000000"
            max="100000000"
            step="1000000"
          />
        </div>
      </div>
    </Fragment>
  );
}
