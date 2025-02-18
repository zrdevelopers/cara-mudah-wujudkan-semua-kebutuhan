'use client';
import { Fragment } from 'react';

export default function Index() {
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
          <div className="pilih-bpkb pilih_bpkb_active">Motor</div>
          <div className="pilih-bpkb">Mobil</div>
        </div>
        <div className="row mb-3" style={{ rowGap: '15px' }}>
          <div className="col-6 col-md-3">
            <label htmlFor="area">Area Tempat Tinggal</label>
            <select className="custom-select" name="area" style={{ fontStyle: 'italic' }}>
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
              <option value="[object Object]">
                Sumbar, Sumsel, Babel, Jambi, Lampung, Bengkulu
              </option>
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
          <div className="col-6 pt-2" style={{ fontSize: '10px', color: 'red', display: 'none' }}>
            Tahun Kendaraan tidak tersedia untuk jenis kendaraan dan area yang anda pilih
          </div>
        </div>
        <div className="row mb-3" style={{ rowGap: '15px' }}>
          <div className="col-6 col-md-3">
            <label htmlFor="min_pengajuan">Minimum pembiayaan</label>
            <input name="min_pengajuan" type="text" className="form-control" readOnly />
          </div>
          <div className="col-6 col-md-3">
            <label htmlFor="max_pengajuan">Maksimum pembiayaan</label>
            <input name="max_pengajuan" type="text" className="form-control" readOnly />
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
              min="3000000"
              max="30000000"
              step="1000000"
            />
          </div>
        </div>
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
              <button className="hitung-cicilan" disabled>
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
